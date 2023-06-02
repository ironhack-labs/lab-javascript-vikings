// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300;
        this.strength = 150;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health -= damage;
        }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.health = 300;
    this.strength = 150;
    this.name = "Harald";
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (health > 0) {
        console.log(`${this.name} + " has received " + ${damageDone} + "points of damage"`)
    if (health <= 0) {
        console.log(`${this.name} + " has died in act of combat"`);
    }
    }
  }

  battleCry () {
    console.log("Odin Owns You All!");
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = 300;
    this.strength = 150;
  }
  receiveDamage(damage) {
   let damagDone = this.health -= damage;
    if (health > 0) {
      console.log(`"A saxon has received " + ${damageDone} + "points of damage"`
      );
      if (health <= 0) {
        console.log("A saxon has died in act of combat");
      }
    }
  }
}

// War
class War {}
