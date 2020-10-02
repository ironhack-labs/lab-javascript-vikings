// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }   
    receiveDamage(dmg){
         this.health -= dmg
   }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name    
    }
    receiveDamage(dmg){
        this.health -= dmg

        if (this.health > 0){
            return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(dmg){
        this.health -= dmg
        if (this.health > 0){
            return  `A Saxon has received ${dmg} points of damage`
        } else {
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
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {

        let rngSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let rngViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let result = rngSaxon.receiveDamage(rngViking.strength)
           
        if (rngSaxon.health <= 0) { 
            this.saxonArmy.splice(rngSaxon, 1)
        }
        return result
    }
    saxonAttack() {

        let rngSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let rngViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let result = rngViking.receiveDamage(rngSaxon.strength)
           
        if (rngViking.health <= 0) { 
            this.vikingArmy.splice(rngViking, 1)
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length===0){
           return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}



