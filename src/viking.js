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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
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
  receiveDamage(damage) {
    this.health -= damage;
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
    if (viking > 1) {
      for (let i = 0; i < viking; ++i) {
        this.addViking(i);
      }
    }
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    if (saxon > 1) {
      for (let i = 0; i < saxon; ++i) {
        this.addSaxon(i);
      }
    }
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let totalDamageSaxon = randomSaxon.receiveDamage(randomViking.strength);
    if (totalDamageSaxon > 0) {
      return `A saxon has received ${totalDamageSaxon}`;
    } else {
      let deadSaxon = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(deadSaxon, 1);
      return `A Saxon has died in combat`;
    }
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let totalDamageViking = randomViking.receiveDamage(randomSaxon.strength);
    if (totalDamageViking > 0) {
      return `${this.name} has received ${totalDamageViking} points of damage`;
    } else {
      let deadViking = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(deadViking, 1);
      return `A viking has died in combat`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
