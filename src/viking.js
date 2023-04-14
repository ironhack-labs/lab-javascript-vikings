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
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength, name) {
        super(health, strength);
        this.name = name;
      }
      receiveDamage(damage) {
        this.health -= damage;

    if (this.health === 0) {
        return `A Saxon has died in combat`;
      } else {
        return `A Saxon has received ${damage} points of damage`;
      }
}
}

// War
class War {
    constructor() {
        this.saxonArmy = [];
        this.vikingArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

vikingAttack(){
    receiveDamage();
};
saxonAttack(){};
showStatus(){
    if (this.saxonArmy.length && this.vikingArmy.length > 0){
        return "Vikings and Saxons are still in the thick of battle.";  // THIS WORKS 
    }
    else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day..." //THIS DOESN'T WORK
    }
    else {}
}
}