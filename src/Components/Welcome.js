import React from 'react';
import { Grid,Button,Typography,Paper,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
    <center>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Welcome
        </Typography>
      <Grid
          container
          spacing={0}
          direction="column"
          flexGrow="1"
          alignItems="center"
          justify="center"
          >
          <Link to ="/Product">
            <Button
            variant="contained"
            color="primary"
            style = {{ width:400 }}
            className={classes.button}>
              Create Account
            </Button>
            </Link>
            </Grid>

      </Paper>
      </center>
    </div>
  );
}
