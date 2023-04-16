
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
    
    receiveDamage(damage) {
    this.health -= damage;
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
      
        addViking(viking) {
          this.vikingArmy.push(viking);
        }
      
        addSaxon(saxon) {
          this.saxonArmy.push(saxon);
        }
      
        getRandomSoldier(army) {
          const randomIndex = Math.floor(Math.random() * army.length);
          return army[randomIndex];
        }
      
        attack(attackerArmy, defenderArmy) {
          const attacker = this.getRandomSoldier(attackerArmy);
          const defender = this.getRandomSoldier(defenderArmy);
      
          const damage = attacker.attack();
          const result = defender.receiveDamage(damage);
      
          if (defender.health <= 0) {
            const index = defenderArmy.indexOf(defender);
            defenderArmy.splice(index, 1);
          }
      
          return result;
        }
      
        vikingAttack() {
          return this.attack(this.vikingArmy, this.saxonArmy);
        }
      
        saxonAttack() {
          return this.attack(this.saxonArmy, this.vikingArmy);
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
      