import React, { Component } from 'react';
import Container from "@material-ui/core/Container"
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import {LoginButton, LogoutButton} from "../Button";
import NavbarComponent from "../Navbar"
function AuthComponent(props){
    const state = props.login
    return(
      <>
          {state ? <LogoutButton login = {props.login} onClick = {props.onClick}/> : <LoginButton login = {props.login} onClick = {props.onClick}/>}
      </>
    )
  }
class Home extends Component {
    render() {
        return (
            <div className = "App">
                <NavbarComponent username = {this.props.username} isLogin ={this.props.login}/>
                <div className="App-header">
                    <h1><KeyboardArrowRightOutlinedIcon fontSize = "large"/>Awesome Name</h1>
                    <Container className = "infoContainer" maxWidth = "lg">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Container>
                    <AuthComponent login = {this.props.login} onClick = {this.props.handleClick}/>
                </div>
            </div>
        );
    }
}

export default Home;