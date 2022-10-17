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
    if (this.health > 0) {
      this.health = this.health - damage;
      // console.log(`${this.name} has received ${damage} points of damage`);
    } else if (this.health <= 0) {
      console.log(`${this.name} has died in act of combat`);
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);

  }
  vikingAttack() {}
  saxonAttack() {}

  showStatus() {
    
    if (this.saxonArmy.length  === 0){
        return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survived another day...`
    } else {
        return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
