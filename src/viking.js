// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health = this.health - dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg) {
    this.health = this.health - dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

const thor = new Viking();

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health = this.health - dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
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
  addViking(obj) {
    this.vikingArmy.push(obj);
  }

  addSaxon(obj) {
    this.saxonArmy.push(obj);
  }

  vikingAttack() {
    const dmgSoldier = this.saxonArmy[0].receiveDamage(
      this.vikingArmy[0].strength
    );
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.pop(dmgSoldier);
      return "A Saxon has died in combat";
    }
  }

  saxonAttack() {
    const dmgSoldier = this.vikingArmy[0].receiveDamage(
      this.saxonArmy[0].strength
    );
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.pop(dmgSoldier);
      return `${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      ("Vikings and Saxons are still in the thick of battle");
    }
  }
}
