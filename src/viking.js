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

  //Viking has access to all of "Soldier"'s methods, including "attack()" via "extends"

  //Damage
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health >= 1) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  //BattleCry RAAAAAAA!
  battleCry() {
    return "Odin Owns You All!";
  }
}

//Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health >= 1) {
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
    let rViking = Math.floor(Math.random() * this.vikingArmy.length);
    let rSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let attack = this.vikingArmy[rViking].strength;
    this.saxonArmy[rSaxon].receiveDamage(attack);
    if (this.saxonArmy[rSaxon].health <= 0) {
      this.saxonArmy.splice(rSaxon, 1);
      return "A Saxon has died in combat";
    }
    // if (this.vikingArmy[rViking].health >= 1) {
    //   return ``;
    // }

    // let damage = rViking.strength;
    // let rSaxon = this.random(saxonArmy);
    // rSaxon.receiveDamage(damage);

    // let oldHealth = rSaxon.health;
    // rSaxon.health = oldHealth -= rViking.strength;
  }

  saxonAttack() {
    let rViking = Math.floor(Math.random() * this.vikingArmy.length);
    let rSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let attack = this.saxonArmy[rSaxon].strength;
    this.vikingArmy[rViking].receiveDamage(attack);
    if (this.vikingArmy[rViking].health <= 0) {
      this.vikingArmy.splice(rViking, 1);
    } else {
      return `${this.vikingArmy[rViking].name} has received ${this.saxonArmy[rSaxon].strength} points of damage`;
    }
  }

  //Trying to put the random function outside of the method and then calling it inside didn't work at all :)

  // random(arr) {
  //   return arr[Math.floor(Math.random() * arr.length)];
  // }

  showStatus() {
    if (this.saxonArmy.length < 1) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
