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
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    return `${this.name} has received ${damage} points of damage`;
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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) return `A Saxon has died in combat`;
    return `A Saxon has received ${damage} points of damage`;
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
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let damageSaxon = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );
    if (this.saxonArmy[randomSaxon].health <= 0)
      this.saxonArmy.splice(randomSaxon, 1);
    return damageSaxon;
  }
  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let damageViking = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );
    if (this.vikingArmy[randomViking].health <= 0)
      this.vikingArmy.splice(randomViking, 1);
    return damageViking;
  }
  showStatus() {
    let mns = "";
    if (this.saxonArmy.length <= 0)
      return (mns = "Vikings have won the war of the century!");
    if (this.vikingArmy.length <= 0)
      return (mns =
        "Saxons have fought for their lives and survive another day...");
    return (mns = "Vikings and Saxons are still in the thick of battle.");
  }
}
