import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from "axios"
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
          <Button color="inherit" onClick = {props.logoutHanlder}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

class NavBarComponent extends React.Component{
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
        this.state = {
            username : "Please login uwuw",
        }
    }
    componentDidMount(){
            axios.get("/authorize/login").then(res=>{
              if(res.data.isLoggedIn){
                  console.log(res.data.username)
                  this.setState({
                      username : res.data.username,
                  })
                }else{
                  this.setState({
                    username: "Please Login"
                  })
                }
            }).catch(err=>{
                console.log(err)
            })
        
    }
    logout = ()=>{
      axios.get('/authorize/logout')
    }
    render(){
        return(
            <ButtonAppBar username = {this.state.username} logoutHanlder = {this.logout}/>
        )
    }
}

export default NavBarComponent
