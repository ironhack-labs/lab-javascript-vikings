// SOLDIER
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function(){
    return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage; 
};

Soldier.prototype.battleCry = function() {
    return "Odin Owns You All!"
}

//VIKING
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    Soldier.prototype.receiveDamage.call(this, damage);
    
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage"        
    } else {
       return  this.name + " has died in act of combat"
    }
}


var viking1 = new Viking('Harald', 100, 300);
//console.log(viking1.attack());

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    Soldier.prototype.receiveDamage.call(this, damage);
    
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage"        
    } else {
       return  "A Saxon has died in combat"
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon); 
}

//Armies attack:

War.prototype.vikingAttack = function() {
    
    saxon = this.saxonArmy[0];
    viking = this.vikingArmy[0];
    
    status = saxon.receiveDamage(viking.attack());
    if (saxon.health > 0) {
        this.saxonArmy.pop(saxon);
    }
    return status;
        
    
}

War.prototype.saxonAttack = function() {
    var saxonStrength = this.saxon.strength;
   

        
    
}