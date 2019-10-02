import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,Button,Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
    <Grid
    container
    spacing={0}
    direction="column"
    flexGrow="1"
    alignItems="center"
    justify="center"
    >

    <h1>Payment Method</h1>
            <TextField
              className={classes.margin}
              label="Name on Card"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Card Number"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Expire Date"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="CVV"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Billing Address"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <center>
            <Link to="/Welcome">
            <Button
            variant="contained"
            color="primary"
            style = {{ width:300 }}
            className={classes.button}>
              Continue
            </Button>
            </Link>
          </center>
    </Grid>

</form>
  );
}
