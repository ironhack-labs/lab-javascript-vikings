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

    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : 'A Saxon has died in combat';
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
    let indSax = Math.floor(Math.random() * this.saxonArmy.length);
    let indVik = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonToFight = this.saxonArmy[indSax];
    let vikingToFight = this.vikingArmy[indVik];

    let result = saxonToFight.receiveDamage(vikingToFight.attack());

    if (saxonToFight.health <= 0) {
      this.saxonArmy.splice(
        this.saxonArmy[this.saxonArmy.indexOf(saxonToFight)],
        1
      );
    }

    return result;
  }

  saxonAttack() {
    let indSax = Math.floor(Math.random() * this.saxonArmy.length);
    let indVik = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonToFight = this.saxonArmy[indSax];
    let vikingToFight = this.vikingArmy[indVik];

    let result = vikingToFight.receiveDamage(saxonToFight.attack());

    if (vikingToFight.health <= 0) {
      this.vikingArmy.splice(
        this.vikingArmy[this.vikingArmy.indexOf(vikingToFight)],
        1
      );
    }

    return result;
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
