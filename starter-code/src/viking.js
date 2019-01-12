// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
    this.attack = function () {
        return this.strength
    }
    this.receiveDamage = function (dmgArg) {
        this.health -= dmgArg 
    }
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
    this.name = nameArg
    this.receiveDamage = function(dmgArg){
        this.health -= dmgArg
        if(this.health > 0) {
            return this.name + " has received " + dmgArg + " points of damage"
        }
        return this.name + " has died in act of combat"
    }
    this.battleCry = function() {
        return "Odin Owns You All!"
    }
}
Viking.prototype = Object.create(Soldier.prototype)

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this)
    this.health = healthArg
    this.strength = strengthArg
    this.receiveDamage = function(dmgArg) {
        this.health -= dmgArg
        if(this.health > 0) {
            return "A Saxon has received " + dmgArg + " points of damage"
        }
        return "A Saxon has died in combat"
    }
}
Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking)
    }
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = function() {
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        var resultAttack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1); 
        }
        return resultAttack
    }
    this.saxonAttack = function() {
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        var resultAttack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1); 
        }
        return resultAttack
    }
    this.showStatus = function() {
        if(this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } 
        return "Vikings and Saxons are still in the thick of battle."
    }
}