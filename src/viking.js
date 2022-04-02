// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  };

  attack(){
    return this.strength;
  };

  receiveDamage(damage){
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  battleCry(){
    return "Odin Owns You All!";
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
attack(){
  return this.strength;
}

receiveDamage(damage){
  this.health -= damage;
  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
}

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    this.saxonArmy[0].health -= this.vikingArmy[0].strength;
    if (this.saxonArmy[0].health <= 0){
      this.saxonArmy.shift();
    }
    return 'A Saxon has died in combat';
  }

  saxonAttack(){
    this.vikingArmy[0].health -= this.saxonArmy[0].strength;
    if (this.vikingArmy[0].health <= 0){
      this.vikingArmy.shift();
    } else {
    return `${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage`;
    }
  }

  showStatus(){
    if (this.saxonArmy.length < 1){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length < 1){
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
