// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health || 300;
    this.strength = strength || 150;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}
//
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());

    let vikingAttack = this.vikingArmy[randomViking].attack();
    let saxonHealth = this.saxonArmy[randomSaxon].receiveDamage(vikingAttack);

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }

    return saxonHealth;
  }
  saxonAttack() {
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());

    let saxonAttack = this.saxonArmy[randomSaxon].attack();
    let vikingHealth = this.vikingArmy[randomViking].receiveDamage(saxonAttack);

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }

    return vikingHealth;
  }
  showStatus() {
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// this.vikingArmy[
//   Math.floor(this.vikingArmy.length * Math.random())
// ].receiveDamage(
//   this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
