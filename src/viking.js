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
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
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
  
  vikingAttack() {

    //keep in mind that if you introduce an object variable several times in an array, every array element isn't a copy of it, but they correspond at the same memory pointer

    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const unfortunateSaxon = this.saxonArmy[saxonIndex];
    const aggroViking = this.vikingArmy[vikingIndex];

    unfortunateSaxon.health -= aggroViking.strength;

    if (unfortunateSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
      return "A Saxon has died in combat";
    }

  }

  saxonAttack() {

    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const unfortunateViking = this.vikingArmy[vikingIndex];
    const aggroSaxon = this.saxonArmy[saxonIndex];

    unfortunateViking.health -= aggroSaxon.strength;

    if (unfortunateViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
      return "A Viking has died in combat";
    }

    return `${unfortunateViking.name} has received ${aggroSaxon.strength} points of damage`;

  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

}