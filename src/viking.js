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
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

let vikingo1 = new Viking("Lookie", 999, 499);
console.log(vikingo1);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

let saxon1 = new Saxon(499, 245);
console.log(saxon1);

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
    // me quede en que creo que aqui deberiamos crear un loop al inicio

    return this.timeToAttack(2);

    /*  let randomNum1 = Math.random() * this.saxonArmy.length;
        let randomSaxon = Math.floor(randomNum1);
 
        let randomNum2 = Math.random() * this.vikingArmy.length;
        let randomViking = Math.floor(randomNum2);

        
        let saxonStatus = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)

        if (this.saxonArmy[randomSaxon].health <=0 ){
            this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1)
        }   

        return saxonStatus
        */

    /* let randomNum1 = Math.random() * this.saxonArmy.length;
       let randomSaxon = Math.floor(randomNum1);

       let randomNum2 = Math.random() * this.vikingArmy.length;
       let randomViking = Math.floor(randomNum2);

       
       // return this.saxonArmy.length
    
     
      // this.saxonArmy[randomSaxon].health -= this.vikingArmy[randomViking].strength 
      
      return this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength) 
       



      /* if (this.saxonArmy[randomSaxon].health < 0) {
        delete this.saxonArmy[randomSaxon]
       }
       /* if(this.saxonArmy[randomSaxon].health > 0 ){
            return `A Saxon has received ${this.vikingArmy[randomViking].strength} points of damage`
        }*/
  }

  saxonAttack() {
    return this.timeToAttack(1);
    /*let randomNum1 = Math.random() * this.saxonArmy.length;
        let randomSaxon = Math.floor(randomNum1);
 
        let randomNum2 = Math.random() * this.vikingArmy.length;
        let randomViking = Math.floor(randomNum2);

        
        let vikingStatus = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

        if (this.vikingArmy[randomViking].health <=0 ){
            this.vikingArmy.splice(this.vikingArmy[randomViking], 1)
        }   

        return vikingStatus 
        */
  }

  showStatus() {
    let vikingsWonMessage = "Vikings have won the war of the century!";
    let saxonsWonMessage =
      "Saxons have fought for their lives and survived another day...";
    let warContinuesMessage =
      "Vikings and Saxons are still in the thick of battle.";

    if (this.vikingArmy.length > 0 && this.saxonArmy.length === 0) {
      return vikingsWonMessage;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return saxonsWonMessage;
    } else {
      return warContinuesMessage;
    }
  }

  timeToAttack(aaa) {
    let randomNum1 = Math.random() * this.saxonArmy.length;
    let randomSaxon = Math.floor(randomNum1);

    let randomNum2 = Math.random() * this.vikingArmy.length;
    let randomViking = Math.floor(randomNum2);

    if (aaa === 2) {
      let saxonStatus = this.saxonArmy[randomSaxon].receiveDamage(
        this.vikingArmy[randomViking].strength
      );

      if (this.saxonArmy[randomSaxon].health <= 0) {
        this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1);
      }

      return saxonStatus;
    }

    if (aaa === 1) {
      let vikingStatus = this.vikingArmy[randomViking].receiveDamage(
        this.saxonArmy[randomSaxon].strength
      );

      if (this.vikingArmy[randomViking].health <= 0) {
        this.vikingArmy.splice(this.vikingArmy[randomViking], 1);
      }

      return vikingStatus;
    }
  }
}

let guerra = new War();

guerra.addViking(vikingo1);
guerra.addSaxon(saxon1);

console.log(guerra.saxonArmy);
console.log(guerra.saxonArmy.length);
console.log(guerra.saxonAttack());
console.log(guerra.vikingAttack());
console.log(guerra.showStatus());

/*console.log(guerra.vikingAttack())
console.log(guerra.saxonArmy.length)
console.log(guerra.vikingAttack())
console.log(guerra.saxonArmy.length)

console.log(guerra.saxonArmy)
*/
