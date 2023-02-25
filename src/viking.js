// useful functions

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(num) {
    if (this.health - num <= 0) {
      console.log("This soldier died!");
      this.health = 0;
    } else {
      this.health -= num;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(num) {
    if (this.health - num <= 0) {
      return `${this.name} has died in act of combat`;
      this.health = 0;
    } else {
      this.health -= num;
      return `${this.name} has received ${num} points of damage`;
    }
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

  receiveDamage(num) {
    if (this.health - num <= 0) {
      return `A Saxon has died in combat`;
      this.health = 0;
    } else {
      this.health -= num;
      return `A Saxon has received ${num} points of damage`;
    }
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
    let randomSaxon = this.saxonArmy[getRandomInt(this.saxonArmy.length)];
    let randomViking = this.vikingArmy[getRandomInt(this.vikingArmy.length)];

    console.log(randomSaxon.receiveDamage(randomViking.attack()));

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[getRandomInt(this.saxonArmy.length)];
    let randomViking = this.vikingArmy[getRandomInt(this.vikingArmy.length)];

    console.log(randomViking.receiveDamage(randomSaxon.attack()));

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }
  }

  showStatus() {}
}
