import {useRef} from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
}));

export default function Login() {
   const classes = useStyles();

   const sName = useRef();
   const sEmail = useRef();
   const sBody = useRef();

   const sendTicket = () => {
      fetch("/api/sendnotif", {
         method: "POST",
         body: JSON.stringify({
            name: sName.current.value,
            email: sEmail.current.value,
            body: sBody.current.value,
         })
      }).then(res => {
         // console.log("fetch Response!");
      }).catch(err => {
         // console.log("Oops!");
      });
   }

   // prefill email and name if the user is logged in (QoL optional feature)
   // Note: stupid thing happens when using outlined variant and refreshing page
   return (
      <div className={styles.container}>
         <Head>
            <title>Teaching Passport</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <main className={styles.main}>
            <Container component="main" maxWidth="md">
               <Grid container justify="space-between" spacing={2}>
                  <Grid item xs={11} sm={5}>
                     <TextField
                        id="support-name"
                        label="Name"
                        fullWidth
                        // variant="filled"
                        inputRef={sName}
                     />
                  </Grid>
                  <Grid item xs={11} sm={5}>
                     <TextField
                        id="support-email"
                        label="Email"
                        fullWidth
                        // variant="filled"
                        inputRef={sEmail}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        id="support-body"
                        label="How can we help?"
                        fullWidth
                        multiline
                        rows={4}
                        // variant="outlined"
                        variant="filled"
                        inputRef={sBody}
                     />
                  </Grid>
               </Grid>
               <br/>
               <Grid container justify="flex-end">
                  <Grid item xs={2}>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={sendTicket}
                     >
                        Send
                     </Button>
                  </Grid>
               </Grid>
            </Container>

         </main>
         <footer className={styles.footer}>
            <Copyright />
         </footer>
      </div>
   );
}