// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
      }
        attack() {
         return this.strength
      }
        receiveDamage(damage) {
         this.health -= damage;
      }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
        return `${this.name} has died in act of combat`
        }
      }
      batleCry(){
        return "Odin Owns You All!";
      }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
        return `A Saxon has died in combat`
        }
      }
      batleCry(){
        return "Odin Owns You All!";
      }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }


  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    
    let saxonAttaked = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength)
    if (this.saxonArmy[saxonIndex].health <= 0)  this.saxonArmy.pop(saxonIndex); 
      return saxonAttaked
     }


  saxonAttack() {
      let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
      let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

      let vikingAttack = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength)
      if (this.vikingArmy[vikingIndex].health <= 0)  this.vikingArmy.pop(vikingIndex); 
        return vikingAttack
       }
  
       saxonAttack(){};

}
