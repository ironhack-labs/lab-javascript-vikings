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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {}

  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    const viking1 = this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    const saxon1 = this.saxonArmy.push(saxon);
  }

  vikingAttack() { 
    let saxonAzar = pharseInt(Math.random() * this.saxonArmy.length)

    let vikingAzar = pharseInt(Math.random() * this.vikingArmy.length)

    console.log (vikingAzar)


    damage = saxonAzar.receiveDamage (vikingAzar.strength)

    if ( damage === `A Saxon has died in combat`) {
      
      
      this.saxonArmy.pop(saxonAzar);

    } 

    return saxonAzar.receiveDamage(vikingAzar.strength);


  }




}

