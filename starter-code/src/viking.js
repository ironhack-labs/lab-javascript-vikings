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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
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
  addSaxon(Saxon) {
      this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
      var warViking = Math.floor(Math.random() * this.vikingArmy.length);
      var warSaxon = Math.floor(Math.random() * this.saxonArmy.length);

      var damageDone = this.vikingArmy[warViking].attack();
      var result = this.saxonArmy[warSaxon].receiveDamage(damageDone);
      if (result === "A Saxon has died in combat"){
          this.saxonArmy.splice(warSaxon,1);
      }
      return result;
  }
  saxonAttack() {
      var warViking = Math.floor(Math.random() * this.vikingArmy.length);
      var warSaxon = Math.floor(Math.random() * this.saxonArmy.length);

      var damageDone = this.saxonArmy[warSaxon].attack();
      var result = this.vikingArmy[warViking].receiveDamage(damageDone);
      if (this.vikingArmy[warViking].health === 0){
        this.vikingArmy.splice(warViking, 1);
      }
       return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    }
    if(this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    }
    if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
