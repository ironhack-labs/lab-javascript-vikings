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

  receiveDamage(vikingDamage) {
    this.health -= vikingDamage;

    if (this.health > 0) {
      return `${this.name} has received ${vikingDamage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(saxonDamage) {
    this.health -= saxonDamage;

    if (this.health > 0) {
      return `A Saxon has received ${saxonDamage} points of damage`;
    } else if (this.health <= 0) {
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
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const saxonDamage = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );

    if(this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1);
    };
    return saxonDamage;
  }

  saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const vikingDamage = this.vikingArmy[randomViking].receiveDamage(
          this.saxonArmy[randomSaxon].attack()
        );

        if (this.vikingArmy[randomViking].health <= 0) {
          this.vikingArmy.splice(this.vikingArmy[randomViking], 1);
        }
        return vikingDamage;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle."
    };
  };
}
