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
    getHealth() {
      return this.health;
    }
    isDead() {
      return this.health <= 0;
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    receiveDamage(damage) {
      super.receiveDamage(damage);
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
      }
    }
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    receiveDamage(damage) {
      super.receiveDamage(damage);
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else if (this.health <= 0) {
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
    //We use the same code deleting saxons and vikings for the array, an option is to create a function to do that.
    checkForDeads(array) {
        array.forEach((e, i) => e.health <= 0 ? array.splice(i, 1) : null);
    }
    vikingAttack() {
        const result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        //Here we use the function we created to check the deads and delete them from the array.
        this.checkForDeads(this.saxonArmy);
        return result;
    }
    saxonAttack() {
        const result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        //Same as before, reusing methods will help us to make our code cleaner. 
        this.checkForDeads(this.vikingArmy);
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}