import React from "react"
import Button from  "@material-ui/core/Button"
import axios from "axios"

class ButtonComponent extends React.Component{
    authHanlder = ()=>{
        axios.get("/login")
        .then(res=>{
            console.log(res.data,res.status)
        }).catch(err=>{
            console.error((err))
        })
      }
    render(){
        return(
            <Button variant="contained" onClick = {this.authHanlder} color = "primary">{this.props.name}</Button>
        )
    }
}

export default ButtonComponent;