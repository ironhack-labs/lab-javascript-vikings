// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  
  attack (){
    return this.strength
  }
  
  receiveDamage (theDamage){
  this.health = this.health - theDamage;
  }
}



// Viking
class Viking extends Soldier {
      constructor(name,health,strength){
      super(name,health,strength); 
      this.name = name;
      this.health = health;
      this.strength = strength;
      }
      receiveDamage (theDamage){
        this.health = this.health - theDamage;
        if (this.health <= 0){
          return `${this.name} has died in act of combat`
        } else {
        return `${this.name} has received ${theDamage} points of damage`;
        }
      };
      battleCry(){
        return 'Odin Owns You All!'
      };
}




// Saxon
class Saxon extends Soldier {
    receiveDamage (theDamage){
    this.health = this.health - theDamage;
    if (this.health <= 0){
    return `A Saxon has died in combat`;
    } else {
    return `A Saxon has received ${theDamage} points of damage`;
    }
  };
}




// War
class War {
  constructor() {
this.vikingArmy = []
this.saxonArmy = []
}

  addViking (aViking) {
    this.vikingArmy.push(aViking)
  }

  addSaxon (aSaxon) {
    this.saxonArmy.push(aSaxon)
  }

  vikingAttack () {
    const oneSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const oneViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const result = oneSaxon.receiveDamage(oneViking.strength)
    this.saxonArmy = this.saxonArmy.filter(function(aSaxon) {
    return aSaxon.health > 0
    })
    return result;
  }  

  saxonAttack () {
    const oneViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const oneSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const result = oneViking.receiveDamage(oneSaxon.strength)
    
    this.vikingArmy = this.vikingArmy.filter(function(aViking) {
    return aViking.health > 0
    })
    return result;
  };

  showStatus () {
    if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!'
    } 
    if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survived another day...'
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1 ) {
      return 'Vikings and Saxons are still in the thick of battle.' 
    }
  } 
}  
  
  

    
  



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
