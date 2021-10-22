// Soldier
class Soldier {
  constructor(health , strength) {
      this.health = health;
      this.strength = strength;
      // this.attacks = {
      //     punch: 100,
      //     kick: 200
      // }
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength ) {
      super(health , strength)
      this.name = name;    
  }

  battleCry() {
    return "Odin Owns You All!"
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
    }else {
        return `${this.name} has died in act of combat`
    }
  }
}





// Saxon
class Saxon extends Soldier {
  constructor(health, strength ) {
      super(health , strength)
          
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
