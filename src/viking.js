// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health,
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

    constructor(name, health, strength){
        super(health, strength)
        this.name = name
        }

    battleCry(){
        return 'Odin Owns You All!'
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else {
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        const vikingInd = Math.floor((Math.random()*this.vikingArmy.length))
        const viking = this.vikingArmy[vikingInd]
        const saxonInd = Math.floor((Math.random()*this.saxonArmy.length))
        const saxon = this.saxonArmy[saxonInd]
        const log = saxon.receiveDamage(viking.strength)
        if(saxon.health === 0){
          this.saxonArmy = this.saxonArmy.filter(item=>{
            return item.health !== 0
          })
        }
        return log
    }
    saxonAttack(){
        const vikingInd = Math.floor((Math.random()*this.vikingArmy.length))
        const viking = this.vikingArmy[vikingInd]
        const saxonInd = Math.floor((Math.random()*this.saxonArmy.length))
        const saxon = this.saxonArmy[saxonInd]
        const log = viking.receiveDamage(saxon.strength)
        if(viking.health === 0){
          this.vikingArmy = this.vikingArmy.filter(item=>{
            return item.health !== 0
          })
        }
        return log
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
