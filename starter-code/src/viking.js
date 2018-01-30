// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.attack = this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.damage = damage;
    this.health -= this.damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
    this.damage = damage;
    this.health -= this.damage;

    return this.health > 0 ? this.name + " has received " + this.damage + " points of damage" : this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
    this.damage = damage;
    this.health -= this.damage;

    return this.health > 0 ? "A Saxon has received " + this.damage + " points of damage" : "A Saxon has died in combat";
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    this.viking = viking;
    this.vikingArmy.push(this.viking);
};

War.prototype.addSaxon = function(saxon) {
    this.saxon = saxon;
    this.saxonArmy.push(this.saxon);
};

War.prototype.vikingAttack = function() {
    Saxon.prototype.receiveDamage(Viking.prototype.attack);
    
};

War.prototype.saxonAttack = function() {
    
};

War.prototype.showStatus = function() {
    
};