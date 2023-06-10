// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
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
        super(health, strength)
        // this.health = health;
        this.name = name;
        // this.strength = strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
    // constructor(health, strength) {
       /* super(health, strength)
        this.health = health;
        this.strength = strength; */
  // }
    
    receiveDamage(damage) {
        this.health -= damage;
    

    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
}
}


// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking) {
      this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
   
    vikingAttack () {
        const randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonNum]
        

        const randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingNum]
        
        const result = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonNum, 1)
        }
        
        return result
    }
    
    saxonAttack () {
        const randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingNum]

        const randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonNum]

        const result = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingNum, 1)
        }

        return result
    }

    showStatus () {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


    
    
