import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Copyright from '../components/Copyright'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teaching Passport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">your clinical passport!</a>
        </h1>

        <p className={styles.description}>
          A web-application for medical professionals to log activities designed to improve their clinical teaching skills.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Login&rarr;</h3>
            <p>Login to track your current clinical teaching journey!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Register&rarr;</h3>
            <p>Register a new account to track your clinical teaching journey!</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn&rarr;</h3>
            <p>Check out our About page to answer some common questions!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      <Copyright/>
      </footer>
    </div>
  )
}
