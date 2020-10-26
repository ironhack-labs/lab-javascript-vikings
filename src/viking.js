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
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack() {
    const saxonPosiz =
      Math.floor(Math.random() * this.saxonArmy.length + 1) - 1;
    const vikingPosiz =
      Math.floor(Math.random() * this.vikingArmy.length + 1) - 1;
    const damageSax = this.saxonArmy[saxonPosiz].receiveDamage(
      this.vikingArmy[vikingPosiz].strength
    );

    if (this.saxonArmy[vikingPosiz].health <= 0) {
      this.saxonArmy.splice(vikingPosiz, 1);
    }

    return damageSax;
  }
  saxonAttack() {
    const saxonPosiz = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingPosiz = Math.floor(Math.random() * this.vikingArmy.length);
    const damageVik = this.vikingArmy[vikingPosiz].receiveDamage(
      this.saxonArmy[saxonPosiz].strength
    );

    if (this.vikingArmy[vikingPosiz].health <= 0) {
      this.vikingArmy.splice(saxonPosiz, 1);
    }
    return damageVik;
  }

  showStatus() {
    const statusOb = new War();
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
