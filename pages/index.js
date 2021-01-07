import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },

}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
   <Grid container spacing={2} direction="row" alignItems="center">
  
      
          <Grid item xs={7}>

                
          <Button variant="contained" color="primary">
         Go to Analytics screen
          </Button>

          <Button variant="contained" color="primary">
         Log out
          </Button>

          </Grid>
          </Grid>
     
</div>
  

  );
}