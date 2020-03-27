// Soldier
class Soldier {

    constructor(health, strength) {

        this.health = health
        this.strength = strength
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

    constructor(name, health, strength) {

        super(health, strength)
        
        this.name = name
    }

    receiveDamage(damage) {

        this.health -= damage

        if (this.health > 0 ) {
            
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

    receiveDamage(damage) {

        this.health -= damage

        if (this.health > 0) {

            return `A Saxon has received ${damage} points of damage`

        } else {

            return `A Saxon has died in combat`
        }

    }
}

// War
class War {

    constructor() {

        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {

        this.vikingArmy.push(viking)
    }


    addSaxon(saxon) {

        this.saxonArmy.push(saxon)
    }

    vikingAttack() {

        if (this.saxonArmy.length === 0) {
            console.log("There's no army to attack")

        } else {
            
            // No sabemos si esto funcionara al estar haciendo una copia (???)
            // randSaxon.receiveDamage(5)
            
            let randomIndex = Math.floor(Math.random() * (this.saxonArmy.length - 1))
            let randSaxon = this.saxonArmy[randomIndex]
            let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]

            

            if (this.saxonArmy[randomIndex].health <= randomViking.strength) {
                
                this.saxonArmy.splice(randomIndex, 1)  
                // We execute this receiveDamage function to a copy for the return message
                return randSaxon.receiveDamage(randomViking.strength)

            } else {
                
                return this.saxonArmy[randomIndex].receiveDamage(randomViking.strength)
            }
        }
    }

    saxonAttack() {

        if (this.vikingArmy.length === 0) {
            console.log("There's no army to attack")

        } else {

            let randomIndex = Math.floor(Math.random() * (this.vikingArmy.length - 1))
            let randViking = this.vikingArmy[randomIndex]
            let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]



            if (this.vikingArmy[randomIndex].health <= randomSaxon.strength) {

                this.vikingArmy.splice(randomIndex, 1)
                // We execute this receiveDamage function to a copy for the return message
                return randViking.receiveDamage(randomSaxon.strength)

            } else {

                return this.vikingArmy[randomIndex].receiveDamage(randomSaxon.strength)
            }
        }
    }


    showStatus() {

        if (this.saxonArmy.length === 0) {
            
            return "Vikings have won the war of the century!"
        
        } else if (this.vikingArmy.length === 0) {
            
            return "Saxons have fought for their lives and survived another day..."
        
        } else {

            return "Vikings and Saxons are still in the thick of battle."
        }
    }


    // Super Bonus
    
    attack(side) {

        let army, attacker, defender, defenderIndex
        
        
        switch (side) {
            case "Vikings":
                army = this.vikingArmy
                attacker = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
                defenderIndex = Math.floor(Math.random() * (this.vikingArmy.length - 1))
                defender = this.saxonArmy[defenderIndex]
                break;
        
            case "Saxons":
                army = this.saxonArmy
                attacker = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]
                defenderIndex = Math.floor(Math.random() * (this.saxonArmy.length - 1))
                defender = this.vikingArmy[defenderIndex]
                break;
            
            default:
                return "No correct side chosen"
        }

        if (defender.health <= attacker.strength) {

            army.splice(defenderIndex, 1)
            // We execute this receiveDamage function to a copy for the return message
            return defender.receiveDamage(attacker.strength)

        } else {

            return defender.receiveDamage(attacker.strength)
        }
    }

}



const war = new War();


war.addSaxon( new Saxon(10, 5) )
war.addViking( new Viking("Ragnar", 10, 5 ) )

war.attack("Saxons")






