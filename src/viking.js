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
        this.health -=  damage
    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength) 
        this.name = name
               
    }    
    receiveDamage(damage) {
        
        let demagePoints =  damage
        this.health -=  damage

        if (this.health <= 0){            
            return `${this.name} has died in act of combat`            
        } else {            
            return `${this.name} has received ${demagePoints} points of damage`
        }  
    }
    
    battleCry() {
        return 'Odin Owns You All!'
    }
}



// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super (health, strength)
    }
    receiveDamage(damage) {
        let demagePoints =  damage
        this.health -=  damage

        if (this.health  <= 0){            
            return `A Saxon has died in combat`            
        } else {            
            return `A Saxon has received ${demagePoints} points of damage`
        }     

    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        
        this.saxonArmy.push(Saxon)
    }

    anAttack(attackArmy, deffenceArmy) {
  
        let attackerSoilder = attackArmy[Math.floor(Math.random()*attackArmy.length)]
        let defffenderSoilder = deffenceArmy[Math.floor(Math.random()*deffenceArmy.length)]

        let defffenderDamage =  attackerSoilder.strength
        let result = defffenderSoilder.receiveDamage(defffenderDamage)

        if (defffenderSoilder.health <= 0) {
            deffenceArmy.splice(deffenceArmy.indexOf(defffenderSoilder),1)            
        }   
        return result

     }

    vikingAttack() {
    //     let saxonSoilder = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    //     let vikingSoilder = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

    //     let saxonDamage = vikingSoilder.strength

    //     let result = saxonSoilder.receiveDamage(saxonDamage)
        
    //     if (saxonSoilder.health <= 0) {
    //         this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoilder),1)            
    //     }   
    //     return result
        return this.anAttack(this.vikingArmy, this.saxonArmy)
     }
     saxonAttack() {
    //     let saxonSoilder = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    //     let vikingSoilder = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

    //     let vikingDamage = saxonSoilder.strength

    //     let result = vikingSoilder.receiveDamage(vikingDamage)
        
    //     if (vikingSoilder.health <= 0) {
    //         this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoilder),1)            
    //     }   
    //     return result
    return this.anAttack(this.saxonArmy, this.vikingArmy)
    }

    

    

    showStatus() {
        if (this.saxonArmy.length === 0) {
           return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}
