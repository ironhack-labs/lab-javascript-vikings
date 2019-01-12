// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
}
Soldier.prototype.attack = function () {
    return this.strength
}

Soldier.prototype.receiveDamage = function (dmgArg) {
    this.health -= dmgArg 
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
    this.name = nameArg
}
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking
Viking.prototype.receiveDamage	= function(dmgArg){
    this.health -= dmgArg
    if(this.health > 0) {
        return this.name + " has received " + dmgArg + " points of damage"
    }
    return this.name + " has died in act of combat"
}
Viking.prototype.battleCry = function() {
    return "Odin Owns You All!"
}
// Saxon
function Saxon(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
}
Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon
Saxon.prototype.receiveDamage = function(dmgArg) {
    this.health -= dmgArg
    if(this.health > 0) {
        return "A Saxon has received " + dmgArg + " points of damage"
    }
    return "A Saxon has died in combat"
}
// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
}
War.prototype.constructor = War
War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking)
}
War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon)
}
War.prototype.vikingAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    var resultAttack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
    if (this.saxonArmy[randomSaxon].health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1); 
    }
    return resultAttack
}
War.prototype.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    var resultAttack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
    if (this.vikingArmy[randomViking].health <= 0) {
        this.vikingArmy.splice(randomViking, 1); 
    }
    return resultAttack
}
War.prototype.showStatus = function() {
    if(this.vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survive another day..."
    } else if (this.saxonArmy.length == 0) {
        return "Vikings have won the war of the century!"
    } 
    return "Vikings and Saxons are still in the thick of battle."
}