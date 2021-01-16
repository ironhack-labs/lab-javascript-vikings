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
class Viking extends Soldier{
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
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
        return 'Odin Owns You All!'
    }
}

// Saxon
/*
class Saxon extends Soldier {
    this.health = - theDamage

    if (this.health <= 0) {
        return 'A Saxon has died in combat'
    } else {
        return `A Saxon has received ${theDamage} points of damage`
    }
}
*/

class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`
      }
    }
  }

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking) {
      this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
      this.saxonArmy.push(saxon)
    }
    vikingAttack() {
      let pickedSaxon = Math.floor(Math.random() * this.saxonArmy.length)
      let pickedViking = Math.floor(Math.random() * this.vikingArmy.length)
  
      this.saxonArmy[pickedSaxon].receiveDamage(
        this.vikingArmy[pickedViking].strength
      );
      if (this.saxonArmy[pickedSaxon].health <= 0) {
        this.saxonArmy.pop();
        return "A Saxon has died in combat";
      } else {
        return `A Saxon has received ${this.vikingArmy[pickedVikingn].strength} points of damage`
      }
    }
    saxonAttack() {
      let pickedSaxon = Math.floor(Math.random() * this.saxonArmy.length)
      let pickedViking = Math.floor(Math.random() * this.vikingArmy.length)
  
      this.vikingArmy[pickedViking].receiveDamage(
        this.saxonArmy[pickedSaxon].strength
      );
  
      if (this.vikingArmy[pickedViking].health <= 0) {
        this.vikingArmy.pop()
        return "A Viking has died in combat"
      } else {
        return `${this.vikingArmy[pickedSaxon].name} has received ${this.saxonArmy[pickedSaxon].strength} points of damage`
      }
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!"
        }
    
        if (this.vikingArmy.length === 0) { 
          return "Saxons have fought for their lives and survived another day..."
        } else {
          return "Vikings and Saxons are still in the thick of battle."
        }
    }
  }
