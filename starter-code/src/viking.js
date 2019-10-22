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
    //need to be in front of any variable assignment
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
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
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
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
    //.push won't add the number to each other
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let random = Math.floor(Math.random() * this.saxonArmy.length);
    let random2 = Math.floor(Math.random() * this.vikingArmy.length);
    let attack = this.saxonArmy[random].receiveDamage(
      this.vikingArmy[random2].strength
    );
    if (this.saxonArmy[random].health <= 0) {
      this.saxonArmy.splice(random, 1);
    }
    return attack;
  }

  saxonAttack() {
    let random = Math.floor(Math.random() * this.saxonArmy.length);
    let random2 = Math.floor(Math.random() * this.vikingArmy.length);
    let chosenSaxon = this.saxonArmy[random];
    let chosenViking = this.vikingArmy[random2];

    if (chosenViking.health < 0) {
      this.vikingArmy.splice(random2, 1);
    }

    return chosenViking.receiveDamage(chosenSaxon.strength);
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
// const war1 = new War();
// war1.vikingAttack();

// const viking1 = new Viking("v", 30, 50);
