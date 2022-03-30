// Soldier
class Soldier {
  constructor (health, strength) {
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
class Viking extends Soldier{
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else if (this.health <= 0){
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){

    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    
    let randomSaxon = this.saxonArmy[saxonIndex]
    let randomViking = this.vikingArmy[vikingIndex]

    const result = randomSaxon.receiveDamage(randomViking.strength)

    if (randomViking.strength >= randomSaxon.health){
      //saxon died - to be removed from army
      this.saxonArmy.splice(saxonIndex,1)
    }

    return result
  }

  saxonAttack(){
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    
    let randomSaxon = this.saxonArmy[saxonIndex]
    let randomViking = this.vikingArmy[vikingIndex]

    // console.log(randomViking);

    const result = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0){ // warum geht das hier nur so und nicht genauso wie bei dem vickings attack ?!
      //viking died - to be removed from army
      this.vikingArmy.splice(vikingIndex,1)
    }

    return result
  }

  showStatus(){
    if(this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survived another day...'
    }
    else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    }
    else return 'Vikings and Saxons are still in the thick of battle.'
  }
}

// const viking1 = new Viking('helga', 42, 23)
// console.log(viking1);

// const saxon1 = new Saxon(22, 233)
// console.log(saxon1);

// const war1 = new War()
// console.log(war1);

// war1.addViking(viking1)
// console.log(war1)




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

