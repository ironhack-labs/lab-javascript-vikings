// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack () { 
        return this.strength
    }

    receiveDamage (damage) {
        this.health = this.health - damage
    
    }
    
}

// Viking

class Viking extends Soldier {
    constructor (name, healthArg, strengthArg) {
       super(healthArg, strengthArg);
    this.name = name;
}

 receiveDamage(damage) {
     this.health = this.health - damage
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }

        else {
            return `${this.name} has received ${damage} points of damage`
        }
 }

 battleCry(){
    return "Odin Owns You All!"
 }

}

// Saxon
class Saxon extends Soldier {
    constructor (healthArg, strengthArg) {
        super(healthArg, strengthArg);
} 

attack () { 
    return this.strength
}

receiveDamage (damage) {
    this.health = this.health - damage
        if (this.health === 0) {
            return "A Saxon has died in combat"
        }

        else {
            return `A Saxon has received ${damage} points of damage`
        }

}
}

// War

function randomNumber (minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);}

class War {
    constructor () {
            this.vikingArmy = [];
            this.saxonArmy = []
    }
    addViking(vikingObject) { 
        this.vikingArmy.push(vikingObject)
     }
        
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }

    // not finished
    
    _genericAttack(attacker, victom) {
        const vikingCount = this.vickingArmy.length;
        const saxonCount = this.saxonArmy.length;
        const vikingIndex = randomNumber(0, vikingCount -1);
        const saxonIndex = randomNumber(0, saxonCount -1);

        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];


        
    }
}
