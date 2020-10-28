// Soldier

// class

// should receive 2 arguments (health & strength)
// should receive the health property as its 1st argument
// should receive the strength property as its 2nd argument

// attack() method
// should be a function
// should receive 0 arguments
// should return the strength property of the Soldier

// receiveDamage() method
// should be a function
// should receive 1 argument (the damage)
// should remove the received damage from the health property
// shouldn't return anything

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
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    // console.log("damage", damage);
    this.health -= damage;
    // console.log("health", this.health);
    if (this.health === 0) return `${this.name} has died in act of combat`;

    return `${this.name} has received ${damage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
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
    //A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.
    let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
    // console.log("randomSax", randomSax);

    let randomVik = Math.floor(Math.random() * this.vikingArmy.length);

    let saxonObj = this.saxonArmy[randomSax];
    // console.log("saxonObj", saxonObj);

    let vikAttack = saxonObj.receiveDamage(this.vikingArmy[randomVik].strength);
    if (saxonObj.health <= 0) {
      this.saxonArmy.splice(saxonObj, 1);
    }
    // console.log(vikAttack);
    return vikAttack;
  }
  saxonAttack() {
    let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
    // console.log("randomSax", randomSax);

    let randomVik = Math.floor(Math.random() * this.vikingArmy.length);

    let vikObj = this.vikingArmy[randomVik];

    let saxAttack = vikObj.receiveDamage(this.saxonArmy[randomSax].strength);
    if (vikObj.health <= 0) {
      this.vikingArmy.splice(vikObj, 1);
    }
    // console.log("saxAttack", saxAttack);

    return saxAttack;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
