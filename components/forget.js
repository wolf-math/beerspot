import { beerTypes } from '../questions/beerTypes';

export default function Forget() {
  const highAlcBeer = beerTypes.filter((beer) => beer.strength >= 4);
  return (
    <>
      <h1>Beers with the highest alcohol context</h1>
      {highAlcBeer.map((beer) => (
        <p key={beer.name}>
          {beer.name}: {beer.family}
        </p>
      ))}
    </>
  );
}
