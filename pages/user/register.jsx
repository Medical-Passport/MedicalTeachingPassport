import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Copyright from "../../components/Copyright";
import Navbar from "../../components/Navbar";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import { Select, MenuItem, FormControl, InputLabel,NativeSelect } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Teaching Passport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Container component="main" maxWidth="md">
          <Typography component="h1" variant="h5">
            Passport to Clinical Teaching
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid container justify="center">
                <h3>Choose your section, institution, and cohort:</h3>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="Section-native-label-placeholder">
                    Section
                  </InputLabel>
                  <NativeSelect
                    inputProps={{
                      name: "section",
                      id: "section-native-label-placeholder",
                    }}
                  >
                    <option value="">Medicine</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="Section-native-label-placeholder">
                    Institution
                  </InputLabel>
                  <NativeSelect
                    inputProps={{
                      name: "section",
                      id: "section-native-label-placeholder",
                    }}
                  >
                    <option value="">UChicago</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="Section-native-label-placeholder">
                    Cohort
                  </InputLabel>
                  <NativeSelect
                    inputProps={{
                      name: "cohort",
                      id: "cohort-native-label-placeholder",
                    }}
                  >
                    <option value="">2020-2021</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
                    <Grid item xs>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
                    </Grid>
            </Grid>
            <Grid container>
              <Grid container justify="flex-end">
                <Link href="#" variant="body2">
                  {"Already have an account? Log in"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
