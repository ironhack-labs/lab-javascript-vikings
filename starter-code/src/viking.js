// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
//Soldier methods
Soldier.prototype.attack = function(){
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

// inherit methods from base Soldier
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    }
    if(this.health <= 0){
        return this.name + " has died in act of combat";
    }
}
//Unique method for Viking
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

// inherit methods from base Soldier
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    }
    if(this.health <= 0){
        return "A Saxon has died in combat";
    }
}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
    var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    var result = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
    if(result === "A Saxon has died in combat"){
        this.saxonArmy.splice(saxonRandom, 1);
    }
    return result;
}
War.prototype.saxonAttack = function(){
    var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    var result = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);
    if(result === this.vikingArmy[vikingRandom].name + " has died in act of combat"){
        this.vikingArmy.splice(vikingRandom, 1);
    }
    return result;
}
War.prototype.showStatus();
