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
    this.health = this.health - damage;
    //this.health -= damage;
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
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
}

//should return "NAME has received DAMAGE points of damage", if the Viking is still alive
//should return "NAME has died in act of combat", if the Viking dies

// Saxon
class Saxon {}

// War
class War {}
