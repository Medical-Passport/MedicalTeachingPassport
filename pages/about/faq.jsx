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
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import clsx from "clsx";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link"

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
}), { name: 'MuiFAQ' });

// TODO: Fix Card Header title and collapsable button alignment
//       update support section

export default function FAQ() {
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
            <Card className={classes.root}>
              <CardHeader
                title="What is the Clinical teaching passport?"
              />
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  This is a web-application for medical professionals to log activities designed to improve their clinical teaching skills. Participants will complete specific activities within certain medical education domains and record them in this tool so that passport program directors can monitor their progress and optimize mentoring.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          <br/>
          </Grid>
          <Grid item xs={10} justify="center">
            <Card className={classes.root}>
              <CardHeader
                title="Who do we contact if we need help?"
              />
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  <Link>support@passporttoclinicalteaching.com</Link>
                  </Typography>
                </CardContent>
              </Collapse>
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
