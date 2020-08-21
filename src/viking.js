// Soldier
class Soldier {
    constructor (par1 , par2){
       this.health =  par1
       this.strength = par2
    }

    attack() {
       return this.strength

    }
    
    receiveDamage (damage) {
        this.health -= damage
    }
}


// Viking

class Viking extends Soldier {

    constructor(name, par1, par2){

        super(par1,par2)
        this.name = name
    }
    
    attack() {
        return this.strength
    }

    receiveDamage(damage) {

        this.health -= damage 
        
    
        if (this.health > 0) {
            return`${this.name} has received ${damage} points of damage`
        }
        else  {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {

    

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage


        if (this.health > 0) {

            return`A Saxon has received ${damage} points of damage`
        }
        else  {
            return `A Saxon has died in combat`
        }
    }
 
}

// War

// const damageToSaxon = Saxon.damage

// const damageToViking = Viking.damage

// const damageBySaxon = Saxon.strength

// const damageByVinking = Viking.strength

class War {


    constructor() {

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
            
            const randomVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
            const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
            const damage= randomSaxon.receiveDamage(randomVik.strength) 

        
            return damage
        
    }

    saxonAttack(){}

    showStatus(){}

    
}
