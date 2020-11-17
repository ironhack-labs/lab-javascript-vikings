// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    (this.vikingArmy = []), (this.saxonArmy = []);
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * Math.floor(this.vikingArmy.length - 1)
    );
    const randomSaxonIndex = Math.floor(
      Math.random() * Math.floor(this.saxonArmy.length - 1)
    );
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const attack = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return attack;
  }
  saxonAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * Math.floor(this.vikingArmy.length - 1)
    );
    const randomSaxonIndex = Math.floor(
      Math.random() * Math.floor(this.saxonArmy.length - 1)
    );
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const attack = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return attack;
  }
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings have won the war of the century!';
    }
  }
}
