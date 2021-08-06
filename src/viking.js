// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.strength -= damage;
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
    if (this.health > 0){
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
  this.health -= damage;
  if (this.health <= 0){
    return "A Saxon has died in combat";
  }
  return `A Saxon has received ${damage} points of damage`;
}
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];

  }
  addViking(vikingObject){
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack(){

    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0){
      return "Both armies needs soldiers to batle agains each other";
    }

    const vikingAndSaxonMin = 0;
    const vikingMax = this.vikingArmy.length;
    const saxonMax = this.saxonArmy.length;

    const vikingIndex = Math.floor(Math.random() * (vikingMax - vikingAndSaxonMin)) + vikingAndSaxonMin;
    const saxonIndex = Math.floor(Math.random() * (saxonMax - vikingAndSaxonMin)) + vikingAndSaxonMin;

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];
    const battleFeedback = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0){
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return battleFeedback;
  }
  saxonAttack(){

  }
  showStatus(){

  }


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
