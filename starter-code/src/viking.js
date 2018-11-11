// Soldier
function Soldier(health, strength) {
 this.health = health;
 this.strength = strength;
}
Soldier.prototype.attack = function() {
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - 50;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() {
    return Soldier.prototype.attack.call(this);
}
Viking.prototype.receiveDamage = function(damage) {
    Soldier.prototype.receiveDamage.call(this);
    this.damage = 0;
    if(this.damage == 50 || this.damage == 75 ) {
        return this.name + ' has received '+ this.damage + 'points of damage';
    }
    if(this.health == this.damage) {
        return this.name + ' has died in act of combat';
    }
        
}

Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!';
}



// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function() {
    return Soldier.prototype.attack.call(this);
}

Saxon.prototype.receiveDamage = function(damage) {
    Soldier.prototype.receiveDamage.call(this);
    this.damage = 0;
    if(this.damage < this.health ) {
        return 'A saxon has received '+ this.damage + 'points of damage';
    }
    if(this.health <= this.damage) {
        return this.name + ' has died in act of combat';
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

function addViking(viking) {
    War.vikingArmy.push(viking);
}
