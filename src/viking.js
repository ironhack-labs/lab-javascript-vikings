// Soldier
class Soldier {
  constructor(health, strength) {
    // Assign the arguments to the health and strength properties
    this.health = health;
    this.strength = strength;
  }

  // Method to return the strength property
  attack() {
    return this.strength;
  }

  // Method to reduce the health property by the received damage
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Example usage:
const soldier = new Soldier(100, 50);
console.log(soldier.health); // Output: 100
console.log(soldier.strength); // Output: 50

console.log(soldier.attack()); // Output: 50
soldier.receiveDamage(30);
console.log(soldier.health); // Output: 70


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    // Call the parent class constructor with health and strength
    super(health, strength);
    // Assign the name property
    this.name = name;
  }

  // Re-implement the receiveDamage method
  receiveDamage(damage) {
    this.health -= damage; // Reduce health by damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  // Add the battleCry method
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Example usage:
const viking = new Viking("Ragnar", 150, 75);
console.log(viking.name); // Output: 'Ragnar'
console.log(viking.health); // Output: 150
console.log(viking.strength); // Output: 75

console.log(viking.attack());


// Saxon
class Saxon extends Soldier {
  // No need for a constructor; it inherits from Soldier

  // Re-implement the receiveDamage method
  receiveDamage(damage) {
    this.health -= damage; // Reduce health by damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// Example usage:
const saxon = new Saxon(60, 25);
console.log(saxon.health);     // Output: 60
console.log(saxon.strength);   // Output: 25

console.log(saxon.attack());   // Output: 25
console.log(saxon.receiveDamage(30)); // Output


// War
class War {
  constructor() {
    // Initialize the armies as empty arrays
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  // Method to add a Viking to the vikingArmy
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  // Method to add a Saxon to the saxonArmy
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // Method for Viking attack
  vikingAttack() {
    // Select a random Saxon and Viking
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // Saxon receives damage equal to the Viking's strength
    const result = randomSaxon.receiveDamage(randomViking.strength);

    // Remove the Saxon if they die
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  // Method for Saxon attack
  saxonAttack() {
    // Select a random Viking and Saxon
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[randomVikingIndex];

    // Viking receives damage equal to the Saxon's strength
    const result = randomViking.receiveDamage(randomSaxon.strength);

    // Remove the Viking if they die
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  // Method to show the current status of the war
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

// Example usage:
const war = new War();

// Add Vikings and Saxons
const viking1 = new Viking("Ragnar", 150, 50);
const viking2 = new Viking("Bjorn", 120, 40);
const saxon1 = new Saxon(100, 30);
const saxon2 = new Saxon(80, 25);

war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

console.log(war.vikingAttack()); // Example output: "A Saxon has received 50 points of damage"
console.log(war.saxonAttack()); // Example output: "Bjorn has received 30 points of damage"
console.log(war.showStatus());  // Output varies depending on the state of the armies

