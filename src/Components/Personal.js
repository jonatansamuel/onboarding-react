import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

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

    <h1>Personal Information</h1>
            <TextField
              className={classes.margin}
              label="First Name"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Last Name"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Email"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Phone"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Password"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />
</form>
  );
}
