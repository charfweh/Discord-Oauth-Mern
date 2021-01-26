import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.username}
          </Typography>
          {props.isLogin &&
            <Button variant = "contained" color = "default" className = {classes.menuButton} ><Link to ="/manage">Manage</Link></Button>
          }
          <Button variant = "contained" color = "default" ><Link to ="/">Home</Link></Button>
          
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

class NavBarComponent extends React.Component{
    render(){
        return(
            <ButtonAppBar username = {this.props.username} isLogin = {this.props.isLogin}/>
        )
    }
}

export default NavBarComponent
