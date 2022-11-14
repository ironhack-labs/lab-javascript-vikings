// Soldier
class Soldier {
    constructor (health , strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength 
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
        else return `${this.name} has received ${damage} points of damage`
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health <= 0){
            return `A Saxon has died in combat`
        }
        else return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.viking = viking
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxon = saxon
        this.saxonArmy.push(saxon)
    }
    vikingAttack () {
        const resultViking = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.shift();
        }
        return resultViking;
    }

    saxonAttack () {
        const resultSaxon = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.shift();
        }
        return resultSaxon;
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        else return 'Vikings and Saxons are still in the thick of battle.'
    }


}


