// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
        this.attack = function(){
            return strength
        }
        this.receiveDamage = function(damage){
            this.health = this.health - damage
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
        //this.attack = function(){
        //    return strength
        //} ==== Attack method recived from Soldier ====
        this.receiveDamage = function(damage){
            this.health = this.health - damage
            if(this.health){
                return `${this.name} has received ${damage} points of damage`
            }
            return `${this.name} has died in act of combat`
        }
        this.battleCry = function(){
            return `Odin Owns You All!`
        }
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage = function(damage){
        this.health = this.health - damage
        if(this.health){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(vinking){
        this.vikingArmy.push(vinking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){

    }
}
