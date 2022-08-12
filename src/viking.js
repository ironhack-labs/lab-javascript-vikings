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
    // this.health = health
    // this.strength = strength
  }

  receiveDamage(damage) {
    //   super.receiveDamage(damage);
    this.health -= damage;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    else {
      return `${this.name} has received ${damage} points of damage`;
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
    if (this.health <= 0) return `A Saxon has died in combat`;
    else {
      return `A Saxon has received ${damage} points of damage`;
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
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    // Math.floor(Math.random() * (max - min)) + min;
    let vkRndPos = Math.floor(Math.random() * (this.vikingArmy.length - 1)) + 0;
    let sxRndPos = Math.floor(Math.random() * (this.saxonArmy.length - 1)) + 0;

    let sx = this.saxonArmy.at(sxRndPos);
    let vk = this.vikingArmy.at(vkRndPos);
    // let vk = new Viking("ABC", 10, 3)
    // let sx = new Saxon(20, 4)
    // sx.receiveDamage(vk.attack())
    let msg = sx.receiveDamage(vk.attack());
    if (sx.health <= 0) {
      this.saxonArmy.splice(sxRndPos, 1);
    }
    return msg;
  }
  saxonAttack() {
    let vkRndPos = Math.floor(Math.random() * (this.vikingArmy.length - 1)) + 0;
    let sxRndPos = Math.floor(Math.random() * (this.saxonArmy.length - 1)) + 0;
    let sx = this.saxonArmy.at(sxRndPos);
    let vk = this.vikingArmy.at(vkRndPos);
    let msg = vk.receiveDamage(sx.attack());
    if (vk.health <= 0) {
      this.vikingArmy.splice(vkRndPos, 1);
    }
    return msg;
  }
  showStatus() {}
}

let w = new War();
let v = new Viking("ABC", 20, 4);
let s = new Saxon(13, 6);
w.addViking(v);
w.addSaxon(s);
console.log(w.vikingArmy);
console.log(w.saxonArmy);
console.log(w.vikingAttack());
