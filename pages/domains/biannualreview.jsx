import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";
import Copyright from "../../components/Copyright";
import Navbar from "../../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BiannualReview() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.containerContent}>
      <Head>
        <title>Teaching Passport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.mainContent}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
        >
          <Grid item xs={10} justify="center">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Opt-in and Biannual Review
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Required: 2 Biannual reviews with passport faculty
                  <br />
                  Examples:
                  <br />
                  - Formally commit at start of academic year
                  <br />
                  - Participate in Biannual Reviews
                  <br />
                  <hr/>
                </Typography>

                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" component="h2">
                      Activity
                    </Typography>
                    <div>
                      <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={8}
                        defaultValue="Default Value"
                        variant="filled"
                      />
                    </div>
                    <br />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" component="h2">
                      Additional Notes
                    </Typography>
                    <div>
                      <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={8}
                        defaultValue="Default Value"
                        variant="filled"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" component="h2">
                      Date Completed
                    </Typography>
                    <form className={classes.container} noValidate>
                      <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  href="#"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                    Submit
                </Button>
              </CardActions>
            </Card>
            <br />
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
