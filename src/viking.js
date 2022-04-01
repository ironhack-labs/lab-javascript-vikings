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
    this.health =- damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
   super();
   this.name = name;
   this.health = health;
   this.strength = strength;
  }

  receiveDamage(damage) {
    this.health - damage;
    if(this.health>0) {
    console.log(`${this.name} has received ${damage} points of damage`);
    } else {
      console.log(`${this.name} has died in act of combat`)
    }
  }

  battleCry() {
    return 'Odin Owns You All!'

   }  

}



// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)

  }

  receiveDamage(damage) {
    this.health - damage;
    if(this.health>0) {
    console.log(`A Saxon has received ${damage} points of damage`);
    } else {
      console.log(`A Saxon has died in act of combat`)
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []
  }
  

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  };

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  };

  vikingAttack() {
    function receiveDamage() {
      if(Viking.health=0) {
        return this.vikingArmy.pull(Viking);
      } else {
        return (this.Viking.health -= this.Saxon.strength)
      }
    }

  };

  saxonAttack() {
    function receiveDamage() {
      if(Saxon.health===0) {
        return this.saxonArmy.pull(Saxon);
      } else {
        return (this.Saxon.health -= this.Viking.strength)
      }
    }
    

  };

  showStatus() {
    if(this.vikingArmy.length===[]) {
      return "Saxons have fought for their lives and survived another day...";
    } else if(this.saxonArmy.length===[]){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length>0 && this.saxonArmy.length>0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
    

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
