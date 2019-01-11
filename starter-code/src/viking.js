// Soldier
function Soldier(healthArg, strengthArg) {
    this.health   = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
     return this.strength;
}

Soldier.prototype.receiveDamage = function(ArgDamage){  
    this.health = this.health - ArgDamage; 
    if (this.health > 0) {
         this.Soldier +" has received "+ this.health + "points of damage"
    }
    else if (this.health < 0){
         this.Soldier +" has received "+ this.health
    }
}

// Viking


function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name; //nova propriedade do viking
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function(){
    return this.strength;
}

Viking.prototype.receiveDamage = function(ArgDamage){  
    this.health = this.health - ArgDamage; 
    if (this.health > 0) {
         return this.name +" has received "+ ArgDamage + " points of damage"
    } else return this.name +" has died in act of combat"
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function(){
    return this.strength;
}

Saxon.prototype.receiveDamage = function(ArgDamage){  
     this.health = this.health - ArgDamage; 
    if (this.health> 0) {
         return "A Saxon has received "+ ArgDamage + " points of damage"
    } else return "A Saxon has died in combat"
}

// War
const vikingArmy = [];
const saxonArmy = []; 
function War() {

    War.prototype.addViking = function vikingArmy(Viking){
       return 0;
    }
// war.prototype.addSaxon()
// war.prototype.vikingAttack()
// war.prototype.saxonAttack()
// war.prototype.showStatus()
}
