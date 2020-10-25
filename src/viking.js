// Soldier
class Soldier {
    
    constructor(soldierHealth, soldierStrength) { 
        this.health = soldierHealth
        this.strength =  soldierStrength

    }

    attack() {
        return this.strength 
    }

    receiveDamage(damage) {
        this.health -= damage 
    }
}


const rabino = new Soldier(4, 10)


// Viking

class Viking extends Soldier{
    constructor(name, soldierHealth, soldierStrength) {

        super(soldierHealth, soldierStrength)
        this.name = name

    }

    battleCry() {
        return "Odin Owns You All!"
    }

    live(alive) {
        if (alive > 0) {
            console.log(`${name} has received  points of damage`)
        }
    }
 }

const mauri = new Soldier('mauri', 6, 2)

//mauri.receiveDamage(1)

//console.log(`${name} 'has received' ${}`)


// Saxon
class Saxon extends Soldier { 
   constructor(soldierHealth, soldierStrength, name) {

    super(soldierHealth, soldierStrength)
        this.name = name

    }

}

const montse = new Soldier(8, 7, 'montse')


// War
class War {

    addViking() {
        
    }
    addSaxon() {

    }
    vikingAttack() {

    }
    saxonAttack() {

    }

    }

const wordsUnique = ['vikingArmy', 'saxonArmy']

