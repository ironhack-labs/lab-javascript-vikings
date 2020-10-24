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
    this.health = this.health - damage;
    // probably a much smoother and shorter way of writing this??
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
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
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
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
  // using the .push method to add element to the array
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const randomVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const attackResult = randomSax.receiveDamage(randomVik.strength);
    if (randomSax.health <= 0) {
      // find random saxon in saxon army array, going to use the index of method, then we will need to splice as that allows us to delete a specific index in the array and mutates the orignal array rather than returning a new one
      const randomSaxonIndex = this.saxonArmy.indexOf(randomSax);
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return attackResult;
  }

  saxonAttack() {
    const randomSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const randomVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const attackResult = randomVik.receiveDamage(randomSax.strength);
    if (randomVik.health <= 0) {
      const randomVikingIndex = this.vikingArmy.indexOf(randomVik);
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return attackResult;
  }
  // again probably a better way of checking than using if statements here, sorry if this is not the logic im meant to be using.
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
