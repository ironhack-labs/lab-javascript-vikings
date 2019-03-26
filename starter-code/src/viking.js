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
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0)
      return `${this.name} has received ${theDamage} points of damage`;
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0)
      return `A Saxon has received ${theDamage} points of damage`;
    return `A Saxon has died in combat`;
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

  vikingAttack() {
    var randSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var indexSaxon = this.saxonArmy.indexOf(randSaxon);
    console.log(randSaxon);

    var randViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    console.log(randViking);

    var result = randSaxon.receiveDamage(randViking.strength);

    if (randSaxon.health < 1) {
      this.saxonArmy.splice(indexSaxon, 1);
    }

    return result;
  }

  saxonAttack() {
    var randViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var indexViking = this.vikingArmy.indexOf(randViking);
    console.log(randViking);

    var randSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    console.log(randSaxon);

    var result = randViking.receiveDamage(randSaxon.strength);

    if (randViking.health < 1) {
      this.vikingArmy.splice(indexViking, 1);
    }

    return result;
  }

  // const vıkıng1 = new Viking();//instance objects different de la mmme classe

  // const Waterloo = new War();

  // war.addViking(vıkıng1);

  showStatus() {
    if (this.saxonArmy.length < 1) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
