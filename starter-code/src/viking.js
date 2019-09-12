// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
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
  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    let randomSaxon = getRandom(this.saxonArmy);
    let randomViking = getRandom(this.vikingArmy);
    let res = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health < 1) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    return res;
  }

  saxonAttack() {
    let randomSaxon = getRandom(this.saxonArmy);
    let randomViking = getRandom(this.vikingArmy);
    
    let res = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health < 1) {
      this.vikingArmy.splice(this.saxonArmy.indexOf(randomViking), 1);
    }
    return res;

  }

  showStatus() {
    if (this.saxonArmy && !this.vikingArmy.length){
      return "Saxons have fought for their lives and survive another day..."
    } else if(!this.saxonArmy.length && this.vikingArmy){
      return "Vikings have won the war of the century!"
    } else {
      return ("Vikings and Saxons are still in the thick of battle.")
    }
  }

}

getRandom = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};
