// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
    attack(){
      return this.strength;
    }
    receiveDamage(damage){
      this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  attack(){
    return this.strength;
  };
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  attack(attackers, defenders) {
    let saxon = Math.floor(Math.random() * attackers.length);
    let viking = Math.floor(Math.random() * defenders.length);
    let defender = defenders[viking];
    let result = defender.receiveDamage(attackers[saxon].strength);
    if (defender.health <= 0) defenders.splice(viking, 1);
    return result;
}

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }
  showStatus(){
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }
    else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
      return "Vikings and Saxons are still in the thick of battle.";
      } 
  }
}//War



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
