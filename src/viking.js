// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
  this.health -= damage; 
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } return `${this.name} has died in act of combat`;
  }
  battleCry(){
    return 'Odin Owns You All!';

  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage){
    const updatedHealth = this.health -= damage;
    if(updatedHealth > 0 ){
      return `A Saxon has received ${damage} points of damage`;
    } return `A Saxon has died in combat`;

  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    

  }
  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);

  }
  // attack(viking, saxon){
  //   viking = this.vikingArmy;
  //   saxon = this.saxonArmy;
  // }
  // attack(saxon, viking){
  //   viking = this.vikingArmy;
  //   saxon = this.saxonArmy;
  // }

  attack(vikingAttacking){
    const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[randomIndexViking];
    const randomSaxon = this.saxonArmy[randomIndexSaxon];

    let result;
    if (vikingAttacking) {
      result = randomSaxon.receiveDamage(randomViking.attack());
      this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);  
    } else {
      result = randomViking.receiveDamage(randomSaxon.attack());
      this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    }

    return result;
}

  vikingAttack(){
    return this.attack(true);
  }

  saxonAttack() {
    return this.attack(false);
  }




  // vikingAttack(){
  //   const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
  //   const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  //   const randomViking = this.vikingArmy[randomIndexViking];
  //   const randomSaxon = this.saxonArmy[randomIndexSaxon];

  //   const result = randomSaxon.receiveDamage(randomViking.attack());
  //   this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);  
    
    
  //   return result;
  // }
  // saxonAttack(){
  //   const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
  //   const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  //   const randomViking = this.vikingArmy[randomIndexViking];
  //   const randomSaxon = this.saxonArmy[randomIndexSaxon];

  //   const result = randomViking.receiveDamage(randomSaxon.attack());
  //   this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);


  //   return result;
  // }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if(this.vikingArmy.length === 0){
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
