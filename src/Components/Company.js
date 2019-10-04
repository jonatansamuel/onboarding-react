import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,FormControl,FormHelperText,Input,InputLabel } from '@material-ui/core';

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

    <h1>Company Information</h1>
    <FormControl>
  
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
            <TextField
              className={classes.margin}
              label="Company"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

            <TextField
              className={classes.margin}
              label="Tax ID"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Role/Title"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Website"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Address"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="City"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="State"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Zip"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              label="Address"
              variant="outlined"
              style = {{ width:800 }}
              id="mui-theme-provider-outlined-input"
            />
    </form>
  );
}
