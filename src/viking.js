// Soldier
class Soldier { /* Initialize the Soldier class with the health and strength parameters */
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() { /* Function to allow him to attack based on his strenght */
    return this.strength;
  }

  receiveDamage(damage) { /* Function to allow him to receive damages and to impact his health */
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier { /* Initialize the Viking class based on the Soldier class, one more parameter = name */
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) { 
      return `${this.name} has received ${damage} points of damage`; /* Return the HP left */
    } else {
      return `${this.name} has died in act of combat`; /* If he does not have HP, return that he is dead */
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier { /* Initialize the Saxon based on the Soldier class */
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  constructor() { /* Initialize the armies */
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) { /* Add a viking inside the viking army */
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) { /* Add a saxon inside the saxon army */
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    /* Get the index of a random viking and a saxon */
    let randomSaxonIndex = this.findSaxon(this.saxonArmy);
    let randomVikingIndex = this.findViking(this.vikingArmy);

    /* Implement damages to a saxon and store the value */
    let damageResult = this.saxonArmy[randomSaxonIndex].receiveDamage(
      this.vikingArmy[randomVikingIndex].strength
    );

    /* Remove the saxon if he is dead */
    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return damageResult;
  }

  findViking(array) { /* Calculate the index of a random viking */
    return Math.floor(Math.random() * this.vikingArmy.length);
  }

  findSaxon(array) { /* Calculate the index of a random saxon */
    return Math.floor(Math.random() * this.saxonArmy.length);
  }

  saxonAttack() {
    /* Get the index of a random viking and a saxon */
    let randomSaxonIndex = this.findSaxon(this.saxonArmy);
    let randomVikingIndex = this.findViking(this.vikingArmy);

    /* Implement damages to a viking and store the value */
    let damageResult = this.vikingArmy[randomVikingIndex].receiveDamage(
      this.saxonArmy[randomSaxonIndex].strength
    );

    /* Remove the viking if he is dead */
    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return damageResult;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) { /* If there are no more saxon, vikings have won */
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) { /* If there are no more vikings, saxon have won */
      return "Saxons have fought for their lives and survived another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
