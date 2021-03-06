import React from 'react';
import { makeStyles,Chip,Button,Grid,Divider,Typography }
  from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 760,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Gold

            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $13,800.00
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
          hall.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
      
      </div>
      <div className={classes.section3}>
        <Button color="primary">Add to cart</Button>



        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Payment Method

            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $13,800.00
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
          hall.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
      </div>
      <div className={classes.section3}>
        <Button color="primary">Add to cart</Button>



        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Billing Address

            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $13,800.00
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
          hall.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
      </div>
      <div className={classes.section3}>
        <Link to ="/OrderConfirm">
        <Button color="primary">Place your order.</Button>
        </Link>
      </div>
    </div>
  );
}
