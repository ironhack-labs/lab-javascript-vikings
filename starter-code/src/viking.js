// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function (){
    return this.strength
}

Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage
}



// Viking
function Viking(name, health, strength) {
    this.name = name;
    soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
    if (this.health - damage> 0){
        return ( this.name + " has received " + this.strength + " points of damage "){
            else return ( this.name + " has died in act of combat")
        }
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}


// Saxon
function Saxon(health, strength) {
    soldier.call(health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
    if this.health - damage> 0{
        return ("A Saxon has received " + damage + " points of damage")}
        else return ("A Saxon has died in combat")

    }
}


// War
function War() {}

Viking.prototype.receiveDamage = function (damage){
    this.health - damage;
    if (this.Viking.strength > this.Saxon.strength){
        return ( this.name + " has received " + this.strength + " points of damage ")
    else return ( this.name + " has died in act of combat")
    }
}

