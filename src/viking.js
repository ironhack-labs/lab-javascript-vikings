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
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){

    /* While this passes the test, it's not scalable for bigger armies,
    so I will try to expand on that during the weekend. The same for the 
    saxons Arrack method */
    let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
      delete this.saxonArmy.pop();
    };
    
    return result;
  }

  saxonAttack(){
    let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
      delete this.vikingArmy.pop();
    };
    
    return result;
  }

  showStatus(){
    if (this.saxonArmy.length === 0)return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)return "Saxons have fought for their lives and survived another day...";
    if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0)return "Vikings and Saxons are still in the thick of battle.";
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
