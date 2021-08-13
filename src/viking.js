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
    let ActHealth = this.health - damage;  
    this.health = ActHealth;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    let ActHealth = this.health - damage;  
    this.health = ActHealth;

    if (this.health !== 0) {
      return `${this.name} has received ${damage} points of damage` 
     } else {
       return `${this.name} has died in act of combat`
       }
    }
  battleCry(){
    return `Odin Owns You All!`
  }
  }

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    let ActHealth = this.health - damage;  
    this.health = ActHealth;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
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
  
  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
   let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
   let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
   let iRandomSaxon = this.saxonArmy.indexOf(randomSaxon);
   
   let message = randomSaxon.receiveDamage(randomViking.strength);
  
  
   if (randomSaxon.health <= 0){
      this.saxonArmy.splice(iRandomSaxon,1);
    };
    return message;
  }

  saxonAttack() {
   let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
   let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
   let iRandomViking = this.vikingArmy.indexOf(randomViking);

   let message = randomViking.receiveDamage(randomSaxon.strength);
  
  
   if (randomViking.health <= 0){
      this.vikingArmy.splice(iRandomViking,1);
    };
    return message;
  }

  
  showStatus(){
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    } else { return `Vikings and Saxons are still in the thick of battle.`}
  }
}




/////////PTE////////
/*Since there is a lot of repetitive code in the previous two iterations,
 vikingAttack() and saxonAttack() try to create one generic method and call it 
 in the case of vikingAttack and in the case of saxonAttack instead of using almost
 the same code for both methods. */




// The following is required to make unit tests work.


/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
