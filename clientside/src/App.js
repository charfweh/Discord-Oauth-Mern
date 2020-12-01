import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "@material-ui/core/Container"
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import NavbarComponent from "./Navbar"
import {LoginButton, LogoutButton} from "./Button";
function TestComponent(props){
  console.log(props)
  console.log(props.login)
  const state = props.login
  return(
    <>
        {state ? <LoginButton login = {props.login} onClick = {props.onClick}/> : <LogoutButton login = {props.login} onClick = {props.onClick}/>}
    </>
  )
}
class App extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      login : true,
    }
  }
  handleClick(){
    this.setState({
      login: !this.state.login,
    })
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent/>
        <div className="App-header">
          <h1><KeyboardArrowRightOutlinedIcon fontSize = "large"/>GuildBoard</h1>
          <Container className = "infoContainer" maxWidth = "lg">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Container>
          <TestComponent login = {this.state.login} onClick = {this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
