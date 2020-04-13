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
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    return `${this.name} has died in act of combat`;
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

  soldierAttack(attack, defense) {
    let message = defense.receiveDamage(attack.attack());

    if (defense instanceof Saxon) {
      this.saxonArmy = this.saxonArmy.filter((item) => item.health > 0);
    } else if (defense instanceof Viking) {
      this.vikingArmy = this.vikingArmy.filter((item) => item.health > 0);
    }

    return message;
  }

  vikingAttack() {
    let chosenSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let chosenViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let attack = chosenSaxon.receiveDamage(chosenViking.strength);

    if (chosenSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((item) => item !== chosenSaxon);
    }

    return attack;
  }

  saxonAttack() {
    let chosenSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let chosenViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let attack = chosenViking.receiveDamage(chosenSaxon.strength);

    if (chosenViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((item) => item !== chosenViking);
    }

    return attack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
