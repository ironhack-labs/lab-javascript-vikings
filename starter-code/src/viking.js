// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage){
    super.receiveDamage(damage);
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingAttackDmg = chosenViking.attack();
    let battleResult = chosenSaxon.receiveDamage(vikingAttackDmg);
    if(chosenSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon, 1));
    }
    return battleResult;
  }
  saxonAttack() {
    let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let saxonAttackDmg = chosenSaxon.attack();
    let battleResult = chosenViking.receiveDamage(saxonAttackDmg);
    if(chosenViking.health <= 0) {
      this.vikingArmy.splice(this.saxonArmy.indexOf(chosenViking, 1));
    }
    return battleResult;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
