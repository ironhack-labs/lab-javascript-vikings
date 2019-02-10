// Soldier
function Soldier(health,strength) {
    this.health = health
    this.strength = strength
}

Soldier.prototype.attack = function(){
    return this.strength
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage
}

// Viking
function Viking(name,health,strength) {
    Soldier.call(this,health,strength)
    this.name = name
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage
    if (this.health>0){return this.name + " has received " + damage + " points of damage"}
    else {return this.name + " has died in act of combat"}
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength)
}

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage
    if (this.health>0){return "A Saxon has received " + damage + " points of damage"}
    else {return "A Saxon has died in combat"}
}


// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking)
}

War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon)
}


War.prototype.vikingAttack = function(){
    var indvik = (Math.floor(Math.random() * this.vikingArmy.length))
    var indsax = (Math.floor(Math.random() * this.saxonArmy.length))
    var text = this.saxonArmy[indsax].receiveDamage(this.vikingArmy[indvik].attack())
    if (text.includes("died")){this.saxonArmy.splice(indsax,1)}
    return text
}

War.prototype.saxonAttack = function(){
    var indvik = (Math.floor(Math.random() * this.vikingArmy.length))
    var indsax = (Math.floor(Math.random() * this.saxonArmy.length))
    var text = this.vikingArmy[indvik].receiveDamage(this.saxonArmy[indsax].attack())
    if (text.includes("died")){this.vikingArmy.splice(indvik,1)}
    return text  
}

War.prototype.showStatus = function(){
    if ((this.vikingArmy.length>0)&&(this.saxonArmy.length>0)){
        return "Vikings and Saxons are still in the thick of battle."
    } else if (this.vikingArmy.length===0){
        return "Saxons have fought for their lives and survive another day..."
    } else {
        return "Vikings have won the war of the century!"
    }
}