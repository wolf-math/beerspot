import styles from '../styles/Home.module.css';
import { beerTypes } from '../questions/beerTypes';

export default function Forget() {
  const highAlcBeer = beerTypes.filter((beer) => beer.strength >= 4);
  return (
    <main className={styles.main}>
      <>
        <h1>Beers with the highest alcohol context</h1>
        {highAlcBeer.map((beer) => (
          <p key={beer.name}>
            {beer.name}: {beer.family}
          </p>
        ))}
      </>
    </main>
  );
}
