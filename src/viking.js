// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }

    attack() { //Method attack
      return this.strength;
    }
  
    receiveDamage(damage) { //Method receiveDamage 
      this.health -= damage;
    }
}

// Viking 
/* mynotes = Viking is a child class of Soldier, therefore inherits its properties and methods. 
To modify a subclass/ child (by adding a property or method), it needs to call the 
parent constructor function explicitly using the super() method.*/
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); 
        this.name = name;
    }
    attack() {
        console.log(`${this.strength}`);
    }
    receiveDamage(damage) {
      super.receiveDamage(damage);
      if(this.health > 0) {
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
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

  
// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = [];
  }
  
addViking(viking) {
  this.vikingArmy.push(viking);
}

addSaxon(saxon) {
  this.saxonArmy.push(saxon);
} 

vikingAttack() {
//A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random).

 let saxon = this.getRandomSaxon();
 let viking = this.getRandomViking();
 let vikingStrikesAgain = saxon.receiveDamage(viking.strength);
 
  //if(saxon.health <= 0) {}
}

saxonAttack()

showStatus()

}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
