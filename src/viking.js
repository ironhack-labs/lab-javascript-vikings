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
    this.health -= damage
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

    //this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }

}

// Saxon
class Saxon extends Soldier {

  // no se pone el constructor porque es exactamente igual al padre
  //       constructor(health,strength) {
  //       super(health, strength);}


  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
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
    this.vikingArmy.push(viking)
  };

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  };

  vikingAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[indexSaxon];
    let randomViking = this.vikingArmy[indexViking];

    let damageSaxon = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) { this.saxonArmy.splice(randomSaxon) }
    return damageSaxon
  };  

  saxonAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[indexSaxon];
    let randomViking = this.vikingArmy[indexViking];

    let damageViking = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) { this.vikingArmy.splice(randomViking) }

    return damageViking

  };

  showStatus() {
    if (this.saxonArmy.length === 0) { 
      return 'Vikings have won the war of the century!' ;
    } else if (this.vikingArmy.length === 0)  {
      return 'Saxons have fought for their lives and survived another day...';
    } else { 
      return 'Vikings and Saxons are still in the thick of battle.'
    }

  }
}
