// Soldier
class Soldier {
constructor(health, strength){
    this.health=health
    this.strength=strength
}
attack(){
    return this.strength
}
    
receiveDamage(dmg){
    this.health -= dmg
}
}
// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super(health, strength)
    this.name=name
    }
    receiveDamage(dmg){
        this.health -= dmg
        if(this.health > 0 ){
            return (`${this.name} has received ${dmg} points of damage`)
        } else {return (`${this.name} has died in act of combat`)}
            
        }
    battleCry(){
    return (`Odin Owns You All!`)

    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength)
        
    }
    receiveDamage(dmg){
        this.health -= dmg
        if(this.health > 0 ){
            return (`A Saxon has received ${dmg} points of damage`)
        } else {return (`A Saxon has died in combat`)}
    }



}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        const saxRand = (Math.floor(Math.random() * this.saxonArmy.length))
        const vikRand = (Math.floor(Math.random() * this.vikingArmy.length))
        const result = this.saxonArmy[saxRand].receiveDamage(this.vikingArmy[vikRand].strength)
        if (this.saxonArmy[saxRand].health <= 0){
            this.saxonArmy.splice(saxRand,1)
        }
        return result

        
    }
    saxonAttack(){
        const saxRand = (Math.floor(Math.random() * this.saxonArmy.length))
        const vikRand = (Math.floor(Math.random() * this.vikingArmy.length))
        const result = this.vikingArmy[vikRand].receiveDamage(this.saxonArmy[saxRand].strength)
        if (this.vikingArmy[vikRand].health <= 0){
            this.vikingArmy.splice(vikRand,1)
        }
        return result
    }
    showStatus(){

    }
}
