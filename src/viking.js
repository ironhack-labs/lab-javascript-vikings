// Soldier
/*class
should receive 2 arguments (health & strength)
should receive the health property as its 1st argument
should receive the strength property as its 2nd argument */
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  printMessage() {
    console.log(this.helath);
  }
  /*attack() method
           should be a declared
            should receive 0 arguments
            should return the strength property of the Soldier */
  attack() {
    return this.strength;
  }
  /*receiveDamage() method
      should be a declared
      should receive 1 argument (the damage)
      should remove the received damage from the health property
      shouldn't return anything */
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
}

// Viking
/*Viking
should inherit from Soldier
class
should receive 3 arguments (name, health & strength)
should receive the name property as its 1st argument
should receive the health property as its 2nd argument
should receive the strength property as its 3rd argument */
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  /*battleCry() method
    should be a declared
     should receive 0 arguments
     should return "Odin Owns You All!" */
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
/*Saxon
should inherit from Soldier
class
should receive the health property as its 1st argument
should receive the strength property as its 2nd argument */
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);

    /*should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive
      should return "A Saxon has died in combat", if the Saxon dies */
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
/*War
class
should receive 0 arguments
should assign an empty array to the vikingArmy property
should assign an empty array to the saxonArmy property */
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  /*addViking() method
    should be a declared
    should receive 1 argument (a Viking object)
    should add the received Viking to the army
    shouldn't return anything */
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  /*addSaxon() method
      should be a declared
      should receive 1 argument (a Saxon object)
      should add the received Saxon to the army
      shouldn't return anything */
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  /*Armies Attack
     vikingAttack() method
     should be a declared
     should receive 0 arguments
     should make Saxon receiveDamage() equal to the strength of a Viking
     should remove dead saxons from the army
     should return result of calling receiveDamage() of a Saxon with the strength of a Viking */
  vikingAttack() {
    let damagedSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let attckingViking =
      this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    let result = damagedSaxon.receiveDamage(attckingViking.strength);

    if (damagedSaxon.health <= 0) {
      for (let index = 0; index < this.saxonArmy.length; index++) {
        if (this.saxonArmy[index].health <= 0) {
          this.saxonArmy.splice(index, 1);
        }
      }
    }
    return result;
  }

  /*saxonAttack() method
should be a declared
should receive 0 arguments
should make a Viking receiveDamage() equal to the strength of a Saxon
should remove dead vikings from the army
should return result of calling receiveDamage() of a Viking with the strength of a Saxon */
  saxonAttack() {
    let damagedViking =
      this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let attackingSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

    let result = damagedViking.receiveDamage(attackingSaxon.strength);

    if (damagedViking.health <= 0) {
      for (let index = 0; this.vikingArmy.length; index++) {
        if (this.vikingArmy[index].health <= 0) {
          this.vikingArmy.splice(index, 1);
        }
      }
    }
    return result;
  }

  /*showStatus() method
should be a declared
should receive 0 arguments
should return "Vikings have won the war of the century!", if the Saxons array is empty
should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons */
  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
