// Soldier
class Soldier {
    constructor (health,strength){

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
    constructor (name, health, strength){
        super(health,strength)
        this.name = name
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
        if(this.health !== 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}


// War
class War {

    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(){}
    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
    
}

/*should be a function
should receive 1 argument (a Viking object)
should add the received Viking to the army
shouldn't return anything*/