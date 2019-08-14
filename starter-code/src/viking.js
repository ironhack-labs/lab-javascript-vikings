// Make sure you use objects and prototypal inheritance during the exercise.

// Soldier

class Soldier {
  
  constructor (healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

const soldier = new Soldier(15, 100)
console.log(soldier.health)

// Viking
class Viking extends Soldier {

  constructor (name, healthArg, strengthArg) {
    super (healthArg, strengthArg)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage`: `${this.name} has died in act of combat`;
  }

  battleCry () {
    return "Odin Owns You All!"
  }
}

// Saxon

class Saxon extends Soldier {

  constructor (healthArg, strengthArg) {
    super (healthArg, strengthArg)
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage`: `A Saxon has died in combat`;
  }
}

// War
class War {

  constructor () {
   
  }
  
  addViking(Viking) {
    this.army += new Viking
  }

  addSaxon() {

  }

  vikingAttack() {

  }

  saxonAttack() {

  }
  
  showStatus() {

  }

}
