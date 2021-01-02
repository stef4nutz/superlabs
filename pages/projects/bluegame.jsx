import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

export default function Bluegame(){
    return(
        <>
        <Head>
            <title>bluegame.</title>
        </Head>

        <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.sharoLogo}>
                <h1>bluegame.</h1>
            </div>
            <div className={styles.projectColors}>
                <a><div className={styles.blueGamePrimary}></div></a>
                <a><div className={styles.blueGameSecondary}></div></a>
                <a><div className={styles.blueGameCuloare}></div></a>
            </div>
            <div className={styles.showcaseProject}>
                <a>aici pui o poza cv</a>
            </div>
        </div>
        </div>
        </>
    )
}