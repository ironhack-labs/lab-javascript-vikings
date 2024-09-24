// Soldier
class Soldier {
    // Soldier class
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
  

  const soldier = new Soldier(100, 50);
  console.log(soldier.attack()); 
  soldier.receiveDamage(20);
  console.log(soldier.health); 
  


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


const viking = new Viking('Ragnar', 150, 60);
console.log(viking.attack()); 
console.log(viking.receiveDamage(40)); 
console.log(viking.receiveDamage(120)); 
console.log(viking.battleCry()); 


// Saxon

class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

e
const saxon = new Saxon(60, 25);
console.log(saxon.attack()); 
console.log(saxon.receiveDamage(20)); 
console.log(saxon.receiveDamage(50)); 


// War

  // War class
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
    
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];  
    const result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    }

    return result;
  }

  // Saxon attacks Viking
  saxonAttack() {
    
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    }

    return result;
  }

  // Show the status of the war
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


const war = new War();


const viking1 = new Viking('Bjorn', 100, 50);
const viking2 = new Viking('Lagertha', 120, 60);
const saxon1 = new Saxon(80, 30);
const saxon2 = new Saxon(90, 40);

war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

s
console.log(war.vikingAttack()); 
console.log(war.saxonAttack()); 


console.log(war.showStatus());
  
  