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
          
   /*
   
The Soldier class is defined with a constructor that takes two arguments: health and strength. It initializes the health and strength properties of the soldier instance.
The attack method is added to the Soldier class, which takes no arguments and returns the strength property of the soldier.
The receiveDamage method is added to the Soldier class, which takes one argument (damage). It subtracts the damage value from the health property of the soldier.
   */   

  

// Viking

    class Viking extends Soldier {
        constructor(name, health, strength) {
          super(health, strength);
          this.name = name;
        }
      
        attack() {
          return this.strength;
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
      
        attack() {
          return this.strength;
        }
      
        receiveDamage(damage) {
          this.health -= damage;
      
          if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
          } else {
            return "A Saxon has died in combat";
          }
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
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  
      const saxon = this.saxonArmy[saxonIndex];
      const viking = this.vikingArmy[vikingIndex];
  
      const result = saxon.receiveDamage(viking.strength);
  
      if (saxon.health <= 0) {
        this.saxonArmy.splice(saxonIndex, 1);
      }
  
      return result;
    }
  
    saxonAttack() {
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
      const viking = this.vikingArmy[vikingIndex];
      const saxon = this.saxonArmy[saxonIndex];
  
      const result = viking.receiveDamage(saxon.strength);
  
      if (viking.health <= 0) {
        this.vikingArmy.splice(vikingIndex, 1);
      }
  
      return result;
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
  