// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = 250;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = `Harald`;

  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;

    if (this.health <= 0) {
      return this.name + ` has died in act of combat`;
    } else {
      return this.name + ` has received ${theDamage} points of damage`;
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
    this.health = 60;
    this.strength = 25;

  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${theDamage} points of damage`;
    }
  }
}
// War
class War {

  vikingArmy = []
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let AleatorySaxonSoldier = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonSoldier = this.saxonArmy[AleatorySaxonSoldier];

    let AleatoryVikingSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingSoldier = this.vikingArmy[AleatoryVikingSoldier];

    let damageSaxon = saxonSoldier.receiveDamage(vikingSoldier.strength);

    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(AleatorySaxonSoldier)
    }

    return damageSaxon;
  }


  saxonAttack() {
    let AleatorySaxonSoldier = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonSoldier = this.saxonArmy[AleatorySaxonSoldier];

    let AleatoryVikingSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingSoldier = this.vikingArmy[AleatoryVikingSoldier];

    let damageViking = vikingSoldier.receiveDamage(saxonSoldier.strength);

    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(AleatoryVikingSoldier)
    }

    return damageViking;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}