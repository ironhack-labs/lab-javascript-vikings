// Soldier
class Soldier {
  health;
  strength;

  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  name;
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
  }
// War
class War {
  vikingArmy=[];
  saxonArmy=[];

  addViking(viking){
  this.vikingArmy.push(viking);
  }
  addSaxon(Saxon){
  this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    const figthingVikig = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const figthingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const figthingResult = figthingSaxon.receiveDamage(figthingVikig.strength);
    if(figthingSaxon.health <= 0){
      this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    }
    return figthingResult;
  }
  saxonAttack(){
    const figthingVikig = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const figthingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const figthingResult = figthingVikig.receiveDamage(figthingSaxon.strength);
    if(figthingVikig.health <= 0){
      this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    }
    return figthingResult;
  }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
