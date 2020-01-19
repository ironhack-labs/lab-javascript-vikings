// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => this.strength
    receiveDamage = damage => {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage = damage => {
        this.health -= damage
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }

    }
    battleCry = () => (`Odin Owns You All!`)
}


// Saxon
class Saxon extends Soldier {


    receiveDamage = damage => {
        this.health -= damage
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking = viking => { this.vikingArmy.push(viking) }
    addSaxon = saxon => { this.saxonArmy.push(saxon) }



}

//function generateViking(viking) {
  //  const name = 'Harald';
    //const strength = 150;
    //const health = 300;
    //return new Viking(name, health, strength);
//}

//function generateSaxon(saxon) {
  //  const health = 60;
    //const strength = 25;
    //return new Saxon(health, strength);
//}
