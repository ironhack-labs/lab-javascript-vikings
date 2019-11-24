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
    this.health -= damage;

    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
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

    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : "A Saxon has died in combat";
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
    let random_saxon = Math.floor(Math.random() * this.saxonArmy.length);
    let random_viking = Math.floor(Math.random() * this.vikingArmy.length);

    let msg = this.saxonArmy[random_saxon].receiveDamage(
      this.vikingArmy[random_viking].attack()
    );

    if (this.saxonArmy[random_saxon].health <= 0) {
      this.saxonArmy.splice(random_saxon);
    }

    return msg;
  }

  saxonAttack() {
    let random_saxon = Math.floor(Math.random() * this.saxonArmy.length);
    let random_viking = Math.floor(Math.random() * this.vikingArmy.length);

    let msg = this.vikingArmy[random_viking].receiveDamage(
      this.saxonArmy[random_saxon].attack()
    );

    if (this.vikingArmy[random_viking].health <= 0)
      this.vikingArmy.splice(random_viking);

    return msg;
  }

  // SUPER BONUS

  /*
  // Generic function to implement the attck between armies.
  soldierAttack(soldier) {
    if (soldier instanceof Viking) {
      return combat(this.vikingArmy, this.saxonArmy);
    } else {
      return combat(this.saxonArmy, this.vikingArmy);
    }

    function combat(attacking_army, defenfing_army) {
      let random_soldier_attack = Math.floor(
        Math.random() * attacking_army.length
      );
      let random_soldier_defend = Matdefenfing_armyh.floor(
        Math.random() * defenfing_army.length
      );

      let result_msg = defenfing_army[random_soldier_defend].receiveDamage(
        attacking_army[random_soldier_attack].attack()
      );

      if (defenfing_army[random_soldier_defend].health <= 0) {
        defenfing_army.splice(random_soldier_defend);
      }

      return result_msg;
    }
  }
  */

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
