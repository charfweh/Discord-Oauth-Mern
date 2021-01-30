import axios from 'axios';
import React ,{Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MutualGuildCard , {InviteGuildCard} from "../chunks/guildCard"
import NavBarComponent from "../Navbar"
import {Alert} from "@material-ui/lab"
import {authurl}  from "../App"
class Manage extends Component {
  constructor(props){
    super(props)
    this.state = {
      mutualGuilds : [],
      inviteGuilds : []
    }
  }
  componentDidMount(){
    axios.get("/manage/getGuildData").then(res=>{
      console.log(res.status)
      if(res.data){
        this.setState({
          mutualGuilds: res.data.mutualGuilds,
          inviteGuilds : res.data.inviteGuilds
        })
      }
    }).catch(err=>console.log(err))

    axios.get("/authorize/getUserData").then(res=>{
      console.log("res" + res.data.login)
      if(res.data.login) {
        this.setState({
          login: true,
          username : res.data.username
        })
      }else{
        window.location.href = authurl;
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  render() {
    let mutualG = this.state.mutualGuilds.map(g=>{
      console.log(g)
      return(
        <Col sm = "3">
            <MutualGuildCard mutualGuilds = {g}/>
            <br></br>
        </Col>
      )
    })

    let inviteG = this.state.inviteGuilds.map(g=>{
      console.log(g)
      return(
        <Col sm = "3">
          <InviteGuildCard inviteGuilds = {g}/>
          <br></br>
        </Col>
      )
    })
    return (
      <div className = "App">
        <NavBarComponent username = {this.state.username} isLogin ={this.state.login}/>
        <Container fluid>
          <Row>
            {mutualG.length != 0 ? mutualG: <Alert severity = "error">Data couldnt be fetched.</Alert>}
          </Row>
          <Row>
            {inviteG.length != 0?  inviteG: <Alert severity = "error">Data couldnt be fetched.</Alert>}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Manage;