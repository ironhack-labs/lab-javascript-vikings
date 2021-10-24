// Soldier
class Soldier {

  constructor (health, strength) {
    super (health, strength)
    this.health = health;
    this.strength = strength;
  }

    attack () {
      this.strength
    };

    receiveDamage (damage) {
      

    }
}


// Viking
class Viking extends Soldier {
  constructor (name) {
    this.name = name;
    this.health = health;
    this.strength = strength
  }

  receiveDamage(damage){
    if () {

    } else {

    }
  }

  battleCry() {
    console.log('Odin Owns you All!')
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    if () {

    } else {

    }
  }
}

// War
class War {
  addViking()
  addSaxon()
  vikingAttack()
  saxonAttack()
  showStatus()
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
