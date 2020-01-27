// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name

    
}
        receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    
        receiveDamage(damage){
            this.health = this.health - damage
            if(this.health > 0){
                return (`A Saxon has received ${damage} points of damage`)
            } else {
                return (`A Saxon has died in combat`)
            }
        }
    
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []  
    }
    
    addViking(vikingObj) {
        //let viking1 = new Viking('Absalon', 200, 150)
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }
    vikingAttack() {
        // return Math.floor(Math.random(this.saxonArmy.receiveDamage(Math.floor(Math.random(this.vikingArmy.strength)))).length)
       let victim = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
       let attacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
       
       let respose = victim.receiveDamage(attacker.strength)
        
       if (victim.health <= 0) {
                  this.saxonArmy.splice(victim)
            
        }
        return respose
    }
    saxonAttack() {
        let victim = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
       let attacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
       
       let respose = victim.receiveDamage(attacker.strength)
        
       if (victim.health <= 0) {
                  this.vikingArmy.splice(victim)
            
        }
        return respose
    }
    
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length == 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if ((this.saxonArmy.length !== 0) && (this.vikingArmy.length !== 0)) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
