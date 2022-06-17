// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength =strength;
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
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health>0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    else if (this.health <=0) {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry() {
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  };
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health>0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    else if (this.health <=0) {
      return `A Saxon has died in combat`;
    };
  };
}

// War
class War {
  constructor() {
    this.vikingArmy= [];
    this.saxonArmy= [];
  }
  
  // randmSaxon: this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

  addViking(viking) {
    this.vikingArmy.push(viking);
  };
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxonHealth = randomSaxon.health;
    
    randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxonHealth<=0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    };
    /* Longer version : this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);*/
      
    }
    
  saxonAttack() {
    //let randomVikingHealth = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].health;
  }
  showStatus() {

  };
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
