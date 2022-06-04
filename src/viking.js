// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health = this.health - damage
  }
}


// Viking
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength) // no agrego name porque es lo nuevo que le agrego a esta class
    this.name = name;
    // this.health = health; // no es necesario me lo trae el constructor 
    // this.strength = strength;
  }

  receiveDamage(damage){
    this.health = this.health - damage;

    if(this.health > 0) {return `${this.name} has received ${damage} points of damage`}

      else {return `${this.name} has died in act of combat`}
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{

 receiveDamage(damage) {
   this.health = this.health - damage;

   if(this.health > 0) {return `A Saxon has received ${damage} points of damage`}
      else {return 'A Saxon has died in combat'}
 }
}

// War
class War {

  constructor() {
    this.vikingArmy = []; // hay que poner un this para aclarar que va a ser parte de War
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  vikingAttack() {
    const randomSaxonIndex = this.randomIndex(this.saxonArmy);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];   

    const randomViking = this.vikingArmy[this.randomIndex(this.vikingArmy)]; 
            
    const attack = randomSaxon.receiveDamage(randomViking.strength); // puedo llamar a la strength porque lo tiene la clase el viking. Y el viking lo llamo cuando pusheo al arr
    
    if (randomSaxon.health <= 0) {this.saxonArmy.splice(randomSaxonIndex,1)}  

    return attack;
  } 

  saxonAttack() {
    
    const randomVikingIndex = this.randomIndex(this.vikingArmy);
    const randomViking = this.vikingArmy[randomVikingIndex];   

    const randomSaxon = this.saxonArmy[this.randomIndex(this.saxonArmy)]; 
            
    const attack = randomViking.receiveDamage(randomSaxon.strength); // puedo llamar a la strength porque lo tiene la clase el viking. Y el viking lo llamo cuando pusheo al arr
    
    if (randomViking.health <= 0) {this.vikingArmy.splice(randomVikingIndex,1)}  

    return attack;
  }

  showStatus() {

    if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!"}     
      else if (this.vikingArmy.length === 0) {return "Saxons have fought for their lives and survived another day..."} 
         else {return "Vikings and Saxons are still in the thick of battle."}
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
