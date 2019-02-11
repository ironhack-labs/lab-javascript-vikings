// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    //Soldier.prototype = Object.create(Soldier.prototype)
    //Soldier.prototype.constructor = Soldier
    this.attack = function() {
        return strength
    }
    this.receiveDamage = function(damage) {
        this.health = this.health - damage
    }
}


//function receiveDamage(damage) {
//    delete Soldier.health
//}
/*Soldier.prototype.attack = function() {
    return this.damage = 40
}
Soldier.prototype.attack(); {
}*/
// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.battleCry = function() {
        return "Odin Owns You All!"
    }
    this.name = name;
    if (this.receiveDamage > this.health) {
        return this.name + " has died in act of combat"

    } else {

    }
}
//var viking = new Viking("viking", health, strength)
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

// Saxon

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon