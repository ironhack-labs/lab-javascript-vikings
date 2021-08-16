// Soldier
class Soldier {
  constructor(health, strength){
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





//console.log(soldier1.health);
//soldier1.atack();
//const soldier1 = new Soldier(10, 15);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage){
    super.receiveDamage(damage);
    if(this.health <= 0) {
      return `${this.name} has died in act of combat`
    }else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
  
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    super.receiveDamage(damage);
    if(this.health <= 0) {
      return "A Saxon has died in combat";
    }else {
      return `A Saxon has received ${damage} points of damage`;
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
    let randomVikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[randomVikingIdx];
    let randomSaxon = this.saxonArmy[randomSaxonIdx];
    let result = randomSaxon.receiveDamage(randomViking.attack());
    if(randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIdx, 1);
    }
    return result;
  }


  saxonAttack() {
    let randomVikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[randomVikingIdx];
    let randomSaxon = this.saxonArmy[randomSaxonIdx];
    let result = randomViking.receiveDamage(randomSaxon.attack());
    if(randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIdx, 1);
    }
    return result;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
