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
    } return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } return `A Saxon has died in combat`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  
  vikingAttack() {
    let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const attacked = randSaxon.receiveDamage(randViking.strength); 

    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i, 1);
      }
    }
    return attacked;    
  }
  
  saxonAttack() {
    let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const attacked = randViking.receiveDamage(randSaxon.strength); 

    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health <= 0) {
        this.vikingArmy.splice(i, 1);
      }
    }
    return attacked;    
  }
  
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


let viking1 = new Viking("fuckit", 100, 20);
let viking2 = new Viking("joder", 110, 30);

let saxon1 = new Saxon(120, 40);
let saxon2 = new Saxon(125, 55);

let batalla = new War();

batalla.addViking(viking1);
batalla.addViking(viking2);
batalla.addSaxon(saxon1);
batalla.addSaxon(saxon2);

batalla.vikingAttack();