// Soldier
class Soldier {

    constructor (health, strength) {
        this.health = health;
        this.strength = strength
    }

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier {

    constructor (name, health, strength) {

        super(health,strength);
        this.name = name
    }

    receiveDamage (damage) {

        this.health -= damage

        //this.health > 0 ? (`${this.name} has received ${damage} points of damage`) : (`${this.name} has died in act of combat`)
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        } 
        
    }

    battleCry () {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage (damage) {

        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// Bonus : War
class War {

    constructor () {

        this.vikingArmy =  [];
        this.saxonArmy =[];
    }

    addViking (viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack () {

        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        const attack = randomSaxon.receiveDamage(randomViking.strength)
        
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice([randomSaxon, 1])
        }

        return attack
    }

    saxonAttack () {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        const attack = randomViking.receiveDamage(randomSaxon.strength)
        
        if (randomViking.health <= 0) {
            this.vikingArmy.splice([randomViking, 1])
        }

        return attack
    }


    /*-----------SUPER BONUS: REFACTORING : saxonAttack & vikingAttack----------

    attackingTo (vikings, saxons) {

        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        switch (armyToAttack) {
            case 'vikings':
                const attack = randomViking.receiveDamage(randomSaxon.strength);
                if (randomSaxon.health <= 0) {
                this.saxonArmy.splice([randomSaxon, 1])
                }
                return attack
                break;
            case 'saxons':
                const attack = randomSaxon.receiveDamage(randomViking.strength);
                if (randomViking.health <= 0) {
                this.vikingArmy.splice([randomViking, 1])
                }
                return attack
        }

    }


    */

    showStatus () {
        
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }

    }
}
