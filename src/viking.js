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
    this.health = this.health - damage;
    }
  }

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

receiveDamage(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return (`${this.name} has received ${damage} points of damage`);
    } else {
      return (`${this.name} has died in act of combat`);
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

receiveDamage(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return (`A Saxon has received ${damage} points of damage`);
    } else {
      return (`A Saxon has died in combat`);
    }
  }
}

// War
class War {
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  };
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  };



  vikingAttack() {
    let randomSaxon = this.SaxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    
    let battleResult = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health < 0) {
      randomSaxon.slice(this.SaxonArmy[randomSaxon])
    }
return battleResult;

  }

  saxonAttack() {
    randomViking = this.vikingArmy[1 + Math.floor(this.vikingArmy.length * Math.random())]
  }


  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else {
      "Vikings and Saxons are still in the thick of battle."
    }
  }
}

// constructor
//   {
    
//   }

// class Soldier {
// constructor(health, strength) {
//   this.health = health;
//   this.strength = strength;
// }
// attack() {
//   return this.strength;
// }
// receiveDamage(damage) {
//   this.health = this.health - damage;
//   }
// }