import { beerTypes } from '../questions/beerTypes';
import { AnswerSection } from '../styles/questionStyles';

export default function Forget() {
  const highAlcBeer = beerTypes.filter((beer) => beer.strength >= 4);
  return (
    <AnswerSection>
      <h1>Beers with the highest alcohol context</h1>
      {highAlcBeer.map((beer) => (
        <div key={beer.name}>
          {beer.name}: {beer.family}
        </div>
      ))}
    </AnswerSection>
  );
}
