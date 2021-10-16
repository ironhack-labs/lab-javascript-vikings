// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
}
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  attack(){
     return this.strength;
    }
  
  receiveDamage(damage){
    this.name = this.name
    this.health = this.health - damage;

    if (this.health >= 1){
      return `${this.name} has received ${damage} points of damage`
    }else (this.health <= 0);{ 
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{

  attack(){
    return this.strength;
  }
  
  receiveDamage(damage){
    this.health = this.health - damage;

    if (this.health >= 1){
      return `A Saxon has received ${damage} points of damage`
    }else (this.health <= 0);{ 
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
    vikingArmy =[]
    saxonArmy = []

  addViking(Viking){
   this.vikingArmy.push(Viking)
     
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    let saxonHealth = (Saxon.health - Viking.strength)

  return saxonHealth.damage

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
