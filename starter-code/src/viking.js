// Soldier
class Soldier {
  constructor(soldierHealth, soldierStrength) {
    this.health = soldierHealth;
    this.strength = soldierStrength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {

    this.health = this.health - damage;
  }
};



// Viking
class Viking extends Soldier {
  constructor(vikingName, vikingHealth, vikingStrength) {
    super(vikingHealth, vikingStrength);
    this.name = vikingName;
    this.health = vikingHealth;
    this.strength = vikingStrength;
  };

  receiveDamage(damage) {

    this.health = this.health - damage;

    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";

    } else {
      return this.name + " has died in act of combat";
    }

  };

  battleCry() {

    return "Odin Owns You All!";

  };





}

// Saxon

class Saxon extends Soldier {
  constructor(saxonHealth, saxonStrength) {
    super(saxonHealth, saxonStrength);
    this.health = saxonHealth;
    this.strength = saxonStrength;
  };

  receiveDamage(damage) {

    this.health = this.health - damage;

    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";

    } else {
      return "A Saxon has died in combat";
    }

  };

  battleCry() {

    return "Odin Owns You All!";

  };





}



// War
function War() {}