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
    this.health = this.health - damage;
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
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
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
    var randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    var saxonDamage = this.randomSaxon.receiveDamage(randomViking.attack());
    //remove from the array any viking who has health of zero
    if (this.randomSaxon.health === 0) {
      this.saxonArmy.pop();
    }
    return saxonDamage;
  }

  saxonAttack() {
    var randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    var vikingDamage = randomViking.receiveDamage(randomSaxon.attack());
    //remove from the array any viking who has health of zero
    if (this.vikingArmy.health.includes(0)) {
      this.vikingArmy.pop();
    }
    return vikingDamage;
  }

  showStatus() {
    //should return "Vikings have won the war of the century!", if the Saxons array is empty
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    // if the Vikings array is empty should return "Saxons have fought for their lives and survived another day..."
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    //should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
