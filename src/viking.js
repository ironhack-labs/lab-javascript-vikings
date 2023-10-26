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
  
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
  
    receiveDamage(damage) {
      super.receiveDamage(damage);
      if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
      }
      return `${this.name} has received ${damage} points of damage`;
    }
  
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  class Saxon extends Soldier {
    receiveDamage(damage) {
      super.receiveDamage(damage);
      if (this.health <= 0) {
        return "A Saxon has died in combat";
      }
      return `A Saxon has received ${damage} points of damage`;
    }
  }
  
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
      if (this.saxonArmy.length === 0) {
        return "Saxons have already been defeated";
      }
  
      const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  
      const damage = randomViking.attack();
      const result = randomSaxon.receiveDamage(damage);
  
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
      }
  
      return result;
    }
  
    saxonAttack() {
      if (this.vikingArmy.length === 0) {
        return "Vikings have already been defeated";
      }
  
      const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  
      const damage = randomSaxon.attack();
      const result = randomViking.receiveDamage(damage);
  
      if (randomViking.health <= 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
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
  