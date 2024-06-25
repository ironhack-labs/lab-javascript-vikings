// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // vikingAttack() {
  //   const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  //   const randomVikingIndex = Math.floor(
  //     Math.random() * this.vikingArmy.length
  //   );
  //   const randomSaxon = this.saxonArmy[randomSaxonIndex];
  //   const randomViking = this.vikingArmy[randomVikingIndex];
  //   const damage = randomSaxon.receiveDamage(randomViking.strength);

  //   if (randomSaxon.health <= 0) {
  //     this.saxonArmy.splice(randomSaxonIndex, 1);
  //   }

  //   return damage;
  // }

  // saxonAttack() {
  //   const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  //   const randomVikingIndex = Math.floor(
  //     Math.random() * this.vikingArmy.length
  //   );
  //   const randomSaxon = this.saxonArmy[randomSaxonIndex];
  //   const randomViking = this.vikingArmy[randomVikingIndex];
  //   const damage = randomViking.receiveDamage(randomSaxon.strength);

  //   if (randomViking.health <= 0) {
  //     this.vikingArmy.splice(randomVikingIndex, 1);
  //   }

  //   return damage;
  // }

  generalAttack(attacker, defender) {
    const randomAttackerIndex = Math.floor(Math.random() * this[attacker + 'Army'].length);
    const randomDefenderIndex = Math.floor(Math.random() * this[defender + 'Army'].length);
    const randomAttacker = this[attacker + 'Army'][randomAttackerIndex];
    const randomDefender = this[defender + 'Army'][randomDefenderIndex];
    const damage = randomDefender.receiveDamage(randomAttacker.strength);

    if (randomDefender.health <= 0) {
      this[defender + 'Army'].splice(randomDefenderIndex, 1);
    }

    return damage;
  }

  vikingAttack() {
    return this.generalAttack('viking', 'saxon');
  }

  saxonAttack() {
    return this.generalAttack('saxon', 'viking');
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


// array of cities:
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const citiesCapitalize = cities.map((city) => {
  return city
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});
console.log(citiesCapitalize);

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const finalGrades = students.map((student) => {
  const projectAvg = (student.firstProject + student.secondProject) / 2;
  const finalGrade = projectAvg * 0.4 + student.finalExam * 0.6;
  return { name: student.name, finalGrade: Math.round(finalGrade) };
});

console.log(finalGrades);

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const ofDrinkingAge = people.filter((person) => {
  return person.age > 21;
});

console.log(ofDrinkingAge);

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

const withPool = places.filter((place) => place.pool);

console.log(withPool);
