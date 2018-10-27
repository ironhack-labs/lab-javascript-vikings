// Soldier
class Soldier {
  constructor(hp, str) {
    this.health = hp;
    this.strength = str;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
  }
}
// Viking

class Viking extends Soldier {
  constructor(name, hp, str) {
    super(hp, str);
    this.name = name;
  }

  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`
    }
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(hp, str) {
    super(hp, str);
  }

  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`
    }
    return `A Saxon has died in combat`
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

  vikingAttack() {
    let attackedSaxon = Math.floor((Math.random() * this.saxonArmy.length));
    this.saxonArmy[attackedSaxon].receiveDamage(this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))].strength); 
    if (this.saxonArmy[attackedSaxon].health <= 0) {
      this.saxonArmy.splice(attackedSaxon, 1);
      return 'A Saxon has died in combat';
    }
  }

  saxonAttack() {
    let attackedViking = Math.floor((Math.random() * this.vikingArmy.length));
    let attackingSaxon = Math.floor((Math.random() * this.saxonArmy.length));
    let attackedVikingName = this.vikingArmy[attackedViking].name;
    this.vikingArmy[attackedViking].receiveDamage(this.saxonArmy[attackingSaxon].strength); 
    if (this.vikingArmy[attackedViking].health <= 0) {
      this.vikingArmy.splice(attackedViking, 1);
      return `${attackedVikingName} has died in act of combat`;
    }
    return `${attackedVikingName} has received ${this.saxonArmy[attackingSaxon].strength} points of damage`;
  }

  showStatus() {
    if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
