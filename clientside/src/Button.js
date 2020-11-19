import React from "react"
import Button from "react-bootstrap/Button"
class ButtonComponent extends React.Component{
    render(){
        return(
            <Button variant = "outline-primary" size = "lg">{this.props.name}</Button>
        )
    }
}

export default ButtonComponent;