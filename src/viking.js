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
    return "Odin Owns You All!";
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }


  genericAttack(attackingArmy, defendingArmy) {// Espero que te guste Cristian o Pool jejeje

    const randomAttacker = Math.floor(Math.random() * attackingArmy.length)
    const randomDefender = Math.floor(Math.random() * defendingArmy.length)
    const attacker = attackingArmy[randomAttacker];
    const defender = defendingArmy[randomDefender];
    const damage = attacker.strength
    const result = defender.receiveDamage(damage)

    if (defender.health <= 0) {
      defendingArmy.splice(randomDefender, 1)
    }

    return result
  }

  vikingAttack() {
    return this.genericAttack(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    return this.genericAttack(this.saxonArmy, this.vikingArmy)
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

