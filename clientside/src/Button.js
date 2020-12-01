import React from "react"
import Button from  "@material-ui/core/Button"
import './App.css';
import axios from "axios";

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

// class ButtonComponent extends React.Component{
//     handleLogin(){
//         // window.location.href = "https://discord.com/oauth2/authorize?client_id=536543417271058444&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauthorize%2Fcallback&response_type=code&scope=identify%20guilds"
//     }

//     handleLogout(){
//     }
//     // render method
//     render(){
//         const login = this.props.login
//         console.log(login)
//             return(
//                 <>
//                     { login ? <LogoutButton/> : <LoginButton/>}
//                 </>
//             )
//     }
// }

// export default ButtonComponent;
export {
    LoginButton,
    LogoutButton
}