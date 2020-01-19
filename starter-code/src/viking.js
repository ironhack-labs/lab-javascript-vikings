// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health
        this.strength=strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health-=damage

        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-=damage

        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    
    rndNum(arr){
        return Math.floor(Math.random()*arr.length)
    }
    addViking(vkObj){
        this.vikingArmy.push(vkObj)
    }
    addSaxon(sxObj){
        this.saxonArmy.push(sxObj)
    }
    vikingAttack(){
        let numSaxon = Math.floor(Math.random()*this.saxonArmy.length) 
        let saxon = this.saxonArmy[numSaxon]
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let result = saxon.receiveDamage(viking.attack())
        if (saxon.health<=0){
            this.saxonArmy.splice(numSaxon,1)
        }
        return result
    }

    saxonAttack(){
        console.log(`army inicial ${this.vikingArmy}`)
        let numViking = Math.floor(Math.random()*this.vikingArmy.length) 
        let viking = this.vikingArmy[numViking]
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let result = viking.receiveDamage(saxon.attack())
        if (viking.health<=0){
            this.vikingArmy.splice(numViking,1)
        }
        return result
    }

    showStatus(){
        if(this.saxonArmy.length==0){
            return 'Vikings have won the war of the century!'
        }else if(this.vikingArmy.length==0){
            return 'Saxons have fought for their lives and survived another day...'
        }else{
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
