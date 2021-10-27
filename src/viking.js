// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    //should remove the received damage from the `health` property
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name ;
  }
  receiveDamage(damage) {
    //should remove the received damage from the `health` property
    super.receiveDamage(damage);
    if (this.health > 0) {
      let str = `${this.name} has received ${damage} points of damage`;
      return str;
    } else if (this.health <= 0) {
      let str = `${this.name} has died in act of combat`;
      return str;
    }
  }
  battleCry()
  {
    return("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier  {

  receiveDamage(damage) {
    //should remove the received damage from the `health` property
    super.receiveDamage(damage);
    if (this.health > 0) {
      let str = `A Saxon has received ${damage} points of damage`;
      return str;
    } else if (this.health <= 0) {
      let str = "A Saxon has died in combat";
      return str;
    }
  }

}

// War


  class War {
    constructor()
    {
      this.vikingArmy=[];
      this.saxonArmy=[];
    }

    addViking(){}
    //addSaxon()
    //vikingAttack()
    //saxonAttack()
    //showStatus()
    }
    

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
