import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GuildCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className = "App">
            <Card className={classes.root}>
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
                <br />
                {'Manage em!'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Manage</Button>
            </CardActions>
            </Card>
    </div>
  );
}
