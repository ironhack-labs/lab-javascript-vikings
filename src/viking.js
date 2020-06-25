// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    };
  
    attack() {
      return this.strength;
    };
  
    receiveDamage(damage) {
      this.health = this.health - damage;
    };
  };
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    };
  
    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      };
    };
  
    battleCry() {
      return "Odin Owns You All!";
    };
  };
  
  // Saxon
  class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    };
  
    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      };
    };
  };
  
  // War
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    };
  
    addViking(viking) {
      this.vikingArmy.push(viking);
    };
  
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    };
  
    vikingAttack() {
      const randomVikingNumber = Math.random() * this.vikingArmy.length;
      const randomVikingIndex = parseInt(Math.floor(randomVikingNumber));
      const randomViking = this.vikingArmy[randomVikingIndex];
  
      const randomSaxonNumber = Math.random() * this.saxonArmy.length;
      const randomSaxonIndex = parseInt(Math.floor(randomSaxonNumber));
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
  
      const result = randomSaxon.receiveDamage(randomViking.strength);
  
      // Either bind this to the regular function...
      // this.saxonArmy.forEach(function(saxon, i) {
      //   if (saxon.health <= 0) {
      //     this.saxonArmy.splice(i, 1)
      //   }
      // }.bind(this))
  
      // ... or use arrow function
      this.saxonArmy.forEach((saxon, i) => {
        if (saxon.health <= 0) {
          this.saxonArmy.splice(i, 1);
        };
      });
  
      return result;
    };
  
    saxonAttack() {
      const randomVikingNumber = Math.random() * this.vikingArmy.length;
      const randomVikingIndex = parseInt(Math.floor(randomVikingNumber));
      const randomViking = this.vikingArmy[randomVikingIndex];
  
      const randomSaxonNumber = Math.random() * this.saxonArmy.length;
      const randomSaxonIndex = parseInt(Math.floor(randomSaxonNumber));
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
  
      const result = randomViking.receiveDamage(randomSaxon.strength);
  
      // Either bind this to the regular function...
      // this.saxonArmy.forEach(function(saxon, i) {
      //   if (saxon.health <= 0) {
      //     this.saxonArmy.splice(i, 1)
      //   }
      // }.bind(this))
  
      // ... or use arrow function
      this.vikingArmy.forEach((viking, i) => {
        if (viking.health <= 0) {
          this.vikingArmy.splice(i, 1);
        };
      });
  
      return result;
    };
  
    showStatus() {
      if (this.vikingArmy.length <= 0) {
        return 'Saxons have fought for their lives and survived another day...';
      } else if (this.saxonArmy.length <= 0) {
        return 'Vikings have won the war of the century!';
      } else {
        return 'Vikings and Saxons are still in the thick of battle.';
      };
    };
  
  };