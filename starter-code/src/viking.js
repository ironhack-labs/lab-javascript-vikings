class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health = this.health - damage;
  }
}

class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
      }
  }
  battleCry () {
    return "Odin Owns You All!";
  }
}

class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength);
  }
  receiveDamage (damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking (Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon (Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack () {
    let iSax = randomS(this.saxonArmy);
    let rVik = this.vikingArmy[randomS(this.vikingArmy)];
    let rSax = this.saxonArmy[iSax];
    let damage = rSax.receiveDamage(rVik.strength);
    if (rSax.health <= 0) {
      this.saxonArmy.splice(iSax, 1);
    }
    return damage;
  }

  saxonAttack () {
    let iVik = randomS(this.vikingArmy);
    let rVik = this.vikingArmy[iVik];
    let rSax = this.saxonArmy[randomS(this.saxonArmy)];
    let damage = rVik.receiveDamage(rSax.strength);
    if (rVik.health <= 0) {
      this.vikingArmy.splice(iVik, 1);
    }
    return damage;
  }

  showStatus () {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return ("Vikings and Saxons are still in the thick of battle.");
    } else if (this.saxonArmy.length === 0) {
      return ("Vikings have won the war of the century!");
    } else {
      return ("Saxons have fought for their lives and survive another day...");
    }
  }  
}

function randomS (arr) {
  return (Math.floor(Math.random () * arr.length));  
}
