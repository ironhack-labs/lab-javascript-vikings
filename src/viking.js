// Soldier
class Soldier { 
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => {
        return this.strength
    };
    receiveDamage = (damage) => {
        this.health = this.health - damage
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage = (damage) => {
        this.health = this.health - damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    };
    battleCry = () => {
        return "Odin Owns You All!"
    } 
}

// Saxon
class Saxon extends Soldier{
    receiveDamage = (damage) => {
        this.health = this.health - damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
    };
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy  = []
    }
    addViking = (Viking) => {
        this.vikingArmy.push(Viking)
    }
    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack = () => {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let damage = viking.attack()
        let result = saxon.receiveDamage(damage)
        if(saxon.health < 1)this.saxonArmy.pop(saxon)
        return result
    }
    saxonAttack = () => {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let damage = saxon.attack()
        let result = viking.receiveDamage(damage)
        if(viking.health < 1)this.vikingArmy.pop(saxon)
        return result
    }
    showStatus = () => {
        if(this.saxonArmy.length  < 1)return "Vikings have won the war of the century!"
        if(this.vikingArmy.length < 1)return "Saxons have fought for their lives and survived another day..."
        if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0)return "Vikings and Saxons are still in the thick of battle."

    }
}
