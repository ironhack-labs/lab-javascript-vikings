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
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

//Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

//War
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
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const saxonState = saxon.receiveDamage(viking.strength);
    if (saxonState === `A Saxon has died in combat`)
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);

    return saxonState;
  }

  saxonAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const vikingState = viking.receiveDamage(saxon.strength);
    if (vikingState === `${viking.name} has died in act of combat`)
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);

    return vikingState;
  }

  soldierAttack(soldier) {
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let attackerSoldier = soldier === viking ? randomViking : randomSaxon;
    let damagedSoldier = soldier === viking ? randomSaxon : randomViking;

    const damagedSoldierState = damagedSoldier.receiveDamage(attackerSoldier.strength);
    if (damagedSoldierState === `A Saxon has died in combat`)
      this.saxonArmy.splice(this.saxonArmy.indexOf(damagedSoldier), 1);
    else if (damagedSoldierState === `${damagedSoldier.name} has died in act of combat`)
      this.vikingArmy.splice(this.vikingArmy.indexOf(damagedSoldier), 1);

    return damagedSoldierState;
  }

  showStatus() {
    return this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0 ? "Vikings and Saxons are still in the thick of battle." :
      this.vikingArmy.length === 0 ? "Saxons have fought for their lives and survived another day..." :
      "Vikings have won the war of the century!";
  }
}