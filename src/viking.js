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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  
  attack(attackingArmy, damagedArmy) {
    const randomAttackingNum = Math.floor(Math.random() * attackingArmy.length);
    const randomDamagedNum = Math.floor(Math.random() * damagedArmy.length);
    const randomAttacking = attackingArmy[randomAttackingNum];
    const randomDamaged = damagedArmy[randomDamagedNum];
    const resultAttack = randomDamaged.receiveDamage(randomAttacking.attack());
    return resultAttack
  }

  vikingAttack() {
    const resultVikingAttack = this.attack(this.vikingArmy, this.saxonArmy)
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return resultVikingAttack;
  }

  saxonAttack() {
    const resultSaxonAttack = this.attack(this.saxonArmy, this.vikingArmy)
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return resultSaxonAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

  _vikingAttack() {
    const randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[randomVikingNum];
    const randomSaxon = this.saxonArmy[randomSaxonNum];
    const resultVikingAttack = randomSaxon.receiveDamage(randomViking.attack());
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

    /*Otra forma de podar el array
    if (resultVikingAttack === `A Saxon has died in combat`) {
      this.saxonArmy.splice(randomSaxonNum, 1);
    }*/

    return resultVikingAttack;
  }

  _saxonAttack() {
    const randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[randomVikingNum];
    const randomSaxon = this.saxonArmy[randomSaxonNum];
    const resultSaxonAttack = randomViking.receiveDamage(randomSaxon.attack());
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

    /*Otra forma de podar el array
        if (resultSaxonAttack === `${randomViking.name} has died in act of combat`) {
      this.vikingArmy.splice(randomVikingNum, 1);
    }*/

    return resultSaxonAttack;
  }

}

