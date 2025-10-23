// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health,strength) {
    super(health,strength)
    this.name = name;
  }


  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    if (this.health <= 0) return `${this.name} has died in act of combat`
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}
// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    if (this.health <= 0) return `A Saxon has died in combat`
  }
}
// War

class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy  = [];
  }

  addViking(viking) { this.vikingArmy.push(viking); }

  addSaxon(saxon)   { this.saxonArmy.push(saxon); }

  _attack(attackerArmy, defenderArmy) {
    const aIndex = Math.floor(Math.random() * attackerArmy.length);
    const dIndex = Math.floor(Math.random() * defenderArmy.length);

    const attacker = attackerArmy[aIndex];
    const defender = defenderArmy[dIndex];

    const result = defender.receiveDamage(attacker.strength);

    if (defender.health <= 0) {
      defenderArmy.splice(dIndex, 1);
    }

    return result;
  }

  vikingAttack() {
    return this._attack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this._attack(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
  }
}