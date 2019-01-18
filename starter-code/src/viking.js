// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength
    this.attack = function(){
        return this.strength; 
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
        
        }

}

    
        

// Viking
function Viking(name, health, strength) {
Soldier.call(this, health, strength)
    this.name = name
    this.health = health
    this.strength = strength
    this.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0){
            return (this.name + "has received " + this.damage + "points of damage")
        }else {
            return (this.name + " has died in act of combat")
        }
    }
    this.attack = function(){
        return this.strength;
    }
    this.battleCry= function(){
        return("Odin Owns You All!")
    }
    
}
Viking.prototype = Object.create(Soldier.prototype);
var viking = new Viking (name, health, strength)



// Saxon
function Saxon(health, strength) {
Soldier.call(this, health, strength)
this.health=health
this.strength=strength 
this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 1){
        return ("A Saxon has received " + this.damage + " points of damage")
    }else {
        return ("A Saxon has died in combat")
    }
}
    this.attack = function(){
    return this.strength;
}
}
Saxon.prototype = Object.create(Soldier.prototype);
var saxon = new Saxon (health, strength)

// War
function War() {}
