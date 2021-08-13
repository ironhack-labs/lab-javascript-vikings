// Soldier
class Soldier {}

// Viking
class Viking extends Soldier {
  constructor(name, health){
    super(health, strength)
    this.name = name;
  }

  receiveDamage(){
    return 0;
  }

  battleCry(){
    return 0;
  }
}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
