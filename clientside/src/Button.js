import React from "react"
import Button from  "@material-ui/core/Button"
import axios from "axios"

class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: "null"
        }
    }
    authHanlder = ()=>{
        window.location = "https://google.com"
        // axios.get("/login")
        // .then(res=>{
        //     this.setState({data: res.status.toString()})
        //     console.log(res.data)
        // }).catch(err=>{
        //     console.error((err))
        // })
      }
    render(){
        return(
            <Button variant="contained" onClick = {this.authHanlder} color = "primary">Data is {this.state.data}</Button>
        )
    }
}

export default ButtonComponent;