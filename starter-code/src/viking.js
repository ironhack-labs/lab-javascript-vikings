// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    // if(this.name.length === 0) { return;}

};

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking.prototype.receiveDamage

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;

    if(this.health <= 0){
        return this.name + " has died in act of combat";
    } else {
        return this.name + " has received " + damage + " points of damage";
    }
};

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health <= 0){
        return "A Saxon has died in combat";
    } else {
        return "A Saxon has received " + damage + " points of damage";
    }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    // var viking = new Viking;
    this.vikingArmy.push(viking);

};

War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);

};

War.prototype.vikingAttack = function() {
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.vikingArmy.length);
    var attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if(this.saxonArmy[randomSaxon].health <= 0) { this.saxonArmy.splice(randomSaxon, 1);}
    return attack;
};

War.prototype.saxonAttack = function() {
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.vikingArmy.length);

    var attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if(this.vikingArmy[randomViking].health <= 0) { this.vikingArmy.shift();}
    return attack;
};

War.prototype.showStatus = function() {
    if(this.saxonArmy.length === 0) { return "Vikings have won the war of the century!";};
    if(this.vikingArmy.length === 0 ) { return "Saxons have fought for their lives and survive another day...";};
    return "Vikings and Saxons are still in the thick of battle.";

};




// addViking()
// addSaxon()
// vikingAttack()
// saxonAttack()
// showStatus()

