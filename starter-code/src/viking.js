// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
  
  
    }
    attack() {
      return this.strength;
    }
    receiveDamage(theDamage) {
       this.health -= theDamage
  
    }
  }



// Viking
class Viking extends Soldier {
    constructor(theName, theHealth, theStrength) {
      super(theHealth, theStrength);
      this.name = theName;
    }
    attack() {
      return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
          return `${this.name} has died in act of combat`;
        } else if (this.health >= 1) {
          return  `${this.name} has received ${damage} points of damage`
        }
      }
  
    battleCry() {
      return 'Odin Owns You All!'
    }
  
  
  }



// Saxon
class Saxon extends Soldier {
    constructor(hp, str) {
      super(hp, str);
  
    }
    attack() {
      return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
          return `A Saxon has died in combat`
        } else if (this.health >= 1) {
          return `A Saxon has received ${damage} points of damage`
        }
      }
    }
  

// War
class War {
    constructor() {
      this.vikingArmy = []
      this.saxonArmy = []
    }
  
    addViking(vikingToAdd) {
      this.vikingArmy.push(vikingToAdd)
    }
    addSaxon(saxonToAdd) {
        this.saxonArmy.push(saxonToAdd)
    
      }

    vikingAttack() {
    
    let randomViking = Math.floor((Math.random() * 
    this.vikingArmy.length));

    let saxon = Math.floor((Math.random() * 
    this.saxonArmy.length));

    this.saxonArmy[saxon].receiveDamage(this.vikingArmy
    [randomViking].strength);

    if (this.saxonArmy[saxon].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[saxon], 1);

      return "A Saxon has died in combat";
    }
  }

  saxonAttack() {

    let randomSaxon = Math.floor((Math.random() * 
    this.saxonArmy.length));

    let viking = Math.floor((Math.random() * 
    this.vikingArmy.length));

    this.vikingArmy[viking].receiveDamage(this.saxonArmy[randomSaxon].strength);

    if (this.vikingArmy[viking].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[viking], 1);
      return 'A Viking has died in combat'
    } else {
        return this.vikingArmy[viking].name + ' has received ' + this.saxonArmy[randomSaxon].strength + ' points of damage'
      }

  }
  showStatus() {
    if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
      return "Vikings and Saxons are still in the thick of battle."
    } else if (this.saxonArmy.length < 1){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length < 1){
      return "Saxons have fought for their lives and survive another day..."
    }
  }
}
