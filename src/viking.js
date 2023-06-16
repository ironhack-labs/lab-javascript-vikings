// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health ;
        this.strength = strength ;
    }
    attack() { return this.strength } ;
    receiveDamage(damage) {this.health -= damage} ;
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (name, health, strength);
        this.name = name ;
        this.health = health ;
        this.strength = strength ;
    }
// don't understand why is telling me not to reimplement, but I have to write it again?    
attack() {return this.strength} ; 
receiveDamage(damage) {
    this.health -= damage
    if (this.health !== 0) { 
        return `${this.name} has received ${damage} points of damage` 
    }
    else if (this.health === 0) {
        return `${this.name} has died in act of combat` 
    }
} ;
battleCry() {return "Odin Owns You All!"}
}
// Saxon
class Saxon extends Soldier {
    


receiveDamage(damage) {
    this.health -= damage
    if (this.health !== 0) {
        return `A Saxon has received ${damage} points of damage`
    }
    else if (this.health === 0) {
        return `A Saxon has died in combat`
    }
};

}

function randomizer(arr) {
    return Math.floor(Math.random() * arr.length)
}

// War
class War {
    constructor () {
        this.vikingArmy = [ ]
        this.saxonArmy = [ ]
    }
addViking (Viking) {
    this.vikingArmy.push(Viking) 
};
addSaxon (Saxon) {
    this.saxonArmy.push(Saxon)
};

//Sorry, this part is left incomplete. 
//I "lost the plot" at this point of the day and is becoming counter productive.
vikingAttack() {
    let randomViking = this.vikingArmy[randomizer(this.vikingArmy)]
    let randomSaxon = this.saxonArmy[randomizer(this.saxonArmyArmy)]
   
};
saxonAttack() { 
    let randomSaxon = this.saxonArmy[randomizer(this.saxonArmyArmy)]
    let randomViking = this.vikingArmy[randomizer(this.vikingArmy)]

};
showStatus() { 
if (this.vikingArmy.length === 0 ) {
    return `Saxons have fought for their lives and survived another day`
}
else if (this.saxonArmy.length === 0 ) {
    return `Vikings have won the war of the century`
}
else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
    return `Vikings and Saxons are still in the think of battle`
}
   
}
    
}
