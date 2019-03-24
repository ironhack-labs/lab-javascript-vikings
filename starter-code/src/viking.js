// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = 300;
        this.strength = 150;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = "Harald"

    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength)
        this.health = 60;
        this.strength = 25; 
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`
        return `A Saxon has died in combat`
    } 
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack() {
        var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1) + 0);
        var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1) + 0);
        
        var saxonReciveDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength) 
        this.saxonArmy.splice(randomSaxon,1)
        return saxonReciveDamage
    }

    saxonAttack() {
        var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1) + 0);
        var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1) + 0);
        
        var vikingReciveDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if(this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking,1) 
        return vikingReciveDamage
    }

    showStatus() {
        if(this.saxonArmy.length <= 0) return "Vikings have won the war of the century!"  
        else if(this.vikingArmy.length <= 0) return "Saxons have fought for their lives and survive another day..."
        return  "Vikings and Saxons are still in the thick of battle."  
    }

}
