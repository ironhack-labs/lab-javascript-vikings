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
    } else {
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
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    var indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = this.saxonArmy[indexRandomSaxon];
    var randomViking = this.vikingArmy[indexRandomViking];
    var resultAttack;

    resultAttack = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(indexRandomSaxon, 1);
    }
    return resultAttack;
  }

  saxonAttack() {
    var indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = this.saxonArmy[indexRandomSaxon];
    var randomViking = this.vikingArmy[indexRandomViking];
    var resultAttack;

    resultAttack = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(indexRandomViking, 1);
    }
    return resultAttack;
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    } else {
      if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`;
      } else {
        return `Saxons have fought for their lives and survived another day...`;
      }
    }
  }


  attack(attackingSoldier) {
    var indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = this.saxonArmy[indexRandomSaxon];
    var randomViking = this.vikingArmy[indexRandomViking];
    var resultAttack;

    if (soldier === "viking") {
      resultAttack = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(indexRandomSaxon, 1);
      }
    } else {
      resultAttack = randomViking.receiveDamage(randomSaxon.strength);
      if (randomViking.health <= 0)
        this.vikingArmy.splice(indexRandomViking, 1);
    }
    return resultAttack;
  }
}


/***** TESTS  *******/

//var war1 = new War();

//viking1 = new Viking(`Harald`, 300, 150);
//viking2 = new Viking(`Luka`, 300, 125);
//saxon1 = new Saxon(300, 175);
//saxon2 = new Saxon(200, 300);

//war1.addViking(viking1);
//war1.addViking(viking2);
//war1.addSaxon(saxon1);
//war1.addSaxon(saxon2);

//console.log(war1.vikingArmy);
//console.log(war1.saxonArmy);

//console.log(war1.vikingAttack);
