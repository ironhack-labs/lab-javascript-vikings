// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
}

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
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
class Saxon extends Soldier{

    receiveDamage(damage){
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
  
    vikingAttack() {
      if (this.saxonArmy.length === 0) {
        return "No Saxons left to attack!";
      }
  
      const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const result = randomSaxon.receiveDamage(randomViking.strength);
  
      if (randomSaxon.health <= 0) {
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
      }
  
      return result;
    }
  
    saxonAttack() {
      if (this.vikingArmy.length === 0) {
        return "No Vikings left to attack!";
      }
  
      const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      const result = randomViking.receiveDamage(randomSaxon.strength);
  
      if (randomViking.health <= 0) {
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
      }
  
      return result;
    }
  
    showStatus() {
      if (this.vikingArmy.length === 0) {
        return "Saxons have won the war!";
      } else if (this.saxonArmy.length === 0) {
        return "Vikings have won the war!";
      } else {
        return "Vikings and Saxons are still battling!";
      }
    }
  }
  
  