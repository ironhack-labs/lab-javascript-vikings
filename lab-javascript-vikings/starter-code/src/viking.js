
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(thedamage) {
    //this.health -= thedamage;
    super.receiveDamage(thedamage);
    if (this.health < 1) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${thedamage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(thedamage) {
    //this.health -= thedamage;
    super.receiveDamage(thedamage);
    if (this.health < 1) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${thedamage} points of damage`;
  }
}

// War
class War {
  constructor (){
     this.vikingArmy = [];
     this.saxonArmy = [];
  }

  addViking(object){  
   this.vikingArmy.push(object);
  }

  addSaxon(object){
   this.saxonArmy.push(object);
  }

  vikingAttack(){
    let vi = vikingArmy[0];
    let sa = saxonArmy[0];

   
  }

  saxonAttack(){
    let vi = vikingArmy[0];
    let sa = saxonArmy[0];
    
    
  }

  showStatus(){

    if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  }

    if (this.vikingArmy.length === 0)  {
    return "Saxons have fought for their lives and survive another day...";
  }

    if (this.saxonArmy.length === this.vikingArmy.length) {
    return  "Vikings and Saxons are still in the thick of battle.";
   }
  }
}