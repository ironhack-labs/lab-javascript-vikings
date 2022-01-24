// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength

  }
  receiveDamage(damage) {
    this.health = this.health - damage
    }
  }


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`

    } else 

      return `${this.name} has received ${damage} points of damage`
    
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

let myViking = new Viking('Taylor', 100, 10)

console.log(myViking.receiveDamage(100))

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `A Saxon has died in combat`

    }
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
  }

}

let aSaxon = new Saxon(5, 10)

console.log(aSaxon.receiveDamage(100))

// War
class War {
  constructor(vikingArmy, saxonArmy) {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
     this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let ranSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let ranViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
////////////////////////////////////////////////////////
    ranSaxon.receiveDamage(ranViking.attack()) 

    if (ranSaxon.health <= 0) {
      this.saxonArmy.pop(ranSaxon)
      
    }
/////////////////////////////////////////////////////////
  }

  saxonAttack(){
    let ranSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let ranViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    ranViking.receiveDamage(ranSaxon.attack())

    if (ranViking.health <= 0) {
      return this.vikingArmy.pop(ranViking)
    }

    

  }

  showStatus(){
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`
    } else if (!this.vikingArmy.length){
      return  `Saxons have fought for their lives and survived another day...`
    } else 
    return `Vikings and Saxons are still in the thick of battle.`
  }
}


let newWar = new War

newWar.addViking(new Viking('Jimrob', 20, 201))
newWar.addSaxon(new Saxon(20, 10))
console.log(newWar)





newWar.vikingAttack()
console.log(newWar)


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
