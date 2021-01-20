import axios from 'axios';
import React ,{Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GuildCard from "../chunks/guildCard"
import NavBarComponent from "../Navbar"
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
      if(res.data){
        this.setState({
          mutualGuilds: res.data.mutualGuilds,
          inviteGuilds : res.data.inviteGuilds
        })
      }
    })
  }
  render() {
    let mutualG = this.state.mutualGuilds.map(g=>{
      console.log(g)
      return(
        <Col sm = "3">
            <GuildCard mutualGuilds = {g}/>
        </Col>
      )
    })
    return (
      <div>
        <NavBarComponent/>
        <Container fluid>
          <Row>
            {mutualG}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Manage;