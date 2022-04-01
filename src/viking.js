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
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
  }

  battleCry(){return "Odin Owns You All!"}

}

// Saxon
class Saxon extends Soldier{
  /*  I noticed I didn't have to use the constructor here, 
  since Saxon doesn't have any specific class arguments
  it would automatically send the health and strength arguments
  to the Soldier Class. But I figure it's easier to understand this way */
  constructor(health,strength){ 
    super(health,strength)
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    if (this.health <= 0) return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let result;
    for (let i = 0; i < this.saxonArmy.length; i++) {
      result = this.saxonArmy[i].receiveDamage(this.vikingArmy[i].strength);

      if (this.saxonArmy[i].health <= 0) {
        delete this.saxonArmy.splice(i, 1);
      }
    }
    return result;
  }

  saxonAttack() {
    let result;
    for (let i = 0; i < this.vikingArmy.length; i++) {
      result = this.vikingArmy[i].receiveDamage(this.saxonArmy[i].strength);

      if (this.vikingArmy[i].health <= 0) {
        delete this.vikingArmy.splice(i, 1);
      }
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0)
      return 'Vikings have won the war of the century!';
    if (this.vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survived another day...';
    if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0)
      return 'Vikings and Saxons are still in the thick of battle.';
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
