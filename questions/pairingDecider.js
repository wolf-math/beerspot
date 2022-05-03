export default function pairingDecider(pairings) {
  const beerPairingsFamily = {
    'light lagers': ['spicy', 'burger', 'salad'],
    'wheat beer': ['spicy', 'fruit'],
    IPA: ['steak', 'bbq', 'mexican'],
    'amber ale': ['pizza', 'fried food', 'smoked meat'],
    'dark lager': ['pizza', 'burger', 'stew'],
    'brown ale': ['sausage', 'sushi', 'fish'],
    porter: ['seafood', 'coffee', 'game meats'],
    stout: ['chocolate', 'shellfish', 'mexican']
  };

  let beers = [];

  pairings.forEach((pairing) => {
    const match = Object.keys(beerPairingsFamily).filter((key) =>
      beerPairingsFamily[key].includes(pairing)
    );
    beers.push(match);
  });

  return beers.flat();
}
