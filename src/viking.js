// Soldier

class Soldier {
 constructor(health, strength) {
  this.health = health;
  this.strength = strength;
 }

attack(){
   return this.strength;
 }

receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  attack(){
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
      if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
      }else{
        return `${this.name} has died in act of combat`;
      }
  }  

  battleCry(){
    return "Odin Owns You All!"
  }

}


// Saxon

class Saxon extends Soldier{
  constructor (health, strength,){
    super(health, strength);
  }
 
  attack(){
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
      if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`
      }else{
        return "A Saxon has died in combat"
      }
  }
}



// War
class War {
  vikingArmy=[]
  saxonArmy=[]

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    const saxonStatusMessage = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))].receiveDamage(this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))].strength); // Guardo el resultado del ataque //
    this.saxonArmy = this.saxonArmy.filter((saxon)=>saxon.health > 0) //Filtro los que quedan vivos y los guardo en una array nueva(filter)//
    return saxonStatusMessage;
  }

  saxonAttack(){
    const vikingsStatusMessage = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))].receiveDamage(this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))].strength);
    this.vikingArmy = this.vikingArmy.filter((viking)=>viking.health > 0)
    return vikingsStatusMessage;
  }
  
  armyAttack(){
    // NI IDEA!//
  }

  showStatus(){
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
 if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
} 