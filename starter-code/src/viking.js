// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
    let res = `${this.name} has died in act of combat`;
    if (this.health > 0)
      res = `${this.name} has received ${damage} points of damage`;
    return res;
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

  attack() {
    return super.attack();
  }
  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    let res = `A Saxon has died in combat`;
    if (this.health > 0) res = `A Saxon has received ${dmg} points of damage`;
    return res;
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
    if (this.vikingArmy.length < 1) return;
    if (this.saxonArmy.length < 1) return;
    let vik = this.vikingArmy.pop();
    let sax = this.saxonArmy.pop();
    let res = sax.receiveDamage(vik.strength);
    if (sax.health > 0) this.saxonArmy.push(sax);
    this.vikingArmy.push(vik);
    return res;
  }
  saxonAttack() {
    if (this.vikingArmy.length < 1) return;
    if (this.saxonArmy.length < 1) return;
    let vik = this.vikingArmy.pop();
    let sax = this.saxonArmy.pop();
    let res = vik.receiveDamage(sax.strength);
    this.saxonArmy.push(sax);
    if (vik.health > 0) this.vikingArmy.push(vik);
    return res;
  }
  showStatus() {
    if (this.saxonArmy.length < 1)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length < 1)
      return "Saxons have fought for their lives and survive another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
