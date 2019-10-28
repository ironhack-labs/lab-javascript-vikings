// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (
        name, health, strength 
    ) {
        super (health, strength)
        this.name = name
    } 
receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`
}
battleCry(){
    return 'Odin Owns You All!'
}
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War

class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy =[];

    } 
    addViking(viking) {
     this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
    this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let currentSaxon = Math.floor(Math.random()* this.saxonArmy.length);
        let result = this.saxonArmy[currentSaxon].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);
        if (this.saxonArmy[currentSaxon].health <= 0) {
        this.saxonArmy.splice(currentSaxon,1)
        }
        return result
    }
    saxonAttack(){
        let currentViking = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.vikingArmy[currentViking].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        if (this.vikingArmy[currentViking].health <= 0) {
            this.vikingArmy.splice(currentViking, 1);
        }
        return result
    }
    showStatus(){
if(this.saxonArmy.length < 1) {
    return "Vikings have won the war of the century!"
} else if (this.vikingArmy.length < 1) {
    return "Saxons have fought for their lives and survived another day..."
}else return "Vikings and Saxons are still in the thick of battle."
    }
}
