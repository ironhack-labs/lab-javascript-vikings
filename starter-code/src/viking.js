// Soldier
class Soldier {
  constructor(healthInput, strengthInput) {
    this.health = healthInput;
    this.strength = strengthInput;
  }
  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameInput, healthInput, strengthInput) {
    super(healthInput, strengthInput)
    this.name = nameInput;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthInput, strengthInput) {
    super(healthInput, strengthInput);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    //Pick a Saxon at random
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    //Pick a Viking at random
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let chosenViking = this.vikingArmy[randomViking];
    let chosenSaxon = this.saxonArmy[randomSaxon];

    // The random numbers are then used as indices
    chosenSaxon.receiveDamage(chosenViking.strength);

    if (chosenSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
      return "A Saxon has died in combat";
    }
  }

  saxonAttack() {
    //Pick a Saxon at random
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    //Pick a Viking at random
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let chosenViking = this.vikingArmy[randomViking];
    let chosenSaxon = this.saxonArmy[randomSaxon];
    // The random numbers are then used as indices
    chosenViking.receiveDamage(chosenSaxon.strength);

    if (chosenViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
      return `${chosenViking.name} has died in act of combat`;
    }
    else {
      return `${chosenViking.name} has received ${chosenSaxon.strength} points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
