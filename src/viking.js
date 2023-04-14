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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    return `${this.name} has received ${damage} points of damage`;
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
    if (this.health <= 0) return `A Saxon has died in combat`;
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let deadSaxons = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(Math.floor(Math.random() * this.saxonArmy.length),1)
        ;
      return deadSaxons;
    }
  }
  saxonAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
       let randomViking =
         this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let deadVikings = randomViking.receiveDamage(randomSaxon.attack());
    if(randomViking.health <= 0) {
        this.vikingArmy.splice
          (Math.floor(Math.random() * this.vikingArmy.length), 1);
        }
        return deadVikings;
  }
  showStatus() {
    if (this.vikingArmy.length === 0){ return "Saxons have fought for their lives and survived another day...";
  } else if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!";
  }else return "Vikings and Saxons are still in the thick of battle."
  }
}
