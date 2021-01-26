import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Manage from './pages/Manage';
import GuildManage from "./pages/GuildManage"
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import NotFound from "./chunks/notFound"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path= "/"><App /></Route>
      <Route exact path = "/manage/"><Manage/></Route>
      <Route exact path = "/manage/:id(\d{18})"><GuildManage/></Route>
      <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
