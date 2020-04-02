// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${theDamage} points of damage`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
    return `A Saxon has received ${theDamage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  }
  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }
  vikingAttack() {
    // let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    // let randomSaxon = this.saxonArmy[randomSaxonNumber];
    // let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    // let randomViking = this.vikingArmy[randomVikingNumber];

    const damage = randomSaxon.receiveDamage(randomViking.attack());
    this.saxonArmy.splice(randomSaxonNumber, 1);
    console.log(randomSaxon);
    return damage;
  }
  saxonAttack() {
    // if (!this.vikingArmy.length) return;
    // let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    // let randomSaxon = this.saxonArmy[randomSaxonNumber];
    // let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    // let randomViking = this.vikingArmy[randomVikingNumber];
    fight;
    const damage = randomViking.receiveDamage(randomSaxon.attack());
    this.vikingArmy.splice(randomVikingNumber, 1);
    return damage;
  }
  fight(army) {
    let randomNumber = Math.floor(Math.random() * this.army.length);
    let randomSaxonOrViking = this.army[randomNumber];
    // let randomVikingNumber = Math.floor(Math.random() * this.army.length);
    // let randomViking = this.army[randomVikingNumber];

    const vikingDamage = this.vikingAttack();
    const saxonDamage = this.saxonAttack();
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
