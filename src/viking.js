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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  vikingAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      if(randomSaxon.health<=randomViking.strength){
        let index = this.saxonArmy.indexOf(randomSaxon)
        this.saxonArmy.splice(index, 1)
      }

    

    return randomSaxon.receiveDamage(randomViking.strength);
  }
  saxonAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      if(randomViking.health<=randomSaxon.strength){
        let index = this.vikingArmy.indexOf(randomViking)
        this.vikingArmy.splice(index, 1)
      }

    

    return randomViking.receiveDamage(randomSaxon.strength);
  }
  showStatus() {
    if (this.saxonArmy.length ===0){
        return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    }
    else{
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
}
