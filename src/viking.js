// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
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

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
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
    let saxon = this.saxonArmy[0];
    let vikingStrength = this.vikingArmy[0].strength;
    let receiveDamageViking = saxon.receiveDamage(vikingStrength);
    if (saxon.health <= 0) {
      this.saxonArmy.pop(saxon);
    }

    return receiveDamageViking;
  }

  saxonAttack() {
    let viking = this.vikingArmy[0];
    let saxonStrength = this.saxonArmy[0].strength;
    let receiveDamageSaxon = viking.receiveDamage(saxonStrength);
    if (viking.health <= 0) {
      this.vikingArmy.pop(viking);
    }

    return receiveDamageSaxon;
  }

  showStatus() {
    let saxonArr = this.saxonArmy.length;
    let vikingArr = this.vikingArmy.length;

    if (saxonArr === 0) {
      return "Vikings have won the war of the century!";
    } else if (vikingArr === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

