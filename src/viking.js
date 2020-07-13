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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
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
    //Picking up a random Viking in the Viking army array
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[randomVikingIndex];
    //Picking up a random Saxon in the Saxon army array
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    // damaging Saxon's health depending on viking's strength
    let result = saxon.receiveDamage(viking.strength);
    // Deleting the saxon from the army if he's dead
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    // Returning the result of the damage
    return result;
  }
  saxonAttack() {
    //Picking up a random Viking in the Viking army array
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[randomVikingIndex];
    //Picking up a random Saxon in the Saxon army array
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    // damaging Viking's health depending on Saxon's strength
    let result = viking.receiveDamage(saxon.strength);
    // Deleting the Viking from the army if he's dead
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    // Returning the result of the damage
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

  // ------------- Super Bonus part ------------------
  attack(attackingArmy) {
    //Picking up a random Viking in the Viking army array
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[randomVikingIndex];
    //Picking up a random Saxon in the Saxon army array
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    //Finding who is the attacking army and putting the damage
    let result = ""
    if (attackingArmy == "Viking") {
      // damaging Saxon's health depending on viking's strength
      result = saxon.receiveDamage(viking.strength);
      // Deleting the saxon from the army if he's dead
      if (saxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }
    } else if (attackingArmy == "Saxon") {
      // damaging Viking's health depending on Saxon's strength
      result = viking.receiveDamage(saxon.strength);
      // Deleting the Viking from the army if he's dead
      if (viking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
      }
    }
    return result;
  
  }

  // Then the vikingAttack method will be : 
  vikingAttack() {return this.attack("Viking")}
  // And the saxonAttack method will be : 
  saxonAttack() {return this.attack("Saxon")}
}
