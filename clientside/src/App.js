import './App.css';
import React from 'react';
import ButtonComponent from "./Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "@material-ui/core/Container"
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><KeyboardArrowRightOutlinedIcon fontSize = "large"/>GuildBoard</h1>
          <Container className = "infoContainer" maxWidth = "lg">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Container>
          <ButtonComponent name = "Login" color = "primary"/>
        </div>
      </div>
    );
  }
}

export default App;
