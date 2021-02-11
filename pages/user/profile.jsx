import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Copyright from "../../components/Copyright";
import Navbar from "../../components/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 300,
  },
});

export default function Profile() {
  const classes = useStyles();

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
          spacing={2}
        >
          <Grid item xs={2} justify="center">
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Murphy, Elizbath
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="profile.jpeg"
                    title="Admin"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    UChicago Clinical Teaching Passport Supervisor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="#"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                    Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={8} justify="center">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Clinical Teaching Domains
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Incomplete
                </Typography>

                <br />

                <Grid container direction="column">
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Opt-in and Biannual Review
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Active Medical Education Committee Membership
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Faculty Development in Medical Education
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Instructions in Internal Medicine Undergrad, Grad, or
                      Interprofessional
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Education Servier and Citizenship
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Prepare and Present Teaching Topics
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Introduction to MedEd Scholarship
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="secondary">
                      Coaching Capstone Experience
                    </Button>
                  </Grid>
                  <br />
                  <Grid item xs>
                    <Button variant="contained" color="primary">
                      Extras
                    </Button>
                  </Grid>
                  <br />
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
          </Grid>

          <Grid item xs={2} justify="center">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Recent Notes
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Murphy, Elizabeth
                </Typography>
                <Typography variant="body2" component="p">
                  Activity under Educational service was meant for another
                  section - can you correct?
                </Typography>
                <br/>
                <Typography className={classes.pos} color="textSecondary">
                  Murphy, Elizabeth
                </Typography>
                <Typography variant="body2" component="p">
                  Activity under Capstone is incomplete
                  please correct!
                </Typography>
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
                    Clear
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
