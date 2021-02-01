import { Button, Grid, GridList, Container, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'

const navbarLinks = [
   {
      id: 1,
      name: 'Home',
      href: 'home'
   },
   {
      id: 2,
      name: 'Profile',
      href: 'profile'
   },
   {
      id: 3,
      name: 'About',
      href: 'about'
   },
   {
      id: 4,
      name: 'Contact Us',
      href: 'contact'
   },
]

const useStyles = makeStyles(theme => ({
   paper: {
      backgroundColor: 'LightGray',
      width: '100%',
      [theme.breakpoints.up('lg')]: {
         width: '25%',
         height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
         backgroundColor: 'DarkGray'
      }
   },
   container: {
      flexDirection: 'row',
      [theme.breakpoints.up('lg')]: {
         flexDirection: 'column'
      },
      [theme.breakpoints.down('sm')]: {
         color: 'white'
      }
   }
}));

const navbar = () => {
   const classes = useStyles();

   // a somewhat hacky way to change fullWidth Prop.
   const theme = useTheme();
   const breakpointLarge = useMediaQuery(theme.breakpoints.up('lg'));

   return (
      <nav className={classes.paper}>
         <Grid container className={classes.container}>
            {navbarLinks.map(link => (
               <Button key={link.id} href={link.href} fullWidth={breakpointLarge} style={{justifyContent: 'flex-start'}}>
                  <Typography noWrap>{link.name}</Typography>
               </Button>
            ))}
         </Grid>
      </nav>
   )
}

export default navbar
