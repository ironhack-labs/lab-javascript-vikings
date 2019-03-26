// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageAmmount) {
    this.health = this.health - damageAmmount;
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
  receiveDamage(damageAmmount) {
    this.health = this.health - damageAmmount;
    if (this.health > 0) {
      return `${this.name} has received ${damageAmmount} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
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
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageAmmount) {
    this.health = this.health - damageAmmount;
    if (this.health > 0) {
      return `A Saxon has received ${damageAmmount} points of damage`;
    } else if (this.health <= 0) {
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
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    const v = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))];
    const s = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))];
    const r = s.receiveDamage(v.strength);

    if (s.health <= 0) {
      for (let index = 0; index < this.saxonArmy.length; index++) {
        if (this.saxonArmy[index] === s) this.saxonArmy.splice(index, 1);
      }
    }
    return r;

    // this.saxonArmy[0].health = this.saxonArmy[0].health - this.vikingArmy[0].strength;
    // if (this.saxonArmy[0].health <= 0) {
    //   var res = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
    //   this.saxonArmy.splice(0, 1);
    //   return res
    // }
  }
  saxonAttack() {
    const v = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))];
    const s = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))];
    const res = v.receiveDamage(s.strength);

    if (v.health <= 0) {
      for(let j = 0; j < this.vikingArmy.length; j ++) {
        if(this.vikingArmy[j] == v) this.vikingArmy.splice(j, 1);
      }
    }
    return res;
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length == 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}