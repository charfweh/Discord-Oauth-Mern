import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    paddingBottom: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MutualGuildCard(props) {
  const classes = useStyles();
  return (
    <div className = "App">
            <Card className={classes.root} variant = "outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Server Name
                </Typography>
                <Typography variant="h5" component="h2">
                {props.mutualGuilds.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Server ID
                </Typography>
                <Typography variant="body2" component="p">
                {props.mutualGuilds.id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to = {`/manage/${props.mutualGuilds.id}`}>Manage</Link></Button>
            </CardActions>
            </Card>
    </div>
  );
}


export  function InviteGuildCard(props) {
  const classes = useStyles();
  const botURL = "https://discord.com/oauth2/authorize?client_id=536543417271058444&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauthorize%2Fcallback&scope=bot"

  return (
      <div className = "App">
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Server Name
                </Typography>
                <Typography variant="h5" component="h2">
                {props.inviteGuilds.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Server ID
                </Typography>
                <Typography variant="body2" component="p">
                {props.inviteGuilds.id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href = {botURL} target = "_blank">Invite</a></Button>
            </CardActions>
            </Card>
    </div>
  );
}
