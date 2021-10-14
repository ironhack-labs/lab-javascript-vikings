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
        this.health = this.health - damage
            //console.log(this.health)
    }
}

const soldierUno = new Soldier(300, 32);
soldierUno.receiveDamage(50)
    //console.log(soldierUno)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
    }
    receiveDamage(damage) {
        this.health = this.health - damage
            //console.log('dddddddd', damage, this.health)
        if (this.health) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

//const vik = new Viking('Harald', 200, 150)
//console.log(vik.receiveDamage(50))


// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage
        console.log(this.health)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}


//const saxUno = new Saxon(50, 300)

//console.log(saxUno.receiveDamage(45))

// War
class War {

    saxonArmy = [];
    vikingArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {

        const saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length));
        const vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length));
        //console.log(saxonRandom, vikingRandom)
        const saxon = this.saxonArmy[saxonRandom];
        const vikingo = this.vikingArmy[vikingRandom];

        //saxon.receiveDamage(vikingo.attack())
        let damge = saxon.receiveDamage(vikingo.attack())

        this.saxonArmy = this.saxonArmy.filter(saxon => {
                return saxon.health > 0
            })
            //console.log(this.saxonArmy, this.vikingArmy)

        return damge



    }
    saxonAttack() {
        const saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length));
        const vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length));
        //console.log(saxonRandom, vikingRandom)
        const saxon = this.saxonArmy[saxonRandom];
        const vikingo = this.vikingArmy[vikingRandom];

        //saxon.receiveDamage(vikingo.attack())
        let damge = vikingo.receiveDamage(saxon.attack())
            //console.log(damge)
        this.vikingArmy = this.vikingArmy.filter(saxon => {
            return saxon.health > 0
        })


        return damge

    }
    showStatus() {
        if (this.vikingArmy.length && !this.saxonArmy.length) {
            return `Vikings have won the war of the century!`
        } else if (!this.vikingArmy.length && this.saxonArmy.length) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}


const war = new War();
war.addViking(new Viking('Harald', 300, 100))
war.addSaxon(new Saxon(100, 150))
war.vikingAttack()
    //war.saxonAttack();


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}