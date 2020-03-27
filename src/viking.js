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
    this.health -= damage;
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
    //     if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
    // if the Viking dies, it should return "NAME has died in act of combat"

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  //   constructor(health, strength) {
  //     super(health, strength);
  //   }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }

    return `A Saxon has died in combat`;
  }
}

// War
class War{
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addFighter(soldierType) {

    switch (soldierType) {
      case viking:
        this.vikingArmy.push(viking);
        break;
      default:
        this.saxonArmy.push(saxon);
        break;
    }
  }
  // vikingAttack()
  // saxonAttack()
  // showStatus()

}