import { beerTypes } from './beerTypes';
import { bestBeerQuestions } from './surveyQuestions';

export default function beerDecider(answers) {
  let color;
  let bbm;
  let strength;
  let results;

  switch (answers[0]) {
    case bestBeerQuestions[0].answers[0]:
      color = 0;
      break;
    case bestBeerQuestions[0].answers[1]:
      color = 2;
      break;
    case bestBeerQuestions[0].answers[2]:
      color = 1;
      break;
  }

  results = beerTypes.filter((beer) => beer.taste.color === color);
  if (results.length < 5) return results;

  switch (answers[1]) {
    case bestBeerQuestions[1].answers[0]:
      bbm = 1;
      break;
    case bestBeerQuestions[1].answers[1]:
      bbm = 0;
      break;
    case bestBeerQuestions[1].answers[1]:
      bbm = -1;
      break;
  }

  results = results.filter((beer) => beer.taste.bbm === bbm);
  if (results.length < 5) return results;

  switch (answers[2]) {
    case bestBeerQuestions[2].answers[0]:
      strength = 3;
      break;
    case bestBeerQuestions[2].answers[1]:
      strength = 1;
      break;
    case bestBeerQuestions[2].answers[2]:
      strength = 2;
      break;
  }

  results = results.filter((beer) => beer.strength === strength);

  console.log('results', results);
  //   results = beerTypes.filter((beer) => beer.taste.color === color).filter((beer) => beer.taste.bbm === bbm).filter(beer=> beer.strength === strength);
}
