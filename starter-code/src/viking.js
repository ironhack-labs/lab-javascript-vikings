// Soldier
// function Soldier() {}
class Soldier{
  constructor(health, strength){
  this.health =  health;
  this.strength = strength;
  };
  attack() {
    return this.strength;
  };
  receiveDamage(damage) {
    this.health -= damage;
  };
}
// Viking
// function Viking() {}

class Viking extends Soldier{
  constructor(vikingName,health, strength){
    super(health, strength)
    this.name = vikingName;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } 
    if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
  };
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
// function Saxon() {}
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } 
    if (this.health <= 0){
      return `A Saxon has died in combat`
    }
  };
}
// War
// function War() {}

class War{
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(mrViking) {
    this.vikingArmy.push(mrViking)
  }
  addSaxon(mrSaxon) {
    this.saxonArmy.push(mrSaxon)
  }
  vikingAttack() {
    let attackingViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length))]
    let saxonIndex=Math.floor(Math.random()*(this.saxonArmy.length));
    let defensiveSaxon = this.saxonArmy[saxonIndex];
    defensiveSaxon.receiveDamage(attackingViking.strength)
    if (defensiveSaxon.health <=0) {
      this.saxonArmy.splice(saxonIndex,1);
      return "A Saxon has died in combat"
    } else {
      return "A Saxon received ${attackingViking.strength} damage in combat"
    }
  }
  saxonAttack(){
    let vikingIndex=Math.floor(Math.random()*(this.vikingArmy.length));
    let defensiveViking = this.vikingArmy[vikingIndex]
    let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length))];
    defensiveViking.receiveDamage(attackingSaxon.strength)
    if (defensiveViking.health <=0) {
      this.vikingArmy.splice(vikingIndex,1);
      return "A Viking has died in combat"
    } else {
      return `${defensiveViking.name} has received ${attackingSaxon.strength} points of damage`
    }
  }
  showStatus(){
    if (this.saxonArmy.length < 1) {
      return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length < 1) {
      return `Saxons have fought for their lives and survive another day...`
    } else if (this.vikingArmy.length > 0 & this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}