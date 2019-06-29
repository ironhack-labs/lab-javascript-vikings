// Soldier
class Soldier {
    constructor (health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack () {
      return this.strength;
    }
    receiveDamage (damage) {
      this.health -= damage;
    }
   }
   
   // Viking
   class Viking extends Soldier {
    constructor (name, health, strength){
      super(health, strength);
      this.name = name;
    }
    receiveDamage (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
      } else {
        return `${this.name} has died in act of combat`
      }
    }
    battleCry () {
      return “Odin Owns You All!“;
    }
   }
   
   
   
   // Saxon
   class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength)
      this.health = health;
      this.strength = strength;
    }
   
    receiveDamage (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
      } else {
        return `A Saxon has died in combat`
      }
    }
   }
   
   // War
   class War {
    constructor () {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
   
    addViking (Viking) {
      this.vikingArmy.push(Viking);
    }
   
    addSaxon (Saxon) {
      this.saxonArmy.push(Saxon);
    }
   
    vikingAttack () {
      const randomSaxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
      const randomSaxon = this.saxonArmy[randomSaxonIdx];
      const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      const result = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health < 1) {
        this.saxonArmy.splice(randomSaxonIdx,1);
      }
      return result
      }
   
    saxonAttack () {
      const randomVikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
      const randomViking = this.vikingArmy[randomVikingIdx];
      const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const result = randomViking.receiveDamage(randomSaxon.strength);
      if (randomViking.health < 1) {
        this.vikingArmy.splice(randomVikingIdx,1);
      }
      return result
      }
   
    showStatus () {
      if(this.saxonArmy.length < 1) {
        return “Vikings have won the war of the century!”
      }
      if(this.vikingArmy.length < 1) {
        return “Saxons have fought for their lives and survive another day...“;
      }
      if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
        return “Vikings and Saxons are still in the thick of battle.“;
      }
    }
  }
   