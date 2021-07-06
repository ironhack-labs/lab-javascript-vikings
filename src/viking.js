// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health = this.health - damage
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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = []; 
  }
    

  addViking (viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon (saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    if(this.saxonArmy.length ===0) {
      return 0;
    }
   let vikingIndex = Math.floor(Math.random() * (this.vikingArmy.length - 1));
   let saxonIndex = Math.floor(Math.random() * (this.saxonArmy.length - 1))

   let returnPhrase = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);

   if (this.saxonArmy[saxonIndex].health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1)
   }
   return returnPhrase;
  }

  saxonAttack () {
    if(this.vikingArmy.length ===0) {
      return 0;
    }
    let vikingIndex = Math.floor(Math.random() * (this.vikingArmy.length - 1));
   let saxonIndex = Math.floor(Math.random() * (this.saxonArmy.length - 1))

   let returnPhrase = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);

   if (this.vikingArmy[vikingIndex].health <= 0) {
    this.vikingArmy.splice(vikingIndex, 1)
   }
   return returnPhrase;
  }

  // vikingAttack() {
  //   this.attack(this.vikingArmy, this.saxonArmy);
  // }

  // saxonAttack() {
  //   this.attack(this.saxonArmy , this.vikingArmy);
  // }

  showStatus () {

  }

  attack(attackerArray, receiverArray) {
    if (receiverArray.length ===0) {
      return 0;
    }
    let attackerIndex = Math.floor(Math.random() * (attackerArray.length - 1));
    let receiverIndex = Math.floor(Math.random() * (receiverArray.length - 1)); 

    let returnPhrase = receiverArray[receiverIndex].receiveDamage(attackerArray[attackerIndex].strength);
    
    if (receiverArray[receiverIndex].health <= 0) {
      receiverArray.splice(receiverIndex,1);
    }
    return returnPhrase;
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


const ryan = new Soldier(50, 10)

const thor = new Viking("Thor", 100, 200);

const williamWallace = new Saxon(300, 50);


// console.log(thor);
// console.log(thor.battleCry());
// thor.receiveDamage(50);
// console.log(thor);
// thor.receiveDamage(60);
// console.log(thor);

// console.log(thor.attack());




