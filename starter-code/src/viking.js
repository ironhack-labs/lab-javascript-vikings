// Soldier
function Soldier(healthArg, strengtArg) {
    this.health = healthArg
    this.strength = strengtArg
    this.attack = function(){
        return this.strength
    }
    this.receiveDamage = function(damage){
        this.health = this.health - damage
    }
}


// Viking
function Viking(name, healthArg, strengtArg) {
    this.name = name
    Soldier.call(this.healthArg)
    Soldier.call(this.strengtArg)
    Soldier.call(this, attack())
    this.receiveDamage = function(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return this.name + "has recived "+this.damage +" points of damage"
            }
            else{
            return this.name + "has died in act of combat"
            }
        }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

// Saxon
function Saxon(healthArg, strengtArg) {
    Soldier.call(this, healthArg, strengtArg)
    Soldier.call(this, attack())
    this.receiveDamage = function(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return "A Saxon has recived "+ this.damage +" points of damage"
            }
            else{
            return "A Saxon has died in combat"
            }
    }
}

// War
function War() {}
