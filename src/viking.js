// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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
  battleCry() {
    return "Odin Owns You All!"
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }  

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let result = randomSaxon.receiveDamage(randomViking.strength)

    this.saxonArmy.forEach(saxon => {
      if (saxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxon));
      }
    })
    return result;
  }
  saxonAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let raondomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let result = randomViking.receiveDamage(raondomSaxon.strength)

    this.vikingArmy.forEach(viking => {
      if (viking.health <= 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(viking));
      }
    })
    return result;
  }
  showStatus() {
    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }
    else if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}