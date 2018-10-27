// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    
}
Soldier.prototype.attack = function attack(){
    return this.strength; 
}  
Soldier.prototype.receiveDamage= function receiveDamage(damage){
    this.health -= damage;
}
//if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name;
    
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function receiveDamage(damage){
   this.health -= damage
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage"
    }
    else{
        return this.name + " has died in act of combat"
    }
}
Viking.prototype.battleCry = function battleCry(){
    return "Odin Owns You All!"
}


// Saxon

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health,strength) {
Soldier.call(this, health, strength)
    }
Saxon.prototype.receiveDamage = function receiveDamage(damage){
    this.health -= damage
     if (this.health > 0){
         return "A Saxon has received " + damage + " points of damage"
     }
     else{
         return "A Saxon has died in combat"
     }
 }

// War
function War() {}
