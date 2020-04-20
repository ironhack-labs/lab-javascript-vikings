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
    this.health = this.health - damage;
    // this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  battleCry() {
    return "Odin Owns You All!";
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
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
    // -------> THIS IS A VERY BORING WAR, NO ONE ATTACKS NO ONE
    Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; //math.random --> random number between 0-1 * saxonArmy.length because my purpose is transform this number between 0-1 into 0-array.length-1, math.floor to round it to the smallest
    Viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ]; //

    this.saxonArmy.filter(function (Saxon) {
      if (Saxon.health > 0) {
        return Saxon;
      }
    });
    return Saxon.receiveDamage(Viking.strength);
  }

  saxonAttack() {
    // -------> THIS IS A VERY BORING WAR, NO ONE ATTACKS NO ONE
    Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; //math.random --> random number between 0-1 * saxonArmy.length because my purpose is transform this number between 0-1 into 0-array.length-1, math.floor to round it to the smallest
    Viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    this.vikingArmy.filter(function (Viking) {
      if (Viking.health > 0) {
        return Viking;
      }
    });
    return Viking.receiveDamage(Saxon.strength);
  }

  showStatus() {}
}
