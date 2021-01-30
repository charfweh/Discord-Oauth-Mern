import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuildManage from "./pages/GuildManage"
import NotFound from "./chunks/notFound"
import axios from "axios";
import Manage from './pages/Manage';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './pages/Home';
export let authurl = "https://discord.com/oauth2/authorize?client_id=536543417271058444&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauthorize%2Fcallback&response_type=code&scope=identify%20guilds"


function Test(){
    return(
      <p>Something</p>
    )
}
class App extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      login : false,
      username : "Your beautiful nickname"
    }
  }
  handleClick(){
    // if user is logged in
    if(this.state.login){
      // show the logout button
      axios.get("/authorize/logout").then(res=>{
        this.setState({
          login: false,
          username : "Your beautiful nickname"
        })
        this.forceUpdate();
      }).catch((err)=>{
        console.log(err);
      })
    }else{
      // if user is not logged in
      //show the auth href
      window.location.href = authurl;
    }
  }

  // GETTING THE USER DATA
  componentDidMount(){
    // Please check REACT component lifecycle to understand this, whenever component mounts itself, this method will be called

    axios.get("/authorize/getUserData").then(res=>{
      console.log("res" + res.data.login)
      if(res.data.login) {
        this.setState({
          login: true,
          username : res.data.username
        })
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path= "/"><Home username = {this.state.username} login = {this.state.login} handleClick = {this.handleClick}/></Route>
            <Route exact path = "/manage/"><Manage username = {this.state.username} login = {this.state.login}/></Route>
            <Route exact path = "/manage/:id(\d{18})"><GuildManage/></Route>
            <Route component = {NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
