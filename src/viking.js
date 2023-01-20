// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
        
    }
    attack() {
        return this.strength;
    }
    receiveDamage(receivedDamage) {
        this.health -= receivedDamage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(receivedDamage) {
        this.health -= receivedDamage
         if (this.health > 0) {
        return `${this.name} has received ${receivedDamage} points of damage`
    }
    else {
        return `${this.name} has died in act of combat`
    }
}
battleCry() {
    return `Odin Owns You All!`
}
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);    
    }
    receiveDamage(receivedDamage) {
        this.health -= receivedDamage
        if(this.health > 0 ) {
            return `A Saxon has received ${receivedDamage} points of damage`
        }      
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
}
addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
}
vikingAttack() {

    let vikingattacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxonvictim = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let damage = saxonvictim.receiveDamage(vikingattacker.strength);
        if (saxonvictim.health <= 0) {
            this.saxonArmy.splice(saxonvictim, 1)
        }

        return damage;

    
    
    
     

}
saxonAttack() {

}

showStatus() {
    if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`
    }
    else if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
    }
}
}
