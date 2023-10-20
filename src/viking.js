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
      super.receiveDamage(damage);
  
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
    battleCry() {
      return 'Odin Owns You All!';
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    receiveDamage(damage) {
      super.receiveDamage(damage);
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
    
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        
       
        const dmgReceived = randomSaxon.receiveDamage(randomViking.attack());
    

        if (randomSaxon.health < 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
        }
    
        return dmgReceived;
      }
    
      saxonAttack() {}
      showStatus() {}
    
        
      saxonAttack() {}
      showStatus() {}
  }
  
  const testWar = new War();
  const vikingOne = new Viking('Mati', 3, 7);
  const vikingTwo = new Viking('Arceus', 2, 5);
  const saxonOne = new Saxon(7, 6);
  const saxonTwo = new Saxon(5, 7);
  
  testWar.addViking(vikingOne);
  testWar.addViking(vikingTwo);
  testWar.addSaxon(saxonOne);
  testWar.addSaxon(saxonTwo);
  
  console.log(testWar.vikingArmy);
  console.log(testWar.saxonArmy);
  
  testWar.vikingAttack();
  