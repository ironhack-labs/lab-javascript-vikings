// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health),
      (this.strength = strength),
      (this.attack = function attack() {
        return strength;
      }),
      (this.receiveDamage = function receiveDamage(damage) {
        this.health -= damage;
      });
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    (this.name = name),
      (this.receiveDamage = function receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return name + " has received " + damage + " points of damage";
        }
        if (this.health <= 0) {
          return name + " has died in act of combat";
        }
      }),
      (this.battleCry = function battleCry() {
        return "Odin Owns You All!";
      });
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.receiveDamage = function receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
      }
      if (this.health <= 0) {
        return "A Saxon has died in combat";
      }
    };
  }
}

// War
class War {}
