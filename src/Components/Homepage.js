import React from 'react';
import { makeStyles,Button,Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(25),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (

    <Grid
    container
    spacing={0}
    direction="column"
    flexGrow="1"
    alignItems="center"
    justify="center"
    >
    <Link to ="/Personal">
      <Button
      variant="contained"
      color="primary"
      style = {{ width:400 }}
      className={classes.button}>
        Create Account
      </Button>
      </Link>
      </Grid>

  );
}
