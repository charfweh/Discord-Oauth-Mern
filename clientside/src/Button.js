import React from "react"
import Button from  "@material-ui/core/Button"
import './App.css';

function LoginButton(props){
    return(
        <Button variant="contained"color = "primary" onClick = {props.onClick}>Login </Button>
    )
}

function LogoutButton(props){
    return(
        <Button variant = "contained" color = "secondary" onClick = {props.onClick}>Logout</Button>
    )
}

// function CheckLogin(props){
//     const LoginCheck = props.isLoggedIn;
//     if(LoginCheck){
//         return <LogoutButton />
//     }else{
//         return <LoginButton />
//     }
// }
class ButtonComponent extends React.Component{
    //oauth url
    // authHandler = ()=>{
    // }
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            isLoggedIn : false,
        };
    }
    // login and logout functions
    handleLogin(){
        window.location.href = "https://discord.com/oauth2/authorize?client_id=536543417271058444&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauthorize%2Fcallback&response_type=code&scope=identify%20guilds"
        this.setState({
            isLoggedIn: true
        })
        console.log(this.state.isLoggedIn)

    }

    handleLogout(){
        this.setState({
            isLoggedIn : false
        })
        console.log(this.state.isLoggedIn)

    }
    // render method
    render(){
        const isLoggedIn = this.state.isLoggedIn
            return(
                <>
                    {isLoggedIn ? <LogoutButton onClick = {this.handleLogout} />
                    : <LoginButton onClick = {this.handleLogin} />
                    }
                </>
            )
    }
}

export default ButtonComponent;