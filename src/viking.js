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
      if (this.health) {
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
      if (this.health) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in act of combat`;
      }
    }
  }
  
  // War
  class War {
    constructor(vikingArmy = [], saxonArmy = []) {
      this.vikingArmy = vikingArmy;
      this.saxonArmy = saxonArmy;
    }
    
    addViking(viking) {
      this.vikingArmy.push(viking); 
    }
  
    addSaxon(saxon) {
      this.saxonArmy.push(saxon); 
    }
  
    someAttack(attackArmy, receiveArmy) {
      const attacker = attackArmy[Math.floor(Math.random() * attackArmy.length)];
      const receiver = receiveArmy[Math.floor(Math.random() * receiveArmy.length)];
  
      const fight = receiver.receiveDamage(attacker.strength);
  
      if (receiver.health <= 0) {
        receiveArmy.splice(receiveArmy.indexOf(receiver), 1);
      }
  
      return fight;
    }
  
    vikingAttack() {
      return this.someAttack(this.vikingArmy, this.saxonArmy);
    }
  
    saxonAttack() {
      return this.someAttack(this.saxonArmy, this.vikingArmy);
    }
  
    showStatus() {
      if (this.saxonArmy.length == 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }
  