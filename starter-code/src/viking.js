// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  } 
    attack() {
      return this.strength
    }
    receiveDamage(damage) {
      
      this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {

    super(healthArg, strengthArg); 
    this.name = nameArg;
      
  }

  receiveDamage(damage) {
      
    this.health -= damage;

    if (this.health <= 0) {
      return (`${this.name} has died in act of combat`)
    } else {
      return (`${this.name} has received ${damage} points of damage`)
    }
  }
  battleCry() {
    return (`Odin Owns You All!`);
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg,strengthArg)
  }
  receiveDamage(damage) {
      
    this.health -= damage;

    if (this.health <= 0) {
      return (`A Saxon has died in combat`)
    } else {
      return (`A Saxon has received ${damage} points of damage`)
    }
  }
}

// War
class War {
  
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    
    
     randomSaxon.receiveDamage(randomViking.strength);

     if (randomSaxon.health <= 0) {
       this.saxonArmy.pop();
       return (`A Saxon has died in combat`);
     } 
     else {
      return (`A Saxon has received ${randomViking.strength} points of damage`)
    }
    }

    saxonAttack() {
      let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      
      
       randomViking.receiveDamage(randomSaxon.strength);
       if (randomViking.health <= 0) {
         this.vikingArmy.pop();
        return (`${randomViking.name} has died in act of combat`)
      } else {
        return (`${randomViking.name} has received ${randomSaxon.strength} points of damage`)
      }
       
      }

      showStatus() {
        if (this.saxonArmy.length === 0) {
          return (`Vikings have won the war of the century!`)
        } else if (this.vikingArmy.length === 0) {
          return (`Saxons have fought for their lives and survive another day...`)
        } else {
          return (`Vikings and Saxons are still in the thick of battle.`)
        }
      }
  

}
