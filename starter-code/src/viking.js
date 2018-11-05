// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength
    
}

Soldier.prototype.attack = function attack (){
    return this.strength
}

Soldier.prototype.receiveDamage = function receiveDamage(damage){
  this.damage = damage
  this.health = this.health - this.damage
}



// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name= name 
}

        //Herencia 
Viking.prototype=Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function attack (){
    return this.strength
}

Viking.prototype.receiveDamage = function receiveDamage (damage){
    this.damage = damage
    this.health = this.health - this.damage
    if (this.health > 0){
       return this.name + "has recived" + this.damage + "points of damage"
    } else {
        return this.name + "has died in act of combat"
    }
}

Viking.prototype.battleCry = function battleCry(){
    return "Odin Owns You All!"
}



// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
}

Saxon.prototype=Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function attack (){
    return this.strength
}

Saxon.prototype.receiveDamage = function receiveDamage (damage){
    this.damage = damage
    this.health = this.health - this.damage
    if (this.health > 0){
        return "A Saxon has recived" + this.damage + "points of damage"
     } else {
         return " A Saxon has died in combat"
     }
}

// War
function War() {}

