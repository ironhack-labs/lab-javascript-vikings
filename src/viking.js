// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack = () => this.strength
     

    receiveDamage = ( damage) => {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor( name , health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage = ( damage ) => {
        this.health -= damage
        //super.receiveDamage( damage )
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry = () => "Odin Owns You All!"
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
    
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking =( viking ) => {
        this.vikingArmy.push(viking)
    }
    addSaxon = ( saxon ) => {
        this.saxonArmy.push(saxon)
    }
    vikingAttack = () => {
       let randomSaxon = this.saxonArmy[ Math.floor(Math.random() * this.saxonArmy.length) ]
       let randomVik = this.vikingArmy[ Math.floor(Math.random() * this.vikingArmy.length) ]
       let result = randomSaxon.receiveDamage(randomVik.attack())
       if(randomSaxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon))
       }
       return result

    }
    saxonAttack = () => {
        let randomSaxon = this.saxonArmy[ Math.floor(Math.random() * this.saxonArmy.length) ]
        let randomVik = this.vikingArmy[ Math.floor(Math.random() * this.vikingArmy.length) ]
        let result = randomVik.receiveDamage(randomSaxon.attack())
        if(randomVik.health <= 0) {
         this.vikingArmy.splice(this.vikingArmy.indexOf(randomVik))
        }
        return result

    }
    showStatus = () => {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."

        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
