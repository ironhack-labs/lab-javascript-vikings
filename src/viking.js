// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }
  attack(){
    return parseFloat(`${this.strength}`)
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}
////////////////////////////////////////////

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super (health, strength); 
    this.name = name
  }
  
  attack(){
    return parseFloat(`${this.strength}`)
  }

  receiveDamage(damage){
    //should remove the received damage from the health property
    this.health = this.health - damage;
    if(this.health > 0){
      return `${this.name} has received ${parseFloat(this.damage)} points of damage`
      } else {
      return `${this.name} has died in act of combat`
    }
    //NO FUNCIONA:if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
  }

  battleCry(){
    return "Odin Owns You All!"
  }
  
}

////////////////////////////////////////////

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0 ){
      return `A Saxon has received ${parseFloat(this.damage)} points of damage`
      } else {
      return `A Saxon has died in combat`
    }
  }
  //NO FUNCIONA:if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage" 
}

////////////////////////////////////////////

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []
  }

  addViking(Viking){
    // should add the received Viking to the army (4 ms)
  };
  addSaxon(Saxon){
    //should add the received Saxon to the army
  };
  vikingAttack(){
    //should make Saxon receiveDamage() equal to the strength of a Viking
    //should return result of calling receiveDamage() of a Saxon with the strength of a Viking
  };
  saxonAttack(){
    //should make a Viking receiveDamage() equal to the strength of a Saxon
    //should return result of calling receiveDamage() of a Viking with the strength of a Saxon
  };
  showStatus(){
    // ✕ should return "Vikings have won the war of the century!", if the Saxons array is empty
    // ✕ should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty (1 ms)
    // ✕ should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons
  
  };
}

////////////////////////////////////////////




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


