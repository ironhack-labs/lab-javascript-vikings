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
    super.receiveDamage(damage);
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
        // let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        // let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        // let saxon = this.saxonArmy[indexSaxon];
        // let viking =  this.vikingArmy[indexViking];
        // if (saxon.health - viking.strength <= 0) this.saxonArmy.splice(indexSaxon, 1);
        // return saxon.receiveDamage(viking.strength);
        return this.refactorAttack("viking");
    }

    saxonAttack() {
        // let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        // let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        // let saxon = this.saxonArmy[indexSaxon];
        // let viking =  this.vikingArmy[indexViking];
        // if (viking.health - saxon.strength <= 0) this.vikingArmy.splice(indexViking, 1);
        // return viking.receiveDamage(saxon.strength);
        return this.refactorAttack("saxon");
    }

    refactorAttack(attacker) {
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let saxon = this.saxonArmy[indexSaxon];
        let viking =  this.vikingArmy[indexViking];

        if (attacker === "viking") {
            if (saxon.health - viking.strength <= 0) this.saxonArmy.splice(indexSaxon, 1);
            return saxon.receiveDamage(viking.strength);
        } else {
            if (viking.health - saxon.strength <= 0) this.vikingArmy.splice(indexViking, 1);
            return viking.receiveDamage(saxon.strength);
        }
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
};

