import './App.css';
import React from 'react';
import ButtonComponent from "./Button"
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Iuhhh</p>
          <ButtonComponent name = "Login"/>
        </div>
      </div>
    );
  }
}

export default App;
