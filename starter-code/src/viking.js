// Soldier
class Soldier { 
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }
  attack () {
    return this.strength;
  }
  receiveDamage (damage) {
    this.health -= damage;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name,health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry () {
    return "Odin Owns You All!"
  }
}

//Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health,strength);
    this.health = 60;
    this.strength = 25;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ?
        "A Saxon has received " + damage + " points of damage" :
        "A Saxon has died in combat";
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
_soldierAlive(stillAlive) {
    return stillAlive.health > 0;
}
vikingAttack() {
    const result = this.saxonArmy[0]
      .receiveDamage(this.vikingArmy[0].strength);

    this.saxonArmy = this.saxonArmy
      .filter(this._soldierAlive);

  return result;
}

saxonAttack() {
    const result = this.vikingArmy[0]
      .receiveDamage(this.saxonArmy[0].strength);

    this.vikingArmy = this.vikingArmy
      .filter(this._soldierAlive);

    return result;
}

showStatus() {
  let result = "";
    if (this.saxonArmy.length === 0) {
      result = "Vikings have won the war of the century!";

  } else if (this.vikingArmy.length === 0) {
      result = "Saxons have fought for their lives and survive another day...";

  } else {
      result = "Vikings and Saxons are still in the thick of battle.";
  }

  return result;
}
} 
