
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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon

class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
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
  getRandomViking() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    return this.vikingArmy[randomVikingIndex];
  }
  getRandomSaxon() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    return this.saxonArmy[randomSaxonIndex];
  }
  attack(attacker, victim, victimArmy) {
    let attackResult = victim.receiveDamage(attacker.attack());

    if (victim.health <= 0) {
      let victimIndex = victimArmy.indexOf(victim);
      victimArmy.splice(victimIndex, 1);
    }

    return attackResult;
  }
  vikingAttack() {
    let randomViking = this.getRandomViking();
    let randomSaxon = this.getRandomSaxon();
    return this.attack(randomViking, randomSaxon, this.saxonArmy);
  }
  saxonAttack() {
    let randomViking = this.getRandomViking();
    let randomSaxon = this.getRandomSaxon();
    return this.attack(randomSaxon, randomViking, this.vikingArmy);
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}

let viking, saxon, war;

function generateViking() {
  const name = "Harald";
  const strength = 150;
  const health = 300;
  return new Viking(name, health, strength);
}

function generateSaxon() {
  const health = 60;
  const strength = 25;
  return new Saxon(health, strength);
}