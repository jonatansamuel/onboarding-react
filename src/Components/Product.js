import React from 'react';
import { makeStyles,Grid,Card,CardContent,Collapse,IconButton,Typography,CardActions,CardActionArea, Button,Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { shadows } from '@material-ui/system';
import silver from '../images/silver.png';
import gold from '../images/gold.png';
import platinum from '../images/platinum.png';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    margin: 'fixed',
    width: 300,
    maxHeight: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'fixed',
    display: 'block',
    width: 128,
    height: 128,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
<div className={classes.root}>
    <Grid
    container
    spacing={0}
    direction="horizontal"
    flexGrow="1"
    alignItems="w"
    justify="center">
    <Card className={classes.card}>
      <CardActionArea>
        <center>
          <img className={classes.img} alt="complex" src = { silver } />
        </center>
        <CardContent>
          <center>
            <Typography gutterBottom variant="h5" component="h2">
              Silver Package
            </Typography>
          </center>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis in excepturi enim molestiae! Reprehenderit qui, expedita eligendi optio eni
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Customer Acquisition</Typography>
            <Typography paragraph>
              Build brand recognition with modern marketing pages
            </Typography>
            <Typography paragraph>
              That educates your customers on financial products
            </Typography>
            <Typography paragraph>
              provide your customers with simple, online application
            </Typography>
            <Typography>
              workflows for easier account creation anytime, anywhere
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

<Box boxShadow={3}>
    <Card className={classes.card}>
      <CardActionArea>
        <center>
          <img className={classes.img} alt="complex" src = { gold } />
        </center>
        <CardContent>
          <center>
            <Typography gutterBottom variant="h5" component="h2">
              Gold Package
            </Typography>
          </center>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis in excepturi enim molestiae! Reprehenderit qui, expedita eligendi optio eni
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Customer Acquisition</Typography>
            <Typography paragraph>
              Build brand recognition with modern marketing pages
            </Typography>
            <Typography paragraph>
              That educates your customers on financial products
            </Typography>
            <Typography paragraph>
              provide your customers with simple, online application
            </Typography>
            <Typography>
              workflows for easier account creation anytime, anywhere
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Box>


    <Card className={classes.card}>
      <CardActionArea>
        <center>
          <img className={classes.img} alt="complex" src = { platinum } />
        </center>
        <CardContent>
          <center>
            <Typography gutterBottom variant="h5" component="h2">
              Platinum Package
            </Typography>
          </center>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis in excepturi enim molestiae! Reprehenderit qui, expedita eligendi optio eni
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Customer Acquisition</Typography>
            <Typography paragraph>
              Build brand recognition with modern marketing pages
            </Typography>
            <Typography paragraph>
              That educates your customers on financial products
            </Typography>
            <Typography paragraph>
              provide your customers with simple, online application
            </Typography>
            <Typography>
              workflows for easier account creation anytime, anywhere
            </Typography>
          </CardContent>
        </Collapse>
    </Card>
</Grid>

<Link to ="/Cart">
<center>
    <Button
        variant="contained"
        color="primary"
        style = {{ width:400 }}
        className={classes.button}>
        Create Account
    </Button>
</center>
</Link>
</div>
  );
}
