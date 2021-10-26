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
  attack(agressorArmy,defensorArmy){
    const defensor = defensorArmy[Math.floor(Math.random() * defensorArmy.length)];
    const agressor = agressorArmy[Math.floor(Math.random() * agressorArmy.length)];
    const figthingResult = defensor.receiveDamage(agressor.strength);
    if(defensor.health <= 0){
      defensorArmy = defensorArmy.filter(warrior => warrior.health > 0);
    }
    return figthingResult;
  }
  vikingAttack(){
   return this.attack(this.vikingArmy,this.saxonArmy);
  }
  saxonAttack(){
    return this.attack(this.saxonArmy,this.vikingArmy);
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
