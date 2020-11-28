import React from "react"
import Button from  "@material-ui/core/Button"
import axios from "axios"
import './App.css';
import { Box } from "@material-ui/core";

class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: "null"
        }
    }

    //oauth url
    authHandler = ()=>{
    window.location.href = "https://discord.com/oauth2/authorize?client_id=536543417271058444&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauthorize%2Fcallback&response_type=code&scope=identify%20guilds"
    }

    // userdata method
    getUserData = ()=> {
        axios.get("/authorize/login").then(res=>{
            console.log(res.data.username)
            this.setState({
                data : res.data.username
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    // render method
    render(){
        return(
            <Box p = {5}>
            <Button variant="contained" onClick = {this.authHandler} color = "primary">Login </Button>
            <Button variant="contained" onClick = {this.getUserData} color = "primary">Username: {this.state.data} </Button>
            </Box>
        )
    }
}

export default ButtonComponent;