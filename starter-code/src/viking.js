// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    
    attack() {
        return this.strength 
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
        
    }
    
}


// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        super.receiveDamage(theDamage)
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
        
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier { 

    receiveDamage(theDamage) {
        super.receiveDamage(theDamage)
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return 'A Saxon has died in combat'
        } 
    }

}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    selectNumberRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)

    } 
    
    selectRandom(array) {
        
        let posicionArray = this.selectNumberRandom(0, array.length - 1) 
        return array[posicionArray]
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let vikingPlayer = this.selectRandom(this.vikingArmy)
        let saxonPlayer = this.selectRandom(this.saxonArmy)

        let battleResult = saxonPlayer.receiveDamage(vikingPlayer.attack())

        for (let i = 0; i < this.saxonArmy.length; i++ ) {
            let saxon = this.saxonArmy[i]

            if (saxon.health <= 0 ) {
                this.saxonArmy.splice(i,1);
            }

        }
        
        return battleResult
    }


    saxonAttack() {

        let vikingPlayer = this.selectRandom(this.vikingArmy)
        let saxonPlayer = this.selectRandom(this.saxonArmy)

        let battleResult = vikingPlayer.receiveDamage(saxonPlayer.attack())

        for (let i = 0; i < this.vikingArmy.length; i++) {
            let viking = this.vikingArmy[i]

            if(viking.health <= 0) {
                this.vikingArmy.splice(i,1)
            }
        }

        return battleResult

    }

    showStatus() {

    }

 }




