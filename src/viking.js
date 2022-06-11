// Class Soldier
class Soldier {
    constructor(health, strength /*argumentos*/) {
      this.health = health
      this.strength = strength
  }
    attack(){ 
      return this.strength
    }
    receiveDamage(damage){
      this.health = this.health - damage
    }
}

// Class Viking
class Viking extends Soldier {
  /*Método*/constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage/*argumento*/){
    this.health = this.health - damage
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return  `${this.name} has died in act of combat`
    }
  }
 /*Método*/ battleCry(){
   return "Odin Owns You All!"
 }
}

// Class Saxon
class Saxon extends Soldier {
receiveDamage(damage){
  this.health = this.health - damage
  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`
  } else {
    return  `A Saxon has died in combat`
  }
}
}

// Class War
class War extends Soldier {
  constructor(){
    super()
    this.vikingArmy = [] /* array vacío */
    this.saxonArmy = [] /* array vacío */
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const attack = saxon.receiveDamage(viking.attack())
    if (saxon.health <= 0) {
      this.saxonArmy.pop()
    }
    return attack

  }

  saxonAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const attack = viking.receiveDamage(saxon.attack())
    if (viking.health <= 0) {
      this.vikingArmy.pop()
    }
    return attack
  }

  showStatus(){
     //Verificamos si esta vacio con su propiedad length es igual a 0
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survived another day...";
  } else if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
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
