// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack (){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry (){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor (){
    this.vikingArmy = []
    this.saxonArmy = []
  }


  addViking(vikingSoldier){
    this.vikingArmy.push(vikingSoldier);
  }
  addSaxon(saxonSoldier){
    this.saxonArmy.push(saxonSoldier);
  }
  vikingAttack(){

    const soldierViking = this.vikingArmy[random(this.vikingArmy)]
    const saxonSoldier = this.saxonArmy[random(this.saxonArmy)]
    const battle = saxonSoldier.receiveDamage(soldierViking.attack())
    this.saxonArmy =  this.saxonArmy.filter((dead)=> dead.health > 0)
    return battle;
  }
  saxonAttack(){
    const vikS = this.vikingArmy[random(this.vikingArmy)]
    const saxS = this.saxonArmy[random(this.saxonArmy)]
    const result = vikS.receiveDamage(saxS.attack())
    this.vikingArmy = this.vikingArmy.filter((dead)=> dead.health > 0)
    return result
  }
  attack(atk, def){ //Array of attack and def
    const atacado = this.atk[random(this.atk)]
    const defensor = this.def[random(this.def)]
    const result = defensor.receiveDamage(atacado.attack())
    this.def = this.def.filter((deads) => deads.health > 0)
    return result
  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    } else{
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}

function random (array){
  let max = array.length
  return Math.floor(Math.random() * array.length)
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
