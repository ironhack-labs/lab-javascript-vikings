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
      return this.health > 0
        ? `${this.name} has received ${damage} points of damage`
        : `${this.name} has died in act of combat`;
    }
  
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage;
      return this.health > 0
        ? `A Saxon has received ${damage} points of damage`
        : `A Saxon has died in combat`;
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
      const viking = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = Math.floor(Math.random() * this.saxonArmy.length);
  
      const saxonDamage = this.saxonArmy[saxon].receiveDamage(
        this.vikingArmy[viking].attack()
      );
  
      if (this.saxonArmy[saxon].health <= 0) {
        this.saxonArmy.splice(saxon, 1);
      }
  
      return saxonDamage;
    }
  
    saxonAttack() {
      const viking = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = Math.floor(Math.random() * this.saxonArmy.length);
  
      const vikingDamage = this.vikingArmy[viking].receiveDamage(
        this.saxonArmy[saxon].attack()
      );
  
      if (this.vikingArmy[viking].health <= 0) {
        this.vikingArmy.splice(viking, 1);
      }
  
      return vikingDamage;
    }
  
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