import {useRef} from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Copyright from "../../components/Copyright";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
}));

export default function Contact() {
   const classes = useStyles();

   const pCurrentPass = useRef();
   const pNewPass = useRef();
   const pNewPass2 = useRef();

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
               <List>
                  <Typography variant="h3">FirstName LastName</Typography>
                  <Typography color="textSecondary" gutterBottom>name123@email.com</Typography>
               </List>
               <List>
                  <Typography variant="h4">Additional Information</Typography>
                  <Divider/>
                  <ListItem disableGutters>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                           <Typography>Section</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           SectionName
                        </Grid>
                     </Grid>
                  </ListItem>
                  <ListItem disableGutters>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                           <Typography>Institution</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Typography>InstitutionName</Typography>
                        </Grid>
                     </Grid>
                  </ListItem>
                  <ListItem disableGutters>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                           <Typography>Cohort</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           CohortName
                        </Grid>
                     </Grid>
                  </ListItem>
               </List>
               <List>
                  <Typography variant="h4">Summary</Typography>
                  <Divider/>
                  <ListItem disableGutters>
                     <Button
                           type="submit"
                           variant="outlined"
                           color="primary"
                           href="#"
                        >
                           View My Stats
                        </Button>
                  </ListItem>
               </List>
               <List>
                  <Typography variant="h4">Change Password</Typography>
                  <Divider />
                  <ListItem disableGutters>
                     <Grid container justify="space-between" spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="profile-current-pass"
                              label="Current Password"
                              type="password"
                              fullWidth
                              inputRef={pCurrentPass}
                           />
                        </Grid>
                     </Grid>
                  </ListItem>
                  <ListItem disableGutters>
                     <Grid container justify="space-between" spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="profile-new-pass"
                              label="New Password"
                              type="password"
                              fullWidth
                              inputRef={pNewPass}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="profile-new-pass-2"
                              label="Re-enter New Password"
                              type="password"
                              fullWidth
                              inputRef={pNewPass2}
                           />
                        </Grid>
                     </Grid>
                  </ListItem>
               </List>
               <Grid container justify="flex-end">
                  <Grid item xs={2}>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={sendTicket}
                     >
                        Save
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