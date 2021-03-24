import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "white",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  nav: {
    flex: 1,
    align: "right",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  colorTextPrimary: {
    color: "#076585"
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container space={24} alignItems="center">
          <Grid item>
            <Typography
              variant="h4"
              color="textPrimary"
              noWrap
              className={classes.toolbarTitle}
            >
              <a href="/" className={classes.colorTextPrimary}>PassportToClinicalTeaching</a>
            </Typography>
          </Grid>

          <Grid item xs container direction="row-reverse">
              <Button
                  href="#"
                  color="primary"
                  variant="outlined"
                  className={classes.link}
                >
                  Account
              </Button>
            
            <Grid item>
                <Button
                    color="secondary"
                    href="/about/faq"
                    className={classes.link}
                  >
                    About
                </Button>
            </Grid>

            <Grid item>
                <Button
                    color="secondary"
                    href="#"
                    className={classes.link}
                  >
                    Support
                </Button>
              
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
