import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";

export default function App() {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary">
      Primary
    </Button>
  );
  
}
