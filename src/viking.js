// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(dmg){
    this.health -= dmg;
  }
  
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg){
    this.health -= dmg;
    if (this.health > 0){
      return `${this.name} has received ${dmg} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg){
    this.health -= dmg;
    if (this.health > 0){
      return `A Saxon has received ${dmg} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  
  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    const battle = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0){
      const idx = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(idx, 1);
    }

    return battle
  }

  saxonAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    const battle = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0){
      const idx = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(idx, 1);
    }

    return battle
  }

  showStatus(){
    if (this.saxonArmy.length == 0){
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length == 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else if (this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
