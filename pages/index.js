import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beer Spot</title>
        <meta name='description' content='Find your taste' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Beer Spot</h1>
        <p className={styles.description}>Find your taste</p>
        <Link href='/questionnaire' passHref>
          <div className={styles.bigButton}>
            <h2>Find me a Beer &rarr;</h2>
          </div>
        </Link>
      </main>
    </div>
  );
}
