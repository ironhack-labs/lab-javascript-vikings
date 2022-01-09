// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength
  }

  receiveDamage(damage){
     this.damage = this.health

     delete this.health
  }
  }

const soldier1 = new Soldier ('dead', 'week');
const soldier2 = new Soldier ('alive', 'good');
  

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
}

attack () {
  super.attack()
  return this.strength
}

receiveDamage(damage){

  if(typeof damage !== 'number'){
    //console.log('not a valid damage')
    return 'not a valid damage'
}
else if(damage <= 50){
    //console.log(`${this.name} has received ${this.damage} points of damage`);
    return `${this.name} has received ${this.damage} points of damage`
}
else if(damage > 50){
    //console.log(`${this.name} has died in act of combat`);
    return `${this.name} has died in act of combat`
}
}

battleCry(){
  return "Odin Owns You All!";
}
}

const soldier3 = new Viking ('Harald', 40, 'strong');
const soldier4 = new Viking ('Svend', 100, 'dead')
//console.log(soldier3.attack())
console.log(soldier3.receiveDamage())



// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){}

  attack () {
    super.attack()
     return this.strength
  
  }

  }


// War
class War {

addViking(){}
addSaxon(){}
vikingAttack(){}
saxonAttack(){}
showStatus(){}

}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
