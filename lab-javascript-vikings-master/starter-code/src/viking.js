// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health;
        this.strength = strength
    }


    // methods attack and receiveDamage
    attack = () => this.strength

    receiveDamage = (damage) => { this.health = this.health - damage }
}


// Viking extension from soldier
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }


    //Viking receiving damage

    receiveDamage = damage => {

        this.health = this.health - damage;

        if (this.health - damage > 0) {

            return `${this.name} has received ${damage} points of damage`

        } else {

            return `${this.name} has died in act of combat`

        }
    }

    //THE VIKING BATTLECRY!
    battleCry = () => "Odin Owns You All!"



}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    //the saxon receives damage
    receiveDamage = damage => {

        this.health = this.health - damage;

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

    //pushing the vikings and saxons to the army. 
    addViking = (Viking) => { this.vikingArmy.push(Viking) }
    addSaxon = (Saxon) => { this.saxonArmy.push(Saxon) }


    vikingAttack = () => {

        //getting the random indexes of attacker and receiver
        let rdmAttacker = Math.floor(Math.random() * this.vikingArmy.length)
        let rdmReceiver = Math.floor(Math.random() * this.saxonArmy.length)

        //retreiving the objects from the army arrays
        let attacker = this.vikingArmy[rdmAttacker]
        let receiver = this.saxonArmy[rdmReceiver]

        //execute the receiveDamage on the receiver and saving the output on the result variable
        let result = receiver.receiveDamage(attacker.strength)

        //take out from the army the warrior if the health is less than 0
        if (receiver.health <= 0) {

            this.saxonArmy.splice(rdmReceiver, 1)
        }

        // return the result variable containing the output of receiveDamage
        return result


    }



    saxonAttack = () => {


        //getting the random indexes of attacker and receiver
        let rdmAttacker = Math.floor(Math.random() * this.saxonArmy.length)
        let rdmReceiver = Math.floor(Math.random() * this.vikingArmy.length)

        //retreiving the objects from the army arrays
        let attacker = this.saxonArmy[rdmAttacker]
        let receiver = this.vikingArmy[rdmReceiver]

        //execute the receiveDamage on the receiver and saving the output on the result variable
        let result = receiver.receiveDamage(attacker.strength)

        //take out from the army the warrior if the health is less than 0
        if (receiver.health <= 0) {
            this.vikingArmy.splice(rdmReceiver, 1)

        }

        // return the result variable containing the output of receiveDamage
        return result

    }

    //showin the status of the battle
    showStatus = () => {
        if (this.saxonArmy.length <= 0) {
            this.warContinues = false
            return "Vikings have won the war of the century!"

        } else if (this.vikingArmy.length <= 0) {
            this.warContinues = false
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}



//===========================THE WAR ================================//



let viking1 = new Viking("Odinio", 100, 20)

let viking2 = new Viking("Ottis", 90, 25)

let viking3 = new Viking("Vikur", 92, 17)

let viking4 = new Viking("Lennin", 105, 12)


let saxon1 = new Saxon(75, 15)

let saxon2 = new Saxon(80, 7)

let saxon3 = new Saxon(80, 8)

let saxon4 = new Saxon(65, 20)

let saxon5 = new Saxon(70, 12)

let newWar = new War()

//========== the saxon Army ======//

newWar.addSaxon(saxon1)

newWar.addSaxon(saxon2)

newWar.addSaxon(saxon3)

newWar.addSaxon(saxon4)

newWar.addSaxon(saxon5)


//===========the Viking Army =====//

newWar.addViking(viking1)

newWar.addViking(viking2)

newWar.addViking(viking3)

newWar.addViking(viking4)


//============== ACTION =========//

newWar.vikingAttack()
newWar.saxonAttack()

newWar.vikingAttack()
newWar.saxonAttack()


newWar.vikingAttack()
newWar.saxonAttack()


newWar.vikingAttack()
newWar.saxonAttack()

newWar.showStatus()