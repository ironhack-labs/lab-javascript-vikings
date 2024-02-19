// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry = () => {
    return "Odin Owns You All!";
  };

  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };

  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  };
}

// Saxon

class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  };
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking = (Viking) => {
    this.vikingArmy.push(Viking);
  };

  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  };

  vikingAttack = () => {
    if (this.saxonArmy.length === 0) {
      return "The Saxon army has been crushed!";
    } else {
      let randomSaxon =
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let randomViking =
        this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
      let hitResult = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0) {
        this.saxonArmy = this.saxonArmy.filter(
          (saxon) => saxon !== randomSaxon
        );
      }
      return hitResult;
    }
  };

  saxonAttack = () => {
    if (this.saxonArmy.length === 0) {
      return "The viking army has been defeated!";
    } else {
      let randomViking =
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      let randomSaxon =
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let hitResult = randomViking.receiveDamage(randomSaxon.strength);
      if (randomViking.health <= 0) {
        this.vikingArmy = this.vikingArmy.filter(
          (viking) => viking !== randomViking
        );
      }
      return hitResult;
    }
  };

  showStatus = () => {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
