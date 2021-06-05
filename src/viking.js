// Soldier
class Soldier {
  constructor( health , strength ){
    this.health = health;
    this.strength = strength; 
  }

  attack(){
   return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}  

// Viking
class Viking extends Soldier{
  constructor ( name , health , strength ) { 
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    if (this.health > 0)return `${this.name} has received ${damage} points of damage` ;
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}
// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health <= 0) return "A Saxon has died in combat";
    if (this.health > 0)return `A Saxon has received ${damage} points of damage` ;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    let vikingRandom = 1 + Math.floor(Math.random()*this.vikingArmy.length - 1);
    let saxonRandom = 1 + Math.floor(Math.random()*this.saxonArmy.length - 1);
    let viking = this.vikingArmy [vikingRandom];
    let saxon = this.saxonArmy[saxonRandom];
    let damage = saxon.receiveDamage(viking.strength);
    if (saxon . health <= 0)this.saxonArmy.splice(saxonRandom, 1);
    return damage
  }
  saxonAttack(){
    let vikingRandom = 1 + Math.floor(Math.random()*this.vikingArmy.length - 1);
    let saxonRandom = 1 + Math.floor(Math.random()*this.saxonArmy.length - 1);
    let viking = this.vikingArmy [vikingRandom];
    let saxon = this.saxonArmy[saxonRandom];
    let damage = viking.receiveDamage(saxon.strength);
    if (viking . health <= 0)this.vikingArmy.splice(vikingRandom, 1);
    return damage
  }
  showStatus(){
    if (this.saxonArmy.length <= 0) return  "Vikings have won the war of the century!"
    if (this.vikingArmy.length <= 0) return "Saxons have fought for their lives and survived another day..."
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
