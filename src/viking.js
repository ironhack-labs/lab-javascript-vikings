// Soldier
class Soldier {
  constructor (healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }

   attack = () => {
      return this.strength;
   }
   
   receiveDamage = (thedamageParam) => {
     this.health -= thedamageParam
   } 

}

// Viking
class Viking extends Soldier {

  constructor (nameParam, healthParam, strengthParam) {
    super (healthParam, strengthParam)
    this.name = nameParam;
  }

  receiveDamage = (thedamageParam) => {
    this.health -= thedamageParam;
    if ( this.health > 0 ) {
      return `${this.name} has received ${thedamageParam} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry = () => {
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {

  
  receiveDamage = (thedamageParam) => {
    this.health -= thedamageParam;
    if ( this.health > 0 ) {
      return `A Saxon has received ${thedamageParam} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
  
    constructor(){
      this.vikingArmy = [];
      this.saxonArmy = [];
    }

    addViking = (vikingParam) => {
      this.vikingArmy.push(vikingParam);
    }

    addSaxon = (saxonParam) => {
      this.saxonArmy.push(saxonParam);
    }

    vikingAttack = () => {

      let vikingAleatorio = Math.floor(Math.random() * this.vikingArmy.length); 
      let saxonAleatorio = Math.floor(Math.random() * this.saxonArmy.length);

      let vikingRandom = this.vikingArmy[vikingAleatorio];
      let saxonRandom = this.saxonArmy[saxonAleatorio];
      
      let attack = saxonRandom.receiveDamage( vikingRandom.strength );
    
      if ( saxonRandom.health <= 0 ){
        this.saxonArmy.splice(saxonAleatorio,1);
      }

      return attack;

    }



    saxonAttack = () => {
      
      let vikingAleatorio = Math.floor(Math.random() * this.vikingArmy.length); 
      let saxonAleatorio = Math.floor(Math.random() * this.saxonArmy.length);

      let vikingRandom = this.vikingArmy[vikingAleatorio];
      let saxonRandom = this.saxonArmy[saxonAleatorio];
      
      let attack = vikingRandom.receiveDamage( saxonRandom.strength );
    
      if ( vikingRandom.health <= 0 ){
        this.vikingArmy.splice(vikingAleatorio,1);
      }

      return attack;

    }

    showStatus = () => {

      if ( this.saxonArmy.length === 0 ) {
        return `Vikings have won the war of the century!`
      }else if ( this.vikingArmy.length === 0 ){
        return `Saxons have fought for their lives and survived another day...`
      }else {
        return `Vikings and Saxons are still in the thick of battle.`
      } 
      
    }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
