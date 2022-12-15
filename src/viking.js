// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(name, health, strength)
        this.name = name
        this.health = health
        this.strength = strength
      }

      receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
      }

      battleCry(){
        return 'Odin Owns You All!'
      }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
      }

      receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
      }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let attackResult = randSaxon.receiveDamage(randViking.strength)
        if(randSaxon.health < 1){
            this.saxonArmy.splice(randViking)
        }
        return attackResult
    } 
    saxonAttack(){
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let attackResult = randViking.receiveDamage(randSaxon.strength)
        if(randViking.health < 1){
            this.vikingArmy.splice(randSaxon)
        }
        return attackResult
    }
    
    showStatus(){
        if(this.saxonArmy.length === 0)  
            {
                return "Vikings have won the war of the century!"
            } else if(this.vikingArmy.length === 0){
                return "Saxons have fought for their lives and survived another day..."
            } else {
                return "Vikings and Saxons are still in the thick of battle."
            }

    
        
    }
}
