// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }
  attack(){
    //return parseFloat(`${this.strength}`)
    return parseFloat(this.strength)

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
      return `${this.name} has received ${damage} points of damage`
      } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
  
}

////////////////////////////////////////////

// Saxon
class Saxon extends Soldier {
  
  attack() {
    return parseFloat(`${this.strength}`)
  }

  receiveDamage(damage){
    //this.health = this.health - damage; mi codigo primario
    super.receiveDamage(damage)
    if(this.health > 0 ){
      return `A Saxon has received ${damage} points of damage`
      } else {
      return `A Saxon has died in combat`
    }
  }
}

////////////////////////////////////////////

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []
  }

  addViking(Viking){
    this.vikingArmy.push(Viking)
    // should add the received Viking to the army (4 ms)
  };
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  };
  vikingAttack(){
    const respond = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    //esta constante me guarda el mensaje recibido de la funcion receiveDamage
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return respond;
  };

  saxonAttack(){
    const respond = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
     //esta constante me guarda el mensaje recibido de la funcion receiveDamage
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return respond;
  };

  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
       return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
    
  };
}

////////////////////////////////////////////

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


