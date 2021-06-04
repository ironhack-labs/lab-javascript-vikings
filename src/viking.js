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
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
    if(this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  attack(){
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if(this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`;
    }else{
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
  addViking(viking){
    viking = new Viking('Harald', 300, 150);
    this.vikingArmy.push(viking);
  }
  
  addSaxon(saxon){
    saxon = new Saxon(60, 25);
    this.saxonArmy.push(saxon);
  }


  vikingAttack(){
    let randomSaxon = Math.floor((Math.random()*this.saxonArmy.length));
    let randomViking = Math.floor((Math.random()*this.vikingArmy.length));
    let theViking = this.vikingArmy[randomViking].strength;
   
    let attackedSaxon = this.saxonArmy[randomSaxon];
    //console.log(attackedSaxon);

    let damagedSaxon = attackedSaxon.receiveDamage(theViking);
    console.log(damagedSaxon);
    console.log(attackedSaxon);

    if(attackedSaxon.health <= 0){
      this.saxonArmy.pop(attackedSaxon);
    }
    return damagedSaxon;
  } 

  saxonAttack(){
    let randomVik = Math.floor((Math.random()*this.vikingArmy.length));
    let randomSax = Math.floor((Math.random()*this.saxonArmy.length));
    let theSaxon = this.saxonArmy[randomSax].strength;
   
    let attackedViking = this.vikingArmy[randomVik];
    //console.log(attackedSaxon);

    let damagedViking = attackedViking.receiveDamage(theSaxon);
    console.log(damagedViking);
    console.log(attackedViking);

    if(attackedViking.health <= 0){
      this.vikingArmy.pop(attackedViking);
    }
    return damagedViking;
  } 

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
