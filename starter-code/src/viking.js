// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
    this.attack = function(){
        return this.strength
    }
    this.receiveDamage = function(damage){
        this.health = this.health-damage
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name
    this.receiveDamage = function(damage){
        this.health = this.health-damage
        if(this.health>0){
            return this.name+" has received "+damage+" points of damage"
        }else{
            return this.name+" has died in act of combat"
        }
    }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.receiveDamage = function(damage){
        this.health = this.health-damage
        if(this.health>0){
            return "A Saxon has received "+damage+" points of damage"
        }else{
            return "A Saxon has died in combat"
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []

    this.addViking = function(viking){
        this.vikingArmy.push(viking)
    }
    this.addSaxon = function(saxson){
        this.saxonArmy.push(saxson)
    }
    this.vikingAttack = function(){
        var randomSaxonPos = Math.floor(Math.random() * this.saxonArmy.length)
        var attackViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var defenseSaxon = this.saxonArmy[randomSaxonPos]
        console.log(attackViking)
        var message = defenseSaxon.receiveDamage(attackViking.strength)
        if (defenseSaxon.health<=0){
            this.saxonArmy.splice(randomSaxonPos, 1)
        }
        return message
    }
    this.saxonAttack = function(){
        var randomVikingPos = Math.floor(Math.random() * this.vikingArmy.length)
        var attackSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var defenseViking = this.vikingArmy[randomVikingPos]
        var message = defenseViking.receiveDamage(attackSaxon.strength)
        if (defenseViking.health<=0){
            this.vikingArmy.splice(randomVikingPos, 1)
        }
        return message
    }
    this.showStatus = function(){
        if(this.saxonArmy.length==0){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length==0){
            return "Saxons have fought for their lives and survive another day..."
        }else if(this.vikingArmy.length==1 && this.saxonArmy.length==1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
