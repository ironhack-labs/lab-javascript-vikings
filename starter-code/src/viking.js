
// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg ;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageArg) {
    this.health -= damageArg;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = `Harald`;
  }
  receiveDamage(damageArg) {
    this.health -= damageArg;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damageArg} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}
// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.strength=strengthArg;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageArg) {
    this.health -= damageArg;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damageArg} points of damage`;
    }
  }
}

// War
// class War {
//   constructor()
//   addViking()
//   addSaxon()
//   vikingAttack()
//   saxonAttack()
//   showStatus()
// }
