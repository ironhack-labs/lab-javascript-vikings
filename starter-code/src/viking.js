// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
    this.attack = function() {
        return this.strength
    }
    this.receiveDamage = function(damage) {
        this.health -= damage
    }
}



// Viking
function Viking(nameArg, healthArg, strengthArg) {
    this.name = nameArg
    this.health = healthArg
    this.strength = strengthArg
    this.attack = function() {
        return this.strength
    }
    this.receiveDamage = function(damage) {
        this.health -= damage
        return (this.health <= 0) ?
            this.name + " has died in act of combat" : this.name + " has received " + damage + " points of damage"
    }
    this.battleCry = function() {
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype)

// Saxon
function Saxon(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
    this.attack = function() {
        return this.strength
    }
    this.receiveDamage = function(damage) {
        this.health -= damage
        return (this.health <= 0) ?
            "A Saxon has died in combat" : "A Saxon has received " + damage + " points of damage"
    }
}

Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking)
        return
    }
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon)
        return
    }
    this.vikingAttack = function() {
        this.saxonArmy[this.saxonArmy.length - 1].health -= this.vikingArmy.strength
            //return receiveDamage(this.vikingArmy.strength)
    }
    this.saxonAttack = function() {

    }
    this.showStatus = function() {

    }
}