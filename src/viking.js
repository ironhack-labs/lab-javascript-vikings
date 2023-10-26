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
        //1. Select Viking and Saxon
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon =  this.saxonArmy[randomSaxonIndex];
        
        console.log(`The viking ${randomViking.name} attacks a Saxon. ${randomViking.name} screams: ${randomViking.battleCry().toUpperCase()}`);
       
    
      //2. Saxon receives attack from Viking
      
        const dmgReceived = randomSaxon.receiveDamage(randomViking.attack());
        
        console.log(`The saxon has ${randomSaxon.health}HP after the attack`);
    
        // 3. remove dead saxon
        if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
          console.log('The Saxon is dead...')
        }
        // 4. return result receiveDamage()+strength of viking
        return dmgReceived
      }
    
      saxonAttack() {
        //1. Select Viking and Saxon
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(
          Math.random() * this.vikingArmy.length
        );
    
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
    
        console.log(`A Saxon attacks ${randomViking.name}!`);
    
        //2. Saxon receives attack from Viking
    
        const dmgReceived = randomViking.receiveDamage(randomSaxon.attack());
    
        console.log(
          `The attack has caused ${randomSaxon.attack()} HP. ${
            randomViking.name
          } has ${randomViking.health} HP`
        );
    
        // 3. remove dead saxon
        if (randomViking.health <= 0) {
          console.log(`${randomViking.name} is dead...'`);
          this.vikingArmy.splice(randomVikingIndex, 1);
        }
        // 4. return result receiveDamage()+strength of viking
        return dmgReceived;
      }
     
      showStatus() {
        if(this.saxonArmy.length === 0){
            console.log("Vikings have won the war of the century!")
            return "Vikings have won the war of the century!"
        }
        if(this.vikingArmy.length === 0){
            console.log("Saxons have fought for their lives and survived another day...")
          return "Saxons have fought for their lives and survived another day..."
        }
        if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
          console.log("Vikings and Saxons are still in the thick of battle.")
            return "Vikings and Saxons are still in the thick of battle."
        }
      }
  }
  
  const testWar = new War();
  const vikingOne = new Viking('Mati', 7, 3);
  const vikingTwo = new Viking('Arceus', 5, 2);
  const vikingThree = new Viking('Freya', 5, 5);
  const saxonOne = new Saxon(6, 4);
  const saxonTwo = new Saxon(4, 5);
  const saxonThree = new Saxon(5, 3);
  
  testWar.addViking(vikingOne);
  testWar.addViking(vikingTwo);
  testWar.addSaxon(saxonOne);
  testWar.addSaxon(saxonTwo);
  
  console.log(testWar.vikingArmy);
  console.log(testWar.saxonArmy);
  
  // Turn 1
  testWar.vikingAttack();
  testWar.saxonAttack();
  testWar.showStatus();
  // Turn 2
  testWar.vikingAttack();
  testWar.saxonAttack();
  testWar.showStatus();
  // Turn 3
  testWar.vikingAttack();
  testWar.saxonAttack();
  testWar.showStatus();
  
  
  