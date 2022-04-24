// strength is 0-4 scale
//   0 = non-alcoholic (though we have none here)
//   1 = session strength
//   2 = standard strength
//   3 = high strength
//   4 = very high strength
// color is 0-2 scale
//   0 = pale
//   1 = amber
//   2 = dark
// bbm = bitter balacned -1-1 scale
//   -1 = bitter
//   0 = balanced
//   1 = malty
// shs = sour hoppy sweet
//   -1 = sweet
//   0 = sour
//   1 = hoppy

export const beerTypes = [
  {
    name: 'Lite American Lager',
    family: 'pale lager',
    strength: 1,
    ibu: {
      min: 8.0,
      max: 12.0
    },
    abv: {
      min: 2.8,
      max: 4.2
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'American Lager',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 8.0,
      max: 18.0
    },
    abv: {
      min: 4.2,
      max: 5.3
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Cream Ale',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 15.0,
      max: 20.0
    },
    abv: {
      min: 4.2,
      max: 5.6
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'American Wheat Beer',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 15.0,
      max: 30.0
    },
    abv: {
      min: 4.0,
      max: 5.5
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'International Pale Lager',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 25.0
    },
    abv: {
      min: 4.6,
      max: 6.0
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'International Amber Lager',
    family: 'amber lager',
    strength: 2,
    ibu: {
      min: 8.0,
      max: 25.0
    },
    abv: {
      min: 4.6,
      max: 6.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'International Dark Lager',
    family: 'dark lager',
    strength: 2,
    ibu: {
      min: 8.0,
      max: 20.0
    },
    abv: {
      min: 4.2,
      max: 6.0
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Czech Pale Lager',
    family: 'pale lager',
    strength: 1,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 3.0,
      max: 4.1
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Czech Premium pale lager',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 30.0,
      max: 45.0
    },
    abv: {
      min: 4.2,
      max: 5.8
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: 1
    }
  },
  {
    name: 'Czech Amber Lager',
    family: 'amber lager',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 4.2,
      max: 5.8
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Czech Dark Lager',
    family: 'dark lager',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 34.0
    },
    abv: {
      min: 4.4,
      max: 5.8
    },
    taste: {
      color: 2,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Munich Helles',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 16.0,
      max: 22.0
    },
    abv: {
      min: 4.7,
      max: 5.4
    },
    taste: {
      color: 0,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Festbier',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 25.0
    },
    abv: {
      min: 5.8,
      max: 6.3
    },
    taste: {
      color: 0,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Helles Bock',
    family: 'bock',
    strength: 3,
    ibu: {
      min: 23.0,
      max: 35.0
    },
    abv: {
      min: 6.3,
      max: 7.4
    },
    taste: {
      color: 0,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'German Leichtbier',
    family: 'pale lager',
    strength: 1,
    ibu: {
      min: 15.0,
      max: 28.0
    },
    abv: {
      min: 2.4,
      max: 3.6
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'K�lsch',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 30.0
    },
    abv: {
      min: 4.4,
      max: 5.2
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'German Exportbier',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.8,
      max: 6.0
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'German Pils',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 22.0,
      max: 40.0
    },
    abv: {
      min: 4.4,
      max: 5.2
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'M�rzen',
    family: 'amber lager',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 24.0
    },
    abv: {
      min: 5.8,
      max: 6.3
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Rauchbier',
    family: 'amber lager',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.8,
      max: 6.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Dunkels Bock',
    family: 'bock',
    strength: 3,
    ibu: {
      min: 20.0,
      max: 27.0
    },
    abv: {
      min: 6.3,
      max: 7.2
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Vienna Lager',
    family: 'amber lager',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 30.0
    },
    abv: {
      min: 4.7,
      max: 5.5
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Altbier',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 50.0
    },
    abv: {
      min: 4.3,
      max: 5.5
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Kellerbier: Munich Kellerbier',
    family: 'pale lager',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 4.7,
      max: 5.4
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Kellerbier: Franconian Kellerbier',
    family: 'amber lager',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 40.0
    },
    abv: {
      min: 4.8,
      max: 5.4
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Munich Dunkel',
    family: 'dark lager',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 28.0
    },
    abv: {
      min: 4.5,
      max: 5.6
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Schwarzbier',
    family: 'dark lager',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.4,
      max: 5.4
    },
    taste: {
      color: 2,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Doppelbock  (pale)',
    family: 'bock',
    strength: 3,
    ibu: {
      min: 16.0,
      max: 26.0
    },
    abv: {
      min: 7.0,
      max: 10.0
    },
    taste: {
      color: 0,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Doppelbock  (Amber)',
    family: 'bock',
    strength: 3,
    ibu: {
      min: 16.0,
      max: 26.0
    },
    abv: {
      min: 7.0,
      max: 10.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Eisbock',
    family: 'bock',
    strength: 4,
    ibu: {
      min: 25.0,
      max: 35.0
    },
    abv: {
      min: 9.0,
      max: 14.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Baltic Porter',
    family: 'porter',
    strength: 3,
    ibu: {
      min: 20.0,
      max: 40.0
    },
    abv: {
      min: 6.5,
      max: 9.5
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Weizen/Weissbier',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 8.0,
      max: 15.0
    },
    abv: {
      min: 4.3,
      max: 5.6
    },
    taste: {
      color: 0,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Dunkels Weissbier',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 10.0,
      max: 18.0
    },
    abv: {
      min: 4.3,
      max: 5.6
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Weizenbock',
    family: 'wheat beer',
    strength: 3,
    ibu: {
      min: 15.0,
      max: 30.0
    },
    abv: {
      min: 6.5,
      max: 9.0
    },
    taste: {
      color: 0,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Ordinary English Bitter Pale Ale',
    family: 'amber ale',
    strength: 1,
    ibu: {
      min: 25.0,
      max: 35.0
    },
    abv: {
      min: 3.2,
      max: 3.8
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Best English Bitter Pale Ale',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 40.0
    },
    abv: {
      min: 3.8,
      max: 4.6
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Strong English Bitter Pale Ale',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 30.0,
      max: 50.0
    },
    abv: {
      min: 4.6,
      max: 6.2
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'English Golden Ale',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 45.0
    },
    abv: {
      min: 3.8,
      max: 5.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Australian Sparkling Ale',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 4.5,
      max: 6.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'English IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 40.0,
      max: 60.0
    },
    abv: {
      min: 5.0,
      max: 7.5
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Dark Mild',
    family: 'brown ale',
    strength: 1,
    ibu: {
      min: 10.0,
      max: 25.0
    },
    abv: {
      min: 3.0,
      max: 3.8
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'English Brown Ale',
    family: 'brown ale',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.2,
      max: 5.4
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'EnglishBrown Porter',
    family: 'porter',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 35.0
    },
    abv: {
      min: 4.0,
      max: 5.4
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Scottish Light',
    family: 'amber ale',
    strength: 1,
    ibu: {
      min: 10.0,
      max: 20.0
    },
    abv: {
      min: 2.5,
      max: 3.2
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Scottish Heavy',
    family: 'amber ale',
    strength: 1,
    ibu: {
      min: 10.0,
      max: 20.0
    },
    abv: {
      min: 3.2,
      max: 3.9
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Scottish Export',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 15.0,
      max: 30.0
    },
    abv: {
      min: 3.9,
      max: 6.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Irish Red Ale',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 18.0,
      max: 28.0
    },
    abv: {
      min: 3.8,
      max: 5.0
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Irish Stout',
    family: 'stout',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 45.0
    },
    abv: {
      min: 4.0,
      max: 4.5
    },
    taste: {
      color: 2,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Irish Extra Stout',
    family: 'stout',
    strength: 3,
    ibu: {
      min: 35.0,
      max: 50.0
    },
    abv: {
      min: 5.5,
      max: 6.5
    },
    taste: {
      color: 2,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Sweet Stout',
    family: 'stout',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 40.0
    },
    abv: {
      min: 4.0,
      max: 6.0
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: 2
    }
  },
  {
    name: 'Oatmeal Stout',
    family: 'stout',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 40.0
    },
    abv: {
      min: 4.2,
      max: 5.9
    },
    taste: {
      color: 2,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Tropical Stout',
    family: 'stout',
    strength: 3,
    ibu: {
      min: 30.0,
      max: 50.0
    },
    abv: {
      min: 5.5,
      max: 8.0
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: 2
    }
  },
  {
    name: 'Foreign Extra Stout',
    family: 'stout',
    strength: 3,
    ibu: {
      min: 50.0,
      max: 70.0
    },
    abv: {
      min: 6.3,
      max: 8.0
    },
    taste: {
      color: 2,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'English Strong Ale',
    family: 'strong ale',
    strength: 3,
    ibu: {
      min: 30.0,
      max: 60.0
    },
    abv: {
      min: 5.5,
      max: 8.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Old Ale',
    family: 'strong ale',
    strength: 3,
    ibu: {
      min: 30.0,
      max: 60.0
    },
    abv: {
      min: 5.5,
      max: 9.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Wee Heavy',
    family: 'strong ale',
    strength: 3,
    ibu: {
      min: 17.0,
      max: 35.0
    },
    abv: {
      min: 6.5,
      max: 10.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'English Barleywine',
    family: 'strong ale',
    strength: 4,
    ibu: {
      min: 35.0,
      max: 70.0
    },
    abv: {
      min: 8.0,
      max: 12.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Blonde Ale',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 15.0,
      max: 28.0
    },
    abv: {
      min: 3.8,
      max: 5.5
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'American Pale Ale',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 30.0,
      max: 50.0
    },
    abv: {
      min: 4.5,
      max: 6.2
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'American Amber Ale',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 40.0
    },
    abv: {
      min: 4.5,
      max: 6.2
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: 1
    }
  },
  {
    name: 'California Common',
    family: 'amber ale',
    strength: 2,
    ibu: {
      min: 30.0,
      max: 45.0
    },
    abv: {
      min: 4.5,
      max: 5.5
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'American Brown Ale',
    family: 'brown ale',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.3,
      max: 6.2
    },
    taste: {
      color: 2,
      bbm: 0,
      shs: 1
    }
  },
  {
    name: 'American Porter',
    family: 'porter',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 50.0
    },
    abv: {
      min: 4.8,
      max: 6.5
    },
    taste: {
      color: 2,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'American Stout',
    family: 'stout',
    strength: 3,
    ibu: {
      min: 35.0,
      max: 75.0
    },
    abv: {
      min: 5.0,
      max: 7.0
    },
    taste: {
      color: 2,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Imperial Stout',
    family: 'stout',
    strength: 4,
    ibu: {
      min: 50.0,
      max: 90.0
    },
    abv: {
      min: 8.0,
      max: 12.0
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: -1
    }
  },
  {
    name: 'American IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 40.0,
      max: 70.0
    },
    abv: {
      min: 5.5,
      max: 7.5
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Specialty IPA: Belgian IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 50.0,
      max: 100.0
    },
    abv: {
      min: 6.2,
      max: 9.5
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Specialty IPA: Black IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 50.0,
      max: 90.0
    },
    abv: {
      min: 5.5,
      max: 9.0
    },
    taste: {
      color: 2,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Specialty IPA: Brown IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 40.0,
      max: 70.0
    },
    abv: {
      min: 5.5,
      max: 7.5
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Specialty IPA: Red IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 40.0,
      max: 70.0
    },
    abv: {
      min: 5.5,
      max: 7.5
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Specialty IPA: Rye IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 50.0,
      max: 75.0
    },
    abv: {
      min: 5.5,
      max: 8.0
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Specialty IPA: White IPA',
    family: 'ipa',
    strength: 3,
    ibu: {
      min: 40.0,
      max: 70.0
    },
    abv: {
      min: 5.5,
      max: 7.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Double IPA',
    family: 'ipa',
    strength: 4,
    ibu: {
      min: 60.0,
      max: 120.0
    },
    abv: {
      min: 7.5,
      max: 10.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'American Strong Ale',
    family: 'strong ale',
    strength: 3,
    ibu: {
      min: 50.0,
      max: 100.0
    },
    abv: {
      min: 6.3,
      max: 10.0
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'American Barleywine',
    family: 'strong ale',
    strength: 4,
    ibu: {
      min: 50.0,
      max: 100.0
    },
    abv: {
      min: 8.0,
      max: 12.0
    },
    taste: {
      color: 1,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Wheatwine',
    family: 'strong ale',
    strength: 4,
    ibu: {
      min: 30.0,
      max: 60.0
    },
    abv: {
      min: 8.0,
      max: 12.0
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: 1
    }
  },
  {
    name: 'Berliner Weisse',
    family: 'wheat beer',
    strength: 1,
    ibu: {
      min: 3.0,
      max: 8.0
    },
    abv: {
      min: 2.8,
      max: 3.8
    },
    taste: {
      color: 0,
      bbm: null,
      shs: 0
    }
  },
  {
    name: 'Flanders Red Ale',
    family: 'sour-ale',
    strength: 2,
    ibu: {
      min: 10.0,
      max: 25.0
    },
    abv: {
      min: 4.6,
      max: 6.5
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: 0
    }
  },
  {
    name: 'Oud Bruin',
    family: 'sour-ale',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 25.0
    },
    abv: {
      min: 4.0,
      max: 8.0
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: 0
    }
  },
  {
    name: 'Lambic',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 0.0,
      max: 10.0
    },
    abv: {
      min: 5.0,
      max: 6.5
    },
    taste: {
      color: 0,
      bbm: null,
      shs: 0
    }
  },
  {
    name: 'Gueuze',
    family: 'wheat beer',
    strength: 3,
    ibu: {
      min: 0.0,
      max: 10.0
    },
    abv: {
      min: 5.0,
      max: 8.0
    },
    taste: {
      color: 0,
      bbm: null,
      shs: 0
    }
  },
  {
    name: 'Fruit Lambic',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 0.0,
      max: 10.0
    },
    abv: {
      min: 5.0,
      max: 7.0
    },
    taste: {
      color: 0,
      bbm: null,
      shs: 0
    }
  },
  {
    name: 'Witbier',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 10.0,
      max: 20.0
    },
    abv: {
      min: 4.5,
      max: 5.5
    },
    taste: {
      color: 0,
      bbm: null,
      shs: null
    }
  },
  {
    name: 'Belgian Pale Ale',
    family: 'pale ale',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.8,
      max: 5.5
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Bi�re de Garde',
    family: 'amber ale',
    strength: 3,
    ibu: {
      min: 18.0,
      max: 28.0
    },
    abv: {
      min: 6.0,
      max: 8.5
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Belgian Blond Ale',
    family: 'null',
    strength: 3,
    ibu: {
      min: 15.0,
      max: 30.0
    },
    abv: {
      min: 6.0,
      max: 7.5
    },
    taste: {
      color: 0,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Saison  (Standard)',
    family: 'null',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 5.0,
      max: 7.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Belgian Golden Strong Ale',
    family: 'null',
    strength: 4,
    ibu: {
      min: 22.0,
      max: 35.0
    },
    abv: {
      min: 7.5,
      max: 10.5
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Belgian Single',
    family: 'null',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 45.0
    },
    abv: {
      min: 4.8,
      max: 6.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Belgian Dubbel',
    family: 'null',
    strength: 3,
    ibu: {
      min: 15.0,
      max: 25.0
    },
    abv: {
      min: 6.0,
      max: 7.6
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Belgian Tripel',
    family: 'null',
    strength: 3,
    ibu: {
      min: 20.0,
      max: 40.0
    },
    abv: {
      min: 7.5,
      max: 9.5
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Belgian Dark Strong Ale',
    family: 'null',
    strength: 4,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 8.0,
      max: 12.0
    },
    taste: {
      color: 1,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Historical Beer: Gose',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 5.0,
      max: 12.0
    },
    abv: {
      min: 4.2,
      max: 4.8
    },
    taste: {
      color: 0,
      bbm: null,
      shs: 0
    }
  },
  {
    name: 'Historical Beer: Kentucky Common',
    family: 'null',
    strength: 2,
    ibu: {
      min: 15.0,
      max: 30.0
    },
    abv: {
      min: 4.0,
      max: 5.5
    },
    taste: {
      color: 1,
      bbm: 0,
      shs: null
    }
  },
  {
    name: 'Historical Beer: Lichtenhainer',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 5.0,
      max: 12.0
    },
    abv: {
      min: 3.5,
      max: 4.7
    },
    taste: {
      color: 0,
      bbm: null,
      shs: 0
    }
  },
  {
    name: 'Historical Beer: London Brown Ale',
    family: 'brown ale',
    strength: 1,
    ibu: {
      min: 15.0,
      max: 20.0
    },
    abv: {
      min: 2.8,
      max: 3.6
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: 2
    }
  },
  {
    name: 'Historical Beer: Pivo Grodziskie',
    family: 'wheat beer',
    strength: 1,
    ibu: {
      min: 20.0,
      max: 35.0
    },
    abv: {
      min: 2.5,
      max: 3.3
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: null
    }
  },
  {
    name: 'Historical Beer: Pre-Prohibition Lager',
    family: 'pilsner',
    strength: 2,
    ibu: {
      min: 25.0,
      max: 40.0
    },
    abv: {
      min: 4.5,
      max: 6.0
    },
    taste: {
      color: 0,
      bbm: -1,
      shs: 1
    }
  },
  {
    name: 'Historical Beer: Pre-Prohibition Porter',
    family: 'porter',
    strength: 2,
    ibu: {
      min: 20.0,
      max: 30.0
    },
    abv: {
      min: 4.5,
      max: 6.0
    },
    taste: {
      color: 2,
      bbm: 1,
      shs: null
    }
  },
  {
    name: 'Historical Beer: Roggenbier',
    family: 'wheat beer',
    strength: 2,
    ibu: {
      min: 10.0,
      max: 20.0
    },
    abv: {
      min: 4.5,
      max: 6.0
    },
    taste: {
      color: 1,
      bbm: null,
      shs: null
    }
  }
];
