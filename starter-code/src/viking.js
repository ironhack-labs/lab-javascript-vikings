// Soldier
class Soldier {

  constructor(health, strength) { //came from viking super 
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  };
  receiveDamage(damage) {
    this.health = this.health - damage;
  };
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health === 0) {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health != 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health === 0) {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  //Add warriors to battlefield
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
    //Attacks
    vikingAttack() {
      //Set Damage equal to strength
      let rand1 = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[rand1];

      let rand2 = Math.floor(Math.random() * this.vikingArmy.length)
      let randomViking = this.vikingArmy[rand2];

      randomSaxon.receiveDamage(randomViking.strength)
      if (this.saxonArmy[rand2].health <= 0) {
        this.saxonArmy.splice([rand2, 1])
      }
      return 'A Saxon has died in combat'
    }
  

  saxonAttack() {
      //Set Damage equal to strength
      let rand1 = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[rand1];

      let rand2 = Math.floor(Math.random() * this.vikingArmy.length)
      let randomViking = this.vikingArmy[rand2];

      randomViking.receiveDamage(randomSaxon.strength)
      if (this.vikingArmy[rand1].health <= 0) {
        this.vikingArmy.splice(rand1, 1)
      }
      return `${randomViking.name} has received ${this.saxonArmy[0].strength} points of damage`
    }

    showStatus() {
      
      console.log(this.vikingArmy.length)
      if(this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`
      } else if(this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survive another day...`
       
      }
      else {
        return `Vikings and Saxons are still in the thick of battle.`
      }
    }
   }