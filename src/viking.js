// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength; }

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
      this.name = name;
      this.health = health;
      this.strength = strength; }
    
      receiveDamage(damage) {
        this.health -= damage;
        if (this.health >= 1 ) {
            return `${name} has received ${damage} points of damage`;
        } else {
            return `${name} has died in act of combat`;
        }
      }
      
      battleCry() {
        return "Odin Owns You All!";
      }
    }

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health >= 1 ) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return "A Saxon has died in combat";
      }
    }
}

// War
class War {}
