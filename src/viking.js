// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    console.log('hola')
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return  `${this.name} has received ${damage} points of damage`
    }
    return `${this.name} has died in act of combat`
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return  `A Saxon has received ${damage} points of damage`
    }
    return `A Saxon has died in combat`
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
    const randomIndex = Math.floor(Math.random()*this.saxonArmy.length)
    const  saxon =  this.saxonArmy[randomIndex];
    saxon.receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomIndex)
      return 'A Saxon has died in combat'
    }
  }
  saxonAttack(){
    const randomEnemyIndex =  Math.floor(Math.random()*this.saxonArmy.length);
    const saxon = this.saxonArmy[randomEnemyIndex];
    const randomIndex = Math.floor(Math.random()*this.vikingArmy.length);
    const  viking =  this.vikingArmy[randomIndex];
    viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomIndex);
      return 'A Viking has died in combat'
    }
    return `${viking.name} has received ${saxon.strength} points of damage`
  }
  showStatus(){
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"      
    }else if (this.vikingArmy.length === 0) {
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
