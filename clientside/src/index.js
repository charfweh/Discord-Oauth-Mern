import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Manage from './pages/Manage';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path= "/"><App /></Route>
      <Route exact path = "/manage/"><Manage/></Route>
      <Route exact path = "/manage/:id"><Manage/></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
