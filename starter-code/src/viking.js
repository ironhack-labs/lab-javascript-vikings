// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health < 1) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${theDamage} points of damage`;
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
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health < 1) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${theDamage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.saxonIndex = 0;
    this.vikingIndex = 0;
  }
  addViking(viking) {
    //  viking = new Viking(name, health, strength);
     this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    //Select random Saxon element
    this.saxonIndex = this.getRandomPlayer(this.saxonArmy);
    //Select random Viking element
    this.vikingIndex = this.getRandomPlayer(this.vikingArmy);
    //Call the receiveDamage method on that particular Saxon damaging by the strencth of the viking
    this.saxonArmy[this.saxonIndex].receiveDamage(this.vikingArmy[this.vikingIndex].strength);
    // Remove the saxon if dead
    if(this.saxonArmy[this.saxonIndex].health === 0){
      this.saxonArmy.splice(this.saxonIndex, 1);
    }
  }
  getRandomPlayer(armyArray){
    let soldierIndex = 0;
    return soldierIndex = Math.floor(Math.random()*armyArray.length);
  }

}
