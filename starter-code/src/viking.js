// Soldier

function Soldier(health , strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (thedamage) {
    this.health -= thedamage;
}


// Viking

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name ; 
}


Viking.prototype.receiveDamage = function (thedamage) {
    this.health -= thedamage;
    if (this.health > 0) {
        return(this.name + " has received " + thedamage + " points of damage");
    }
    if (this.health <= 0) {
        return(this.name + " has died in act of combat");
    }
}

var viking = new Viking("Harald", 40, 15)
viking.receiveDamage(23);
viking.receiveDamage(23);

console.log(viking)


Viking.prototype.battleCry = function () {
    return("Odin Owns You All!");
}

Viking.prototype.battleCry();

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
    Soldier.call(this, health, strength); 
}

Saxon.prototype.attack = function () {
    Saxon.call (this.strength) ;
}

Saxon.prototype.attack();

Saxon.prototype.receiveDamage = function (thedamage) {
    this.health -= thedamage;
    if (this.health > 0) {
        return ("A Saxon has received " + thedamage + " points of damage");
    }
    if (this.health <= 0) {
        return ("A Saxon has died in combat");
    }
}

// War
function War() {}
