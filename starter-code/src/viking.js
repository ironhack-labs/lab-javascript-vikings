// Soldier
function Soldier(health, strength) {

    this.health=health
    this.strength=strength
    this.attack=()=>{
        return strength
    }
    this.receiveDamage= (theDamage)=> {
        this.health = this.health - theDamage
    }
    }
// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    
    this.receiveDamage =(theDamage)=> {
        this.health = this.health - theDamage
        if(this.health > 0 )
            return name + " has reveived " + theDamage + " points of damage"
        
         else 
             return name + " has died in act of combat"
    }

    this.battleCry=()=>{
        return "Odin Owns You All!"
    }

}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)

    this.receiveDamage =(theDamage)=> {
        this.health = this.health - theDamage
        if(this.health > 0 )
            return "A Saxon has reveived " + theDamage + " points of damage"
        
         else 
             return "A Saxon has died in combat"


}

}

// War
function War() {}
