// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
    this.attack = function() {
      return this.strength;
    };
    this.receiveDamage = function(damage) {
      this.health -= damage;
    };
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    super.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
      } else {
        return this.name + " has died in act of combat";
      }

    };
    this.battleCry = function(){
        return 'Odin Owns You All!'
    }
  }
}

// Saxon
class Saxon {}

// War
class War {}
