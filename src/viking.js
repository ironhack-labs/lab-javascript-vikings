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
    this.damage = damage
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  
  receiveDamage(damage){
    this.damage = damage
    this.health = this.health - damage;
    return (this.health > 0) ? `${this.name} has received ${this.damage} points of damage` : `${this.name} has died in act of combat`;
    } 
    battleCry(){
      return `Odin Owns You All!`
    }
    attack(){
      return super.attack()
     }
  }

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.damage = damage;
    this.health = this.health - damage;
    return (this.health > 0) ? `A Saxon has received ${this.damage} points of damage` : `A Saxon has died in combat`
    }
    attack(){
      return super.attack()
     }
  }

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking){
    this.vikingArmy.push(viking)
  }
  
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const theDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return theDamage;
  };

  saxonAttack(){
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const theDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    
    if (this.vikingArmy[randomViking].health <= 0) { 
      this.vikingArmy.splice(randomViking, 1);
    } 
    return theDamage

    //  return (this.vikingArmy[randomViking].health <= 0) ? this.vikingArmy.splice(randomViking, 1) : theDamage
  }

  
  showStatus(){
    if(!this.saxonArmy.length){
      return "Vikings have won the war of the century!"
    } else if (!this.vikingArmy.length){
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
