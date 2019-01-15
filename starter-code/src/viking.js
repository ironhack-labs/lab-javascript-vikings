// Soldier
class Soldier {
  constructor(soldierHealth, soldierStength) {
    this.health = soldierHealth;
    this.strength = soldierStength;
  }

  // adding methods
  attack() {
    return this.strength;
  }

  receiveDamage(pointDamage) {
    this.health -= pointDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(vikingName, vikingHealth, vikingStength) {
    // mapping new values to parent function and extending it with a new propierty
    super(vikingHealth, vikingStength);
    this.name = vikingName;
  }
  receiveDamage(pointDamage) {
    this.health -= pointDamage;
    if (this.health > 0) {
      return this.name + " has received " + pointDamage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
    console.log(this.health);
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(saxonHealth, saxonStength) {
    // mapping new values to parent function and extending it with a new propierty
    super(saxonHealth, saxonStength);
  }

  receiveDamage(pointDamage) {
    this.health -= pointDamage;
    if (this.health > 0) {
      return "A Saxon has received " + pointDamage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
    console.log(this.health);
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(onePerson) {
    this.vikingArmy.push(onePerson);
  }

  addSaxon(onePerson) {
    this.saxonArmy.push(onePerson);
  }
  vikingAttack() {
    // do a random selector for the saxon army array
    var random = Math.floor(Math.random() * this.saxonArmy.length);
    console.log(random);

    // go fetch one of the saxon to receive one of the viking strength as damage
    // each saxon and vikings are selected randomly inside each army arrays
    var oneSaxon = this.saxonArmy[random];
    var oneViking = this.vikingArmy[random];

    // saxon takes damages
    oneSaxon.receiveDamage(oneViking.strength);

    this.saxonArmy.forEach(function(person) {
      console.log("fooo");
      if (person.health < 1) {
        console.log("saxon is dead");
        // var deadSaxon = this.saxonArmy.indexOf(person);
        // this.saxonArmy.splice(deadSaxon, 1);
      }
    });
  }
  saxonAttack() {}
  showStatus() {}
}
