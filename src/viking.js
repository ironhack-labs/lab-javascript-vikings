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
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    if (this.health <= 0) return `A Saxon has died in combat`;
  }
}

// War
class War {
  #genericAttack;

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

  #genericAttackFn() {
    const randomSax = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVik = Math.floor(Math.random() * this.vikingArmy.length);

    if (this.#genericAttack === true) {
      // `Saxon` `receiveDamage()`
      const temp = this.saxonArmy[randomSax].receiveDamage(
        this.vikingArmy[randomVik].strength
      );

      //remove dead saxons
      this.saxonArmy.forEach((ele, i) => {
        if (ele.health <= 0) this.saxonArmy.splice(i, 1);
      });

      return temp;
    }

    if (this.#genericAttack === false) {
      // `viking` `receiveDamage()`
      const temp = this.vikingArmy[randomSax].receiveDamage(
        this.saxonArmy[randomSax].strength
      );

      //remove dead viking
      this.vikingArmy.forEach((ele, i) => {
        if (ele.health <= 0) this.vikingArmy.splice(i, 1);
      });

      return temp;
    }
  }


  vikingAttack() {
    this.#genericAttack = true;
    return this.#genericAttackFn();
  }
  saxonAttack() {
    this.#genericAttack = false;
    return this.#genericAttackFn();
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
