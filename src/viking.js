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
      return `${this.name} has received ${damage} points of damage`
    }

    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
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

  addViking = (viking) => {
    this.vikingArmy.push(viking);
  }

  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
  }

  chooseRandom = (army) => {
    return army[
      Math.floor(army.length * Math.random())
    ]
  }

  attack(attackerArmy, defenderArmy) {
    const randomAttacker = this.chooseRandom(attackerArmy);
    const randomDefender = this.chooseRandom(defenderArmy);

    const damageDone = randomDefender.receiveDamage(randomAttacker.strength);
    defenderArmy = defenderArmy.filter(defender => defender.health > 0);

    return damageDone;
  }

  vikingAttack = () => {
    const randomViking = this.chooseRandom(this.vikingArmy);
    const randomSaxon = this.chooseRandom(this.saxonArmy);

    const damageDone = randomSaxon.receiveDamage(randomViking.strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

    return damageDone;
  }

  saxonAttack = () => {
    const randomViking = this.chooseRandom(this.vikingArmy);
    const randomSaxon = this.chooseRandom(this.saxonArmy);

    const damageDone = randomViking.receiveDamage(randomSaxon.strength);
    this.vikingArmy = this.vikingArmy.filter(saxon => saxon.health > 0);

    return damageDone;
  }

  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    }

    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    }

    return 'Vikings and Saxons are still in the thick of battle.'
  }

}
