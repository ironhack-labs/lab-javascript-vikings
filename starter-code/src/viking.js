// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

}

Soldier.prototype.attack = function() {
    console.log(this.attack);
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    console.log(this.receiveDamage);
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;


Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else if (this.health <= 0){
        return this.name + " has died in act of combat";
    };
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    Saxon.prototype.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in combat";
        };
}
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
    return;
}
War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
    return;
}

function randomSaxon(arr) {
    arr[Math.floor(Math.random() * arr.length)]
}

this.saxIndex = Math.floor(Math.random() * this.saxonArmy.length);


War.prototype.vikingAttack = function() {
    Saxon.receiveDamage() === Viking.strength;
    if ("A Saxon has died in combat") {
        
    }
}
War.prototype.saxonAttack = function() {

}
War.prototype.showStatus = function() {

}