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
    return 'Odin Owns You All!';
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

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
    return this.attack(this.vikingArmy, this.saxonArmy);
 
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
 
  }

  // generic attack: Todo
  attack(attackArmy, defendArmy) {
    const attackerIndex = Math.floor(Math.random() * attackArmy.length);
    const defenderIndex = Math.floor(Math.random() * defendArmy.length);

    const attackerSoldier = attackArmy[attackerIndex];
    const defenderSoldier = defendArmy[defenderIndex];

    const message = defenderSoldier.receiveDamage(attackerSoldier.strength);
    if (defenderSoldier.health < 1) {
      defendArmy.splice(defenderIndex, 1);
    }
    return message;
  }

  showStatus() {
    if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}

// now let's play the game 
const war = new War();


