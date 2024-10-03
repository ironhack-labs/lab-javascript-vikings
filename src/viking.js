// Soldier
class Soldier {
    constructor (health, strength) {
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
    constructor (name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    receiveDamage(damage) {
      this.health -= damage;
      
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      }
      else {
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
      this.health -= damage;
       if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      }
      else {
        return 'A Saxon has died in combat';
      }
    }
  }

// War
class War {
    constructor(){
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    
    addViking(vikingMan) {
      this.vikingArmy.push(vikingMan);
    }
    addSaxon(saxonMan) {
      this.saxonArmy.push(saxonMan);
    }
    vikingAttack(){
      let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      const damageResult = randomSaxon.receiveDamage(randomViking.attack());
      if (randomSaxon.health<=0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
      }
      return damageResult; 
    }
    saxonAttack() {
      let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      const damageResult = randomViking.receiveDamage(randomSaxon.attack());
      if (randomViking.health<=0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
      }
      return damageResult;
    }
    generalAttack(whoAttacks){
      this.whoAttacks = whoAttacks;
      let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      
      if (whoAttacks === "saxon") {
        const damageResult = randomViking.receiveDamage(randomSaxon.attack());
        if (randomViking.health<=0) {
          this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
         }
       return damageResult;
      }
      else if (whoAttacks === "viking") { 
        const damageResult = randomSaxon.receiveDamage(randomViking.attack());
         if (randomSaxon.health<=0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
         }
          return damageResult; 
      }
    }
    showStatus() {
      if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!';
      }
      else if (this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survived another day...';
      }
      else {
        return 'Vikings and Saxons are still in the thick of battle.'
      }
    }
    
  }
