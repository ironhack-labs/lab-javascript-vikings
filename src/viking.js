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
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(vikingName, health, strength,) {
        super()
        this.name = vikingName;
        this.health = health;
        this.strength = strength;
    }
    battleCry() {
        return "Odin Owns You All!"

    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return  `${this.name} has received ${damage} points of damage`
        } else{ return `${this.name} has died in act of combat` }
}
}

// Saxon
class Saxon extends Soldier{ 
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0) {
            return  `A Saxon has received ${damage} points of damage`
        } else{ return `A Saxon has died in combat` }

    }
}


// War
class War {constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
}
    
    addViking(Viking){
        this.vikingArmy.push(Viking)

        
    }
    addSaxon(Saxon){ 
        this.saxonArmy.push(Saxon)
        
    }
    vikingAttack(){

        const randomVikPosition = [(Math.floor(Math.random()))]
        const randomViking = this.vikingArmy[randomVikPosition]
        const randomSaxonPosition = [(Math.floor(Math.random()))]
        const randomSaxon = this.saxonArmy[randomSaxonPosition]
        randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonPosition,1)
            return "A Saxon has died in combat"
        }
        

    }
    saxonAttack(){
        const randomVikPosition = [(Math.floor(Math.random()))]
        const randomViking = this.vikingArmy[randomVikPosition]
        const randomSaxonPosition = [(Math.floor(Math.random()))]
        const randomSaxon = this.saxonArmy[randomSaxonPosition]
        randomViking.receiveDamage(randomSaxon.strength)

        console.log(randomSaxon.strength)
        
        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomVikPosition,1)
        } else {return `${randomViking.name} has received ${randomSaxon.strength} points of damage` 
        }

    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0 ) {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
   




 }
