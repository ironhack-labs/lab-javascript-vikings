// Soldier
class Soldier {

  constructor(health, strength){
    this.health = 300;
    this.strength = 150;
  }

  attack(){
      return this.strength;
  }

  receiveDamage(theDamage){
     this.health -= theDamage;
  }

}

// Viking
class Viking extends Soldier{

  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage
    if(this.health > theDamage){
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }

  }

  battleCry() {
    return `Odin Owns You All!`;
  }

}

// Saxon
class Saxon extends Soldier{

  constructor(health, strength){
    super(health, strength)
    this.health = health;
    this.strength = strength;
  }
  
  receiveDamage(theDamage){

    this.health -= theDamage;

    if (this.health > theDamage) {
      return `${this} has received ${theDamage} points of damage`;

    } else {
      return `${this} has died in combat`;
    }  
  
  }
  
}

// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
    let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonRandom = this.saxonArmy[saxonRandomIndex];
    let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingRandom = this.vikingArmy[vikingRandomIndex];

     saxonRandom.receiveDamage(vikingRandom.strength)
     if (saxonRandom.health <= 0) {
       this.saxonArmy.splice(saxonRandomIndex, 1);
       return `A Saxon has died in combat`;
     }
  }

  saxonAttack(){
    let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonRandom = this.saxonArmy[saxonRandomIndex];
    let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingRandom = this.vikingArmy[vikingRandomIndex];

    vikingRandom.receiveDamage(saxonRandom.strength)
    if (vikingRandom.health <= 0) {
      this.vikingArmy.splice(vikingRandomIndex, 1);
    }
    return `${vikingRandom.name} has received ${saxonRandom.strength} points of damage`;
  }

  soldierAttack(soldier){
    let soldierAttacking;
    let soldierAttacked;
    let soldierArmy;

    if (soldier === "viking") {
      soldierAttacking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      soldierAttacked = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      soldierArmy = this.vikingArmy;
    } 
    else if (soldier === "saxon"){
      soldierAttacking = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      soldierAttacked = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      soldierArmy = this.vikingArmy;
    }
    
    let result = soldierAttacked.receiveDamage(soldierAttacking.strength)
      if (soldierAttacked.health <= 0) {
        this.soldierArmy.splice(soldierAttacked, 1);
      }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0)
      return "Vikings and Saxons are still in the thick of battle.";
    }

}
