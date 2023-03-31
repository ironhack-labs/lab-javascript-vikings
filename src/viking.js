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
      this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;
        }
    }
  
    battleCry() {
      return "Odin Owns You All!"
    }
  }


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
}
 

  addViking(Viking) {
    this.vikingArmy.push(Viking) // * 10
  }
  
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon) // * 10
  }

  vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <=0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
    
  
  }

  saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <=0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return result;


    
  }
   // showStatus()
   showStatus() {
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
    
  }

}


//create vikings and saxons
// let viking1 = new Viking("viking1", 100, 10);
// let viking2 = new Viking("viking2", 200, 20);
// let saxon1 = new Saxon(10, 1);
// let saxon2 = new Saxon(20, 2);

// let war1 = new War();
// war1.addSaxon(saxon1);
// war1.addSaxon(saxon2);
// war1.addViking(viking1);
// war1.addViking(viking2);

// console.log(war1);