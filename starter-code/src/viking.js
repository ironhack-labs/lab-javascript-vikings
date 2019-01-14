// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}


// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    }
    else {
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    }
    else {
        return "A Saxon has died in combat";
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(vikingAdded){
    this.vikingArmy.push(vikingAdded);
}

War.prototype.addSaxon = function(saxonAdded){
    this.saxonArmy.push(saxonAdded);
}

War.prototype.vikingAttack = function(){
    saxonCombattant = Math.floor(Math.random() * this.saxonArmy.length);
    vikingCombattant = Math.floor(Math.random() * this.vikingArmy.length);

    this.saxonArmy[saxonCombattant].receiveDamage(this.vikingArmy[vikingCombattant].strength);

    if(this.saxonArmy[saxonCombattant].health < 0)
    {
        this.saxonArmy.splice(saxonCombattant, 1);
    }
}

War.prototype.saxonAttack = function(){
    saxonCombattant = Math.floor(Math.random() * this.saxonArmy.length);
    vikingCombattant = Math.floor(Math.random() * this.vikingArmy.length);

    this.vikingArmy[vikingCombattant].receiveDamage(this.saxonArmy[saxonCombattant].strength);

    if(this.vikingArmy[vikingCombattant].health < 0)
    {
        this.vikingArmy.splice(vikingCombattant, 1);
    }
}

War.prototype.showStatus = function(){
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    }
    else{
        return "Vikings and Saxons are still in the thick of battle.";
    }
}