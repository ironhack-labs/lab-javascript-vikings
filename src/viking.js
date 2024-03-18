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

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
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
    let chooseViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let damageSaxonFromArmy = this.saxonArmy[indexSaxon].receiveDamage(
      chooseViking.strength
    );

    if (damageSaxonFromArmy == `A Saxon has died in combat`) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return damageSaxonFromArmy;
  }
  saxonAttack() {
    let chooseSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let damageVikingFromArmy = this.vikingArmy[indexViking].receiveDamage(
      chooseSaxon.strength
    );

    if (this.vikingArmy[indexViking].health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }
    return damageVikingFromArmy;
  }
  showStatus() {
    if (this.saxonArmy.length == 0 || !this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length == 0 || !this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

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

let viking = generateViking();
let saxon = generateSaxon();
war = new War();
war.addViking(viking);
war.addSaxon(saxon);

console.log(war);

war.vikingAttack();
console.log(war);
