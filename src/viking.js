// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    // Method to return the soldier's strength
    attack() {
        return this.strength;
    }

    // Method to receive damage and reduce the health
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
// Viking class extends Soldier
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); // Call the parent (Soldier) constructor
        this.name = name; // Add the name property
    }
  
    // Re-implement the receiveDamage() method specific to Viking
    receiveDamage(damage) {
        this.health -= damage;
  
        // Return different strings depending on whether the Viking is still alive
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
  
    // Method to return Viking's battle cry
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
// Saxon class extends Soldier
class Saxon extends Soldier {
    // Re-implement the receiveDamage() method specific to Saxon
    receiveDamage(damage) {
        this.health -= damage;
  
        // Return different strings depending on whether the Saxon is still alive
        if (this.health > 0) {
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
  
    // Adds a Viking to the vikingArmy
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
  
    // Adds a Saxon to the saxonArmy
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
  
    //// Viking attack method
    //vikingAttack() {
    //    if (this.saxonArmy.length === 0) {
    //        return "There are no Saxons left to attack!";
    //    }
      
    //    // Randomly select a Viking and a Saxon
    //    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      
    //    // Attack: Saxon receives damage from Viking's strength
    //    const result = randomSaxon.receiveDamage(randomViking.attack());
      
    //    // Remove dead Saxons from the army
    //    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
      
    //    return result;
    //}
  
    //// Saxon attack method
    //saxonAttack() {
    //    if (this.vikingArmy.length === 0) {
    //        return "There are no Vikings left to attack!";
    //    }
      
    //    // Randomly select a Saxon and a Viking
    //    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      
    //    // Attack: Viking receives damage from Saxon's strength
    //    const result = randomViking.receiveDamage(randomSaxon.attack());
      
    //    // Remove dead Vikings from the army
    //    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
      
    //    return result;
    //}
  
    // Generic attack method for both Viking and Saxon attacks
    attack(attackerArmy, defenderArmy, attackerName) {
        // If the defender army is empty, return a message saying no one is left to attack
        if (defenderArmy.length === 0) {
        return `There are no ${attackerName}s left to attack!`;
        }
    
        // Randomly select an attacker from the attackerArmy
        const randomAttacker = attackerArmy[Math.floor(Math.random() * attackerArmy.length)];
    
        // Randomly select a defender from the defenderArmy
        const randomDefender = defenderArmy[Math.floor(Math.random() * defenderArmy.length)];
    
        // Perform the attack, defender receives damage from the attacker's strength
        const result = randomDefender.receiveDamage(randomAttacker.attack());
    
        // Remove dead defenders from the army
        defenderArmy = defenderArmy.filter(defender => defender.health > 0);
    
        // Return the result of the attack
        return result;
    }

    // Viking attack method
    vikingAttack() {
        const result = this.attack(this.vikingArmy, this.saxonArmy, "Saxon");
    
        // After the attack, filter out dead Saxons from the Saxon army
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    
        return result;
    }

    // Saxon attack method
    saxonAttack() {
        const result = this.attack(this.saxonArmy, this.vikingArmy, "Viking");
    
        // After the attack, filter out dead Vikings from the Viking army
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    
        return result;
    }


    // Show the current status of the battle
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
