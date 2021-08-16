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

  attack(attackingArmy, defendingArmy) {
    const attackingSoldierIndex = Math.floor(Math.random() * attackingArmy.lenght);
    const attackingSoldier = attackingArmy[attackingSoldierIndex];
    const defendingSoldierIndex = Math.floor(Math.random() * defendingArmy.length);
    const defendingSoldier = defendingArmy[defendingSoldierIndex];
    let result = defendingSoldierIndex.receiveDamage(attackingSoldier.attack());
    if (defendingSoldier.health <= 0) {
      defendingArmy.splice(defendingSoldierIndex, 1)
    }
    return result;
  }

  vikingAttack() {
    this.attack(this.vikingArmy, this.saxonArmy);
  }


  saxonAttack() {
    this.attack(this.saxonArmy, this.vikingArmy);
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
