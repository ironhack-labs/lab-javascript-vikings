// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
     }

    receiveDamage(damage){
        this.health -= damage
    }


}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health)
        this.strength = strength
        this.name = name
        
    }

    receiveDamage(damage){
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry(){
        return `Odin Owns You All!`; 
    }
    
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage
        if (this.health <= 0){
            return `A Saxon has died in combat`
        } else if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];


addViking(viking){
    this.vikingArmy.push(viking)
}

addSaxon(saxon){
    this.saxonArmy.push(saxon)
}

vikingAttack(){
    let pickSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let pickViking = Math.floor(Math.random() * this.vikingArmy.length)

    if (Saxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy[pickSaxon],1)
    }

    return this.saxonArmy[pickSaxon].receiveDamage(this.vikingArmy[pickViking].strength)
    
    
}

saxonAttack(){
    let pickViking = Math.floor(Math.random() * this.vikingArmy.length)
    let pickSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    return this.vikingArmy[pickViking].receiveDamage(this.saxonArmy[pickSaxon].strength)

}

showStatus(){
    if (!this.saxonArmy.length) return 'Vikings have won the war of the century!';
    
    /*if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
        return 'Vikings and Saxons are still in the thick of battle.';
    } else if (!this.saxonArmy.length) {
        return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
        return 'Saxons have fought for their lives and survived another day...';
    }*/
}

}