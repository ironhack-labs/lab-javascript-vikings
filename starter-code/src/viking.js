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
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } 
    return `${this.name} has received ${damage} points of damage`;  
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
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
   return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
 
  vikingAttack() {
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingAttackResult = randomSaxon.receiveDamage(randomViking.attack());

    // ** In this other case the consts just take the random position in the array of both armies. **

    // const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // let vikingAttackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return vikingAttackResult;
  }

   saxonAttack() {
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let saxonAttackResult = randomViking.receiveDamage(randomSaxon.attack());

    // ** In this other case the consts just take the random position in the array of both armies. **

    // const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // let vikingAttackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    
    return saxonAttackResult;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  } 
}