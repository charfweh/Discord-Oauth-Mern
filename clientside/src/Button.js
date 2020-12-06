import React from "react"
import Button from  "@material-ui/core/Button"
import './App.css';

function LoginButton(props){
    console.log(props)
    return(
        <Button variant="contained"color = "primary" onClick = {props.onClick}>Login </Button>
    )
}

function LogoutButton(props){
    console.log(props)
    return(
        <Button variant = "contained" color = "secondary" onClick = {props.onClick}>Logout</Button>
    )
}

export {
    LoginButton,
    LogoutButton
}