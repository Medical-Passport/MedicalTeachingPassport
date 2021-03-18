import Head from "next/head";
import styles from "../styles/Home.module.css";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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

   // prefill email and name if the user is logged in
   return (
      <div className={styles.container}>
         <Head>
            <title>Teaching Passport</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />
         <main className={styles.main}>
            <Grid container spacing={3} justify="space-between">
               <Grid item xs={6}>
                  <TextField id="support-name" label="Name" variant="filled" />
               </Grid>
               <Grid item xs={6}>
                  <TextField id="support-email" label="Email" variant="filled" />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     fullWidth
                     id="support-details"
                     label="What do you need help with?"
                     multiline
                     rows={5}
                     variant="outlined"
                  />
               </Grid>
               
            </Grid>
         </main>
         <footer className={styles.footer}>
            <Copyright />
         </footer>
      </div>
   );
}