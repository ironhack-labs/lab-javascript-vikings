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

  //super.attack() -> why don't we need to do this? but still line 20

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
      } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`
      }
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
      } else if (this.health <= 0) {
        return `A Saxon has died in combat`
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
    const randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const saxonBeingAttacked = this.saxonArmy[randomIndex];
    const vikingAttacking = this.vikingArmy[randomIndex];
    
    const fight = saxonBeingAttacked.receiveDamage(vikingAttacking.attack())

    this.saxonArmy.forEach((sax) => {
      if (sax.health <= 0) {
        this.saxonArmy.pop(sax)
      }
    })

    return fight;
  }
   

  saxonAttack() {
    const randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingBeingAttacked = this.vikingArmy[randomIndex];
    const saxonAttacking = this.saxonArmy[randomIndex];
    
    const fight = vikingBeingAttacked.receiveDamage(saxonAttacking.attack());

    this.vikingArmy.forEach((viki) => {
      if (viki.health <= 0) {
        this.vikingArmy.pop(viki)
      }
    })

    return fight;
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle.";
    else if (this.saxonArmy.length <= 0) return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length <= 0) return "Saxons have fought for their lives and survived another day..."
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
