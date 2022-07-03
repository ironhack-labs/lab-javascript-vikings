// Soldier
class Soldier {
  constructor(health, strength) {
      this.health = health;
      this.strength= strength;

  }
  attack = () => {
    return this.strength
  };
  receiveDamage = (damage) => {
    damage.remove(this.health1);
    //
  };

}

// Viking

class Viking extends Soldier{
    
  constructor (name, health, strength){ 
      this.name = name;
      super(health, strength);
      
  }
  atack ()  {
    super.attack();
  };
  receiveDamage = (damage) => {
    damage.remove(this.health);
    if (this.health >= 1 ){
      return `${this.name1} has received ${damage}....of damage`
    }else{
      return `${this.name1} has died in act of combat`
    }
  };  
  
  battleCry = () => {
    return `Odin Owns You All!`;
  };


}

// Saxon
class Saxon extends Soldier {
  atack ()  {
    super.attack();
  }; 
  receiveDamage = (damage) => {
    damage.remove(this.health);
    if (this.health >= 1 ){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  };  

}

// War
class War {
  constructor (){
    this.wikingArmy = wikingArmy [""];
    this.saxonArmy = saxonArmy [""]; 
  }
  addViking = (name) => {
    this.wikingArmy.push(name)
  }
  addSaxon = (name) => {
    this.saxonArmy.push(name)  
  }
  vikingAttack = () => {
    Math.random(this.saxonArmy)
    this.wikingArmy.remove()
    return Saxon.receiveDamage;
    
  }
  saxonAttack = () => {
    Math.random(this.wikingArmy)
    this.saxonArmy.remove()
    return Viking.receiveDamage;
    
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
