// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    // console.log(this.strength);
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    console.log(this.health);
  }

  checkForDead() {
    if (this.health <= 0) {
      return true;
    }
    return false;
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
    if (this.checkForDead()) {
      return `${this.name.toUpperCase()} has died in act of combat`;
    }
    return `${this.name.toUpperCase()} has received ${damage} points of Damage`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.checkForDead()) {
      return `A Saxon has died in act of combat`;
    }
    return `A Saxon has received ${damage} points of Damage`;
  }
}

// War
class War {
  constructor(VikingArmyStength = 10, SaxonArmyStength = 10) {
    this.VikingArmyStength = VikingArmyStength;
    this.SaxonArmyStength = SaxonArmyStength;

    this.VikingArmy = [];
    this.SaxonArmy = [];

    for (let i = 0; i < this.VikingArmyStength; i++) {
      this.addViking(new Viking(`Viking ${i}`, 1000, 150));
    }

    for (let i = 0; i < this.VikingArmyStength; i++) {
      this.addSaxon(new Saxon(800, 120));
    }
  }

  addViking(VikingObj) {
    this.VikingArmy.push(VikingObj);
  }

  addSaxon(SaxonObj) {
    this.SaxonArmy.push(SaxonObj);
  }

  vikinAttack() {}

  saxonAttack() {}

  showStatus() {}
}

const Game = new War();
