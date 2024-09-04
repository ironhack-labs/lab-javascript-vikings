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

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  // No tiene constructor porque hereda tal cual las propiedades de Soldier
  receiveDamage(damage) {
    this.health -= damage;

    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) { 
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack() {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy[randomIndexSaxon];
    let viking = this.vikingArmy[randomIndexViking];

    let damageSaxon = saxon.receiveDamage(viking.strength);

    if(saxon.health <= 0) {
      this.saxonArmy.splice(randomIndexSaxon, 1);
    } 

    return damageSaxon;
  }

  saxonAttack() {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy[randomIndexSaxon];
    let viking = this.vikingArmy[randomIndexViking];

    let damageViking = viking.receiveDamage(saxon.strength);

    if(viking.health <= 0) {
      this.vikingArmy.splice(randomIndexViking, 1);
    } 

    return damageViking;
  }

  showStatus() {
    if(this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if(this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

}
