import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <>
    <Head>
      <title>superlabs.</title>
    </Head>
    <div className={styles.container}>
    <div className={styles.main}>
    <div className={styles.superlabsLogo}>
      <img src="logo.png"></img>
    </div>

    <div className={styles.projectsContainer}>
    <div className={styles.projectsArticles}>
    <div className={styles.projectsArticle}>

    
      <Link href="/projects/bluegame"><img src="bluegame.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/eters"><img src="bluegame.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/darkland"><img src="bluegame.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/newmoon"><img src="bluegame.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/freakminds"><img src="bluegame.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/jaxi"><img src="bluegame.png"></img></Link>
    </div>


    </div>
    </div>
    </div>
    </div>
    </>
  )
} 
