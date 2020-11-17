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
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage

        if (this.health > 0) {return `${this.name} has received ${damage} points of damage`}
    else {return `${this.name} has died in act of combat`}
    
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {return `A Saxon has received ${damage} points of damage`}
    else {return `A Saxon has died in combat`}
    }
}

// War
class War {

    vikingArmy = []
    saxonArmy = []

    addViking(Viking) {
    this.vikingArmy.push(Viking)
    }
    // addViking(Viking) {
    //     this.vikingArmy.push(Viking)
    //     }
    //     addViking(Viking) {
    //         this.vikingArmy.push(Viking)
    //         }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    // addSaxon(Saxon) {
    //     this.saxonArmy.push(Saxon)
    // }
    // addSaxon(Saxon) {
    //     this.saxonArmy.push(Saxon)
    // }


vikingAttack() {

// choose a number of the saxonArmy array at random (Maths.random!!!!):

let randomSaxon = Math.floor(Math.random(1, this.saxonArmy.length -1));
let randomViking = Math.floor(Math.random(1, this.vikingArmy.length -1));




// One attack of the viking to the saxon
let damageViking = this.vikingArmy[randomViking].attack();


    let oneHit = this.saxonArmy[randomSaxon].receiveDamage(damageViking);

for (let i = 0; i < this.saxonArmy.length; i++) {
    let saxguy = this.saxonArmy[i];
    if(saxguy.health < 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxguy), 1)
        return oneHit
    }
}


    // return oneHit 


}



saxonAttack() {}
showStatus() {}
}

