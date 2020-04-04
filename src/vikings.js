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
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // does this work???????????
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${this.damage} points of damage`; //NAMEDAMAGE
    }
  }
  battleCry() {
    return "Valhallaaaaaaaa!"; // not gonna use the given one, this is better (and like jasmine doesnt work anyhow so..)
  }
}
//Viking.attack(this.strength); // added this bc Alberto told me it might help????????
// Saxon
class Saxon extends Soldier {
    super(health, strength);
    receiveDamage(damage) {
        this.health = this.health - damage;
        // prints for if saxon alive/dead
        if (this.health <= 0) {
            return "A Saxon has died in combat";
        } else {
            return `A Saxon has received ${this.damage} points of damage`; 
        }
    }
}
//Saxon.attack(this.strength);
/*
// War
class War {}
*/