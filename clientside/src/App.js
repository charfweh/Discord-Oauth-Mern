import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "@material-ui/core/Container"
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import NavbarComponent from "./Navbar"
import {LoginButton, LogoutButton} from "./Button";
import axios from "axios";
import Manage from './pages/Manage';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
const authurl = "https://discord.com/oauth2/authorize?client_id=536543417271058444&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauthorize%2Fcallback&response_type=code&scope=identify%20guilds"

function AuthComponent(props){
  const state = props.login
  return(
    <>
        {state ? <LogoutButton login = {props.login} onClick = {props.onClick}/> : <LoginButton login = {props.login} onClick = {props.onClick}/>}
    </>
  )
}
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
        <NavbarComponent username = {this.state.username} isLogin ={this.state.login}/>
        <div className="App-header">
          <h1><KeyboardArrowRightOutlinedIcon fontSize = "large"/>Awesome Name</h1>
          <Container className = "infoContainer" maxWidth = "lg">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Container>
          <AuthComponent login = {this.state.login} onClick = {this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
