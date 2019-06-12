// Soldier
class Soldier {
    constructor (health,strength) {
        this.health = health
        this.strength = strength
        this.attack = function(){
            return strength
        }
        this.receiveDamage = function(damage){
            this.damage=50
            this.health=this.health-this.damage
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health,strength)
        this.name=name
        this.attack = function(){
            return strength
        }
        this.receiveDamage = function(damage){
            this.health=this.health-damage
            if(this.health>0)return `${name} has received ${damage} points of damage`
            if (this.health===0)return `${name} has died in act of combat` 
        }
        this.battleCry = function(){
            return "Odin Owns You All!"
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health,strength)
        this.name=name
        this.attack = function(){
            return strength
        }
        this.receiveDamage = function(damage){
            this.health=this.health-damage
            if(this.health>0)return `A Saxon has received ${damage} points of damage`
            if (this.health===0)return `A Saxon has died in combat` 
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
        addViking(Viking){
            this.vikingArmy.push(Viking)
        }
        addSaxon(Saxon){
            this.saxonArmy.push(Saxon)
        }
        vikingAttack (){
            let randomSaxon= Math.floor(Math.random*this.saxonArmy.length)
            let randomViking= Math.floor(Math.random*this.vikingArmy.length)
            let remove = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength) 
            if (this.saxonArmy[randomSaxon].health<=0){
                this.saxonArmy.splice(randomSaxon,1)
            }
            return remove
        }
        saxonAttack (){
            let randomSaxon= Math.floor(Math.random*this.saxonArmy.length)
            let randomViking= Math.floor(Math.random*this.vikingArmy.length)
            let remove = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength) 
            if (this.vikingArmy[randomViking].health<=0){
                this.vikingArmy.splice(randomViking,1)
            }
            return remove
        }
        showStatus() 
    
}
