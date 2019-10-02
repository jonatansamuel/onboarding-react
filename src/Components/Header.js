import React from 'react';
import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black' ,
  },
  title: {
    flexGrow: 1,
  },
}));

// import mklogo from './images/mklogo.png';
// <img src = { mklogo } />

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar classes={{root: classes.root}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>

            MK Decision
          </Typography>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
