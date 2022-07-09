// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }
  
  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }
  receiveDamage(damage){
  this.health -= damage;
    return this.health >= 1 ? `${this.name} has received ${damage} points of damage` 
    : `${this.name} has died in act of combat`;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
    return this.health >= 1 ? `A Saxon has received ${damage} points of damage` 
    : `A Saxon has died in combat`;
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    let saxon = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length)]
    let attack = viking.receiveDamage(saxon.attack());

    if(saxon.health <= 0){
      this.vikingArmy.splice(viking, 1);
    }
  return attack;
    }

  saxonAttack(){
    let saxon = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length)]
    let attack = saxon.receiveDamage(viking.attack());

    if(saxon.health <= 0){
      this.saxonArmy.splice(saxon, 1);
    }
  return attack;
    }
    

  showStatus(){
    if(this.vikingArmy.length != 0 && this.saxonArmy.length != 0){
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings have won the war of the century!"
    } 
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
