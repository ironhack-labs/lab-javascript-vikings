// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage ;
  }

}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage ;
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`
  }

  battleCry(){
    return "Odin Owns You All!" ;
  }
}

// Saxon
class Saxon extends Soldier {

  constructor(health,strength){
    super(health, strength);
  }

  receiveDamage(damage){
    this.health -= damage ;
    if(this.health !== 0) return `A Saxon has received ${damage} points of damage`;
    else return "A Saxon has died in combat"
  }
}

// War
class War {


  constructor(){
    
    this.vikingArmy = [] ;
    this.saxonArmy = [] ;

  }

  addViking(viking){
    this.vikingArmy.push(viking) ;
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon) ;
  }

  vikingAttack(){
    
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let damagedSaxon = randomSaxon.receiveDamage(randomViking.attack());

    let deadIndex = this.saxonArmy.indexOf(randomSaxon);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(deadIndex, 1);
     
    }
    
    return damagedSaxon;
  }

  saxonAttack(){

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];


    let damagedViking = randomViking.receiveDamage(randomSaxon.attack());

    let deadIndex = this.vikingArmy.indexOf(randomViking);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(deadIndex, 1);
      
    }

    return damagedViking;
  }

  showStatus(){

      if ( !this.saxonArmy.length && this.vikingArmy.length > 0) return 'Vikings have won the war of the century!';

      else if ( !this.vikingArmy.length && this.saxonArmy.length > 0) return 'Saxons have fought for their lives and survived another day...';
      
      else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) return 'Vikings and Saxons are still in the thick of battle.';
  
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
