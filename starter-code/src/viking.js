
// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function (){
    return  this.strength;
} 

Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
}

// pour faire le lien entre le viking et l'objet soldier 
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return (this.name + " has received " + damage + " points of damage");
    } else {
        return (this.name + " has died in act of combat")
    }
} 

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!"
}

// pour faire le lien entre le saxon et l'objet soldier 
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return ("A Saxon has received " + damage + " points of damage");
    } else {
        return ("A Saxon has died in combat")
    }
} 


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (Viking){
    this.vikingArmy.push(Viking);
} 

War.prototype.addSaxon = function (Saxon){
    this.saxonArmy.push(Saxon);
} 
// vicking attack
War.prototype.vikingAttack = function (){
    var rndSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var rndViking = Math.floor(Math.random() * this.vikingArmy.length);
    var result = this.saxonArmy[rndSaxon].receiveDamage(this.vikingArmy[rndViking].strength); 

    if (this.saxonArmy[rndSaxon].health <= 0) {
        this.saxonArmy.splice(rndSaxon, 1);
    }
    return result;
} 

// saxon attack
War.prototype.saxonAttack = function (){
    var rndSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var rndViking = Math.floor(Math.random() * this.vikingArmy.length);
    var result = this.vikingArmy[rndViking].receiveDamage(this.saxonArmy[rndSaxon].strength); 

    if (this.vikingArmy[rndViking].health <= 0) {
        this.vikingArmy.splice(rndViking, 1);
    }
    return result;
} 

War.prototype.showStatus = function (){
    if (this.saxonArmy.length == 0 ) {
        return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survive another day...";
    }
    else 
        return "Vikings and Saxons are still in the thick of battle.";
} 