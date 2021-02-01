import { Grid, makeStyles } from '@material-ui/core'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from './Navbar.js'

const useStyles = makeStyles(theme => ({
  main: {
     width: '100vw',
     height: '100vh',
     backgroundColor: 'WhiteSmoke'
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Navbar />
    </main>
  )
}
