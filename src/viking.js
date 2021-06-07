// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);

    if(this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`
    }
    return `${this.name} has died in act of combat`
   }

   battleCry(){
     return "Odin Owns You All!"
   }  
  }

// Saxon
class Saxon extends Soldier{

  receiveDamage(theDamage){
        super.receiveDamage(theDamage);

    if(this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    }
      return `A Saxon has died in combat`
    }
  }


// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  
  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    const saxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length))];
    const viking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length))];

    const damnedSax = saxon.receiveDamage(viking.attack());

    this.saxonArmy = this.saxonArmy.filter(deadSax => deadSax.health > 0);
    return damnedSax;
  } 

  saxonAttack(){
    const saxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length))];
    const viking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length))];
    
    const damnedVik = viking.receiveDamage(saxon.attack());

    this.vikingArmy = this.vikingArmy.filter(deadVik => deadVik.health > 0);
    return damnedVik;

  }

  showStatus(){
    if (!this.saxonArmy.length){
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length){
      return "Saxons have fought for their lives and survived another day...";
    }
      return "Vikings and Saxons are still in the thick of battle.";
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
