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
    this.health -= damage; // calculate health after received damage
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

    if(this.health > 0) { // if Viking's health is bigger than 0 the Viking is still alive
      return `${this.name} has received ${damage} points of damage`;
    } else { // Viking is dead
      return `${this.name} has died in act of combat`;
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
  }

  receiveDamage(damage) {
    this.health -= damage;

    if(this.health > 0) { // if Saxon's health is bigger than 0 the Viking is still alive
      return `A Saxon has received ${damage} points of damage`;
    } else { // Saxon is dead
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []; // create empty vikingArmy array
    this.saxonArmy = []; // create empty saxonArmy array
  }

  addViking(viking) {
    this.vikingArmy.push(viking); // add 1 viking to vikingArmy array
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon); // add 1 saxon to vikingArmy array
  }

  vikingAttack() {
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; // select a random Viking from the vikingArmy array
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; // select a random Saxon from the saxonArmy array

    const resultDamage = randomSaxon.receiveDamage(randomViking.strength); // get the result of received damage on random Saxon, which is equal to the strenght of the Viking


    if(randomSaxon.health <= 0){ // if Sanxon's health is 0 or below, Saxon dies
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1) // removes the selected random Saxon from saxonArmy array
    }

    return resultDamage; // return the result
  }

  saxonAttack() {
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; // select a random Saxon from the saxonArmy array
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; // select a random Viking from the vikingArmy array

    const resultDamage = randomViking.receiveDamage(randomSaxon.strength); // get the result of received damage on random Viking, which is equal to the strenght of the Saxon

    if(randomViking.health <= 0){ // if Viking's health is 0 or below, Viking dies
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1); // removes the selected random Viking from vikingArmy array
    }

    return resultDamage; // return the result
  }

  whoIsAttacking(theAttacker) {
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    if (theAttacker === 'Saxon') {
      const resultDamage = randomViking.receiveDamage(randomSaxon.strength);

      if (randomViking.health <= 0){ 
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
      }

      return resultDamage;
    }

    if (theAttacker === 'Viking') {
      const resultDamage = randomSaxon.receiveDamage(randomViking.strength);

      if (randomSaxon.health <= 0){ 
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomSaxon), 1);
      }

      return resultDamage;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
