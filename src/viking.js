// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(points){
        this.health -= points
    }
}

// Viking
class Viking extends Soldier {
    constructor(vikingName, health, strength){
    super (health, strength)
    this.name = vikingName
}
    receiveDamage(points){
        this.health -= points
            if(this.health > 0){
                return `${this.name} has received ${points} points of damage`
                
            }
            else {
                return `${this.name} has died in act of combat`}       

    }
    
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super (health, strength)
    }
    receiveDamage(points){
        this.health -= points     
        if (this.health > 0){
                return `A Saxon has received ${points} points of damage`
                
            }
            else {
                return `A Saxon has died in combat`}       

    }
}

// War
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
     const enemy = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]  
     const fighter =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]     
     let attack = enemy.receiveDamage(fighter.strength)
        if (enemy.health <= 0){
            this.saxonArmy.pop(enemy)} 
        return attack
    
    }
    
    saxonAttack(){
     const enemy = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]       
     const fighter = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]     
     let attack = enemy.receiveDamage(fighter.strength)
        if (enemy.health <= 0){
            this.vikingArmy.pop(enemy)} 
        return attack
    }

    showStatus(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }  
        else if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"

        }        

        return "Vikings and Saxons are still in the thick of battle."
    
    }

    superBonusAttack(theBadGuys, theGoodGuys){
        const enemy = this.theBadGuys[Math.floor(Math.random() * this.theBadGuys.length)]       
        const fighter = this.theGoodGuys[Math.floor(Math.random() * this.theGoodGuys.length)]     
        let attack = enemy.receiveDamage(fighter.strength)
           if (enemy.health <= 0){
               this.theBadGuys.pop(enemy)} 
           return attack
    }
    
    
}


