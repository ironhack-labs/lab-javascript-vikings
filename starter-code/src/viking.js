function removeDead(arrayObjects) {
  return arrayObjects.filter(e => e.health > 0);
}

// console.log(removeDead([{ health: 0 }, { health: 1 }, { health: -1 }]));

function randomSoldier(arrayObjects) {
  return arrayObjects[Math.floor(Math.random() * arrayObjects.length)];
}

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    if (!isNaN(damage)) {
      this.health -= damage;
    }
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    const attack = randomSoldier(this.saxonArmy).receiveDamage(randomSoldier(this.vikingArmy).attack());
    this.saxonArmy = removeDead(this.saxonArmy);
    return attack;
  }
  saxonAttack() {
    const attack = randomSoldier(this.vikingArmy).receiveDamage(randomSoldier(this.saxonArmy).attack());
    this.vikingArmy = removeDead(this.vikingArmy);
    return attack;
  }
  showStatus() {
    return this.vikingArmy.length === 0
      ? "Saxons have fought for their lives and survive another day..."
      : this.saxonArmy.length === 0
      ? "Vikings have won the war of the century!"
      : "Vikings and Saxons are still in the thick of battle.";
  }
}
