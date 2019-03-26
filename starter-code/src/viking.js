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
    return;
  }
}

// Viking
class Viking extends Soldier {
  // extends va chercher les method

  constructor(name, health, strength) {
    super(health, strength); // super va chercher les arguments du constructeur parent, qui est "Soldier"
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
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
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
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
    return;
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    return;
  }

  vikingAttack() {
    const randomSaxonIndex = Math.floor(
      Math.random() * Math.floor(this.saxonArmy.length - 1)
    );
    const saxon = this.saxonArmy[randomSaxonIndex];

    const randomVikingIndex = Math.floor(
      Math.random() * Math.floor(this.vikingArmy.length - 1)
    );
    const viking = this.vikingArmy[randomVikingIndex];

    if (saxon.health <= viking.strength) {
      let message = saxon.receiveDamage(viking.strength);
      this.saxonArmy.splice(randomSaxonIndex, 1);
      return message;
    } else {
      let message = saxon.receiveDamage(viking.strength);
      return message;
    }
  }

  saxonAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * Math.floor(this.vikingArmy.length - 1)
    );
    const viking = this.vikingArmy[randomVikingIndex];

    const randomSaxonIndex = Math.floor(
      Math.random() * Math.floor(this.saxonArmy.length - 1)
    );
    const saxon = this.saxonArmy[randomSaxonIndex];

    if (viking.health <= saxon.strength) {
      let message = viking.receiveDamage(saxon.strength);
      this.vikingArmy.splice(randomVikingIndex, 1);
      return message;
    } else {
      let message = viking.receiveDamage(saxon.strength);
      return message;
    }
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survive another day...`;
    } else return `Vikings and Saxons are still in the thick of battle.`;
  }
}
