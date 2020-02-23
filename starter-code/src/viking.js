// Soldier
class Soldier {
    constructor(health, strength) {
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
    constructor(name,health, strength) {
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){ 
        this.health -= damage
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : 'A Saxon has died in combat'
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let viking = this.vikingArmy[randomArray(this.vikingArmy)],
        saxon = this.saxonArmy[randomArray(this.saxonArmy)]
        if ((saxon.health - viking.strength) <= 0) {
            this.saxonArmy.splice(this.saxonArmy.findIndex[saxon],1)
        }
        return saxon.receiveDamage(viking.strength)
    }
    saxonAttack(){
        let viking = this.vikingArmy[randomArray(this.vikingArmy)],
        saxon = this.saxonArmy[randomArray(this.saxonArmy)]
        if ((viking.health - saxon.strength) <= 0) {
            this.vikingArmy.splice(this.vikingArmy.findIndex[viking],1)
        }
        return viking.receiveDamage(saxon.strength)
    }
    showStatus(){
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
function randomArray(array){
    return Math.floor(Math.random() * array.length)
}
