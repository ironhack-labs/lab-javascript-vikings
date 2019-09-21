// Soldier
class Soldier {
  constructor(healthArg, strenghtArg) {
    this.health = healthArg;
    this.strength = strenghtArg;
  }
    attack() {
      return this.strength;
    };
    receiveDamage(damage) {
      this.health -= damage;
    }
  }


// Viking
class Viking extends Soldier {
  constructor(name, healthArg, strenghtArg) {
    super(healthArg, strenghtArg);
    this.name = name;
  }

    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else if (this.health == 0) {
        return `${this.name} has died in act of combat`;
      }
    }

    battleCry() {
      return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strenghtArg) {
    super(healthArg, strenghtArg);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health == 0) {
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
    let oldHealth = saxon.health;
    saxon.health = oldHealth - viking.strenght;

    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health == 0) {
        this.saxonArmy[i].splice(i, i + 1);
      }
    }
    return Saxon.receiveDamage(viking.strenght);
  }

  saxonAttack() {
    let oldHealth = viking.health;
    viking.health = oldHealth - saxon.strenght;

    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health == 0) {
        this.vikingArmy[i].splice(i, i + 1);
      }
    }
  return Viking.receiveDamage(saxon.strenght);
  }

  showStatus() {
    if (saxonArmy === 0) {
      return `Vikings have won the war of the century!`;
    }  else if (vikingArmy === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else if (saxonArmy.lenght > 0 && vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle`;
    }
  }
}


