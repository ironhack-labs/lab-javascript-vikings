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

  battleCry() {
    //
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      //   console.log(this.name + " has died in act of combat");
      return this.name + " has died in act of combat";
    }
    // console.log(this.name + " has received " + damage + " points of damage");
    return this.name + " has received " + damage + " points of damage";
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// Saxon;
class Saxon extends Soldier {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    // console.log(this.strength);
    if (this.health <= 0) {
      //   console.log(this.name + " has died in act of combat");
      return "A Saxon has died in combat";
    }
    // console.log(this.name + " has received " + damage + " points of damage");
    return "A Saxon has received " + damage + " points of damage";
  }
}

// War;
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vik) {
    this.vikingArmy.push(vik);
  }
  addSaxon(sax) {
    this.saxonArmy.push(sax);
  }

  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomStrength = randomViking.strength;
    console.log(randomSaxonIndex);

    let result = randomSaxon.receiveDamage(randomStrength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }

  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomStrength = randomSaxon.strength;
    let result = randomViking.receiveDamage(randomStrength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      console.log(this.saxonArmy.length);
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      console.log(this.vikingArmy.length);
      return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
