// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    this.damage = damage;
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
    this.damage = damage;
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage;
    this.damage = damage;
    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`;
    }
    else {
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
    this.viking = viking;
    this.vikingArmy.push(viking);
  }
  
  addSaxon(saxon) {
    this.saxon = saxon;
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    if (this.saxon.health <= this.viking.strength) {
      this.saxonArmy.pop();
    }
    return this.saxon.receiveDamage(this.viking.strength);
  }

  saxonAttack() {
    if (this.viking.health <= this.saxon.strength) {
      this.vikingArmy.pop();
    }
    return this.viking.receiveDamage(this.saxon.strength)
  }

  armyAttack(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
    
    if (this.defender.health <= this.attacker.strength) {
      if (defender === 'saxon') {
        this.saxonArmy.pop();
      }
      else {
        this.vikingArmy.pop();
      }
    }
    return this.defender.receiveDamage(this.attacker.strength);
    }

  showStatus() {
    
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    }
    else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...'
    }
    else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }

}

