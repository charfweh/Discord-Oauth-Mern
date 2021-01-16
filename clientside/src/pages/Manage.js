import React from 'react';
import NavBarComponent from "../Navbar"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import axios from 'axios';
let mutualGuilds, inviteGuilds = [] 
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
  axios.get("/manage/getGuildData").then(res=>{
    console.log(res.data)
    mutualGuilds = res.data.mutualGuilds
    inviteGuilds = res.data.inviteGuilds
    console.log(mutualGuilds[0])
  }).catch(err=>{
    console.log(err)
  })
export default function Manage() {
    const classes = useStyles();
    const id = useParams();
    console.log(id)
  
    {mutualGuilds.map((name,id)=>{
      console.log(name,id)
    })}
    return (
      <div className = "App">
      <NavBarComponent/>
    
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {mutualGuilds[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {mutualGuilds[0].id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Manage
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}