// Soldier
class Soldier {
  constructor (health,strength){
    this.health = health,
    this.strength=strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -=damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name =name
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

  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage
    return  this.health  > 0 ? `A Saxon has received ${damage} points of damage`:  
       `A Saxon has died in combat`
  }
}

// War
class War {
 
  vikingArmy = []
  saxonArmy =[]
    
  
  
  addViking(obj){
    this.vikingArmy.push(obj)
  }

  addSaxon(obj){
    this.saxonArmy.push(obj)
  }
  // ### SUPER BONUS - Iteration 5

  soldierAttack(attackingArmy,defendingArmy){
    let attacker = this.attackingArmy[Math.floor(Math.random()*this.attackingArmy.length)]
    let defender = this.defendingArmy[Math.floor(Math.random()*this.defendingArmy.length)]
    const attacking = attacker.attack()
    const defending = defender.receiveDamage(attacking)
    if (defending.health <= 0 ){
      this.defendingArmy.splice(defender)
    }
    return defender
  }
  vikingAttack(){
    let RandomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    const vikingstrength = randomViking.attack()
    const saxon = RandomSaxon.receiveDamage(vikingstrength)
    if (RandomSaxon.health <= 0 ){
      this.saxonArmy.splice(RandomSaxon)
    }
    return saxon
  }
  saxonAttack(){
    let RandomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    const saxonstrength = RandomSaxon.attack()
    const viking = randomViking.receiveDamage(saxonstrength)
    if (randomViking.health <= 0 ){
      this.vikingArmy.splice(randomViking)
    }
    return viking
  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length ===0){
      return `Saxons have fought for their lives and survived another day...`
    }
    else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
