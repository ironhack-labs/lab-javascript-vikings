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
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {

      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    super.receiveDamage(damage);
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    else {
      return `A Saxon has died in combat`;
    }
  }
  
}



// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
  addViking(bro) {
    this.vikingArmy.push(bro)
  }
  addSaxon(dude) {
    this.saxonArmy.push(dude);
  }
  attack (attackers, victim ) {
    let randAttacker = attackers[Math.floor(Math.random() * attackers.length)];
    let randomVictim = victim[Math.floor(Math.random() * victim.length)];
    let outcome = randomVictim.receiveDamage(randAttacker.strength);
    if(randomVictim.health <= 0) {
      victim.splice(victim.indexOf(randomVictim), 1);
    }
    return outcome;
  }
  vikingAttack() {
    let outcome = this.attack(this.vikingArmy, this.saxonArmy);
    return outcome;
  }

  sexonAttack() {
   let outcome = this.attack(this.saxonArmy, this.vikingArmy)
   return outcome; 
}
}

showStatus(){
  if (this.saxonArmy.length === 0) {
    return `Vikings have won the war of the century!`;

  } else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survived another day...`;

  } else {
    return `Vikings and Saxons are still in the thick of battle`;
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    Soldier,
    Viking,
    Saxon,
    War
  };
}