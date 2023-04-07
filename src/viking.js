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
    super(health, strength)
        this.name = name;      
    }
    receiveDamage(theDamage) {
     this.health -= theDamage;
     if (this.health > 0 ) {
        return `${this.name} has received ${theDamage} points of damage`;
     } else {
        return `${this.name} has died in act of combat`
     }
    }
    battleCry() {
    return "Odin Owns You All!";
    } 
} 
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
//This line of code is used to modify the health property of the Saxon object based on the damage received, and is a common pattern in combat or game-related scenarios where objects need to have their properties updated dynamically during runtime.     
        this.health -= damage;
        if (this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`;
         } else {
            return  "A Saxon has died in combat"
         } 
    }
}
//BONUS - Iteration 4: War

class War {
    constructor() {
      // Step 1: Initialize vikingArmy and saxonArmy as empty arrays
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    // Step 2: Add viking soldier to vikingArmy array
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
  
    // Step 3: Add saxon soldier to saxonArmy array
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
  
    // Step 4: Get a random index from an array
    getRandomIndex(arrayLength) {
      return Math.floor(Math.random() * arrayLength);
    }
  
    // Step 5: Perform an attack between an attacker and a defender
    performAttack(attacker, defender) {
        const randomAttackerIndex = this.getRandomIndex(attacker.length);
        const randomDefenderIndex = this.getRandomIndex(defender.length);
        const attackerSoldier = attacker[randomAttackerIndex];
        const defenderSoldier = defender[randomDefenderIndex];
      
        // Step 5.3: Call receiveDamage() on defender soldier with the strength of the attacker soldier
        const result = defenderSoldier.receiveDamage(attackerSoldier.strength);
        
        // Step 5.4: If defender soldier's health is <= 0, remove it from the defender array
        if (defenderSoldier.health <= 0) {
          defender.splice(randomDefenderIndex, 1);
        }
      
        // Additional Step 1: Call receiveDamage() on Saxon soldier with the strength of Viking soldier
        const saxonResult = attackerSoldier.receiveDamage(defenderSoldier.strength);
        
        // Additional Step 2: If Viking soldier's health is <= 0, remove it from the attacker array
        if (attackerSoldier.health <= 0) {
          attacker.splice(randomAttackerIndex, 1);
        }
      
        // Additional Step 3: If Saxon soldier's health is <= 0, remove it from the defender array
        if (defenderSoldier.health <= 0) {
          defender.splice(randomDefenderIndex, 1);
        }
      
        // Additional Step 4: Return the result of the receiveDamage() method call
        return saxonResult;
      }
      
    // Step 6: Call performAttack() with attacker and defender swapped
    attack(attacker, defender) {
      return this.performAttack(defender, attacker);
    }
  
    // Step 7: Call attack() with vikingArmy as attacker and saxonArmy as defender
    vikingAttack() {
      return this.attack(this.vikingArmy, this.saxonArmy);
    }
  
    // Step 8: Call attack() with saxonArmy as attacker and vikingArmy as defender
    saxonAttack() {
      return this.attack(this.saxonArmy, this.vikingArmy);
    }
  
    // Step 9: Check the lengths of saxonArmy and vikingArmy arrays to determine war status
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

  //i had two error in jasmin which was :
  // 1.should remove dead vikings from the army
  // 2.should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
  // please give me a feedback
  