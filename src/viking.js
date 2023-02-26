// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(num) {
    if (this.health - num <= 0) {
      console.log("This soldier died!");
      this.health = 0;
    } else {
      this.health -= num;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(num) {
    if (this.health - num <= 0) {
      this.health = 0;
      return `${this.name} has died in act of combat`;
    } else {
      this.health -= num;
      return `${this.name} has received ${num} points of damage`;
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

  receiveDamage(num) {
    if (this.health - num <= 0) {
      // this.health = 0;

      // Originally I had this line to prevent a negative health value
      // but the tests didn’t like it.
      // You’ll find the same pattern at Viking but the test didn’t
      // compare the outcome of the value so strictly.
      // TBH, I rather would like to have a value of 0 intead of negative
      // if a soldier dies. Therefore I’ll leave it as it is at Viking.

      this.health -= num;
      return `A Saxon has died in combat`;
    } else {
      this.health -= num;
      return `A Saxon has received ${num} points of damage`;
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

  attack(attackingArmy, defendingArmy) {
    const attackingIndex = Math.floor(Math.random() * attackingArmy.length);
    const defendingIndex = Math.floor(Math.random() * defendingArmy.length);
    const attacker = attackingArmy[attackingIndex];
    const defender = defendingArmy[defendingIndex];

    const result = defender.receiveDamage(attacker.attack());
    if (defender.health <= 0) {
      defendingArmy.splice(defendingIndex, 1);
    }

    return result;
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
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
}
