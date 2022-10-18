import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beer Spot</title>
        <meta name='description' content='Find your taste' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Beer Spot</h1>
        <Link href='/finder' passHref>
          <div className={styles.bigButton}>
            <h2>Find your taste &rarr;</h2>
          </div>
        </Link>
      </main>
    </div>
  );
}
