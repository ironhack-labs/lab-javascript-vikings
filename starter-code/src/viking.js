// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
}
// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
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
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
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


War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    var saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    if (saxon.health < viking.strength) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1);
    }

    return saxon.receiveDamage(viking.attack());
}

// schnellere Variante: 

// War.prototype.vikingAttack = function(){
//     var randomIdxSaxon = Math.random()*saxonArmy.length;
//     var randomIdxViking = Math.random()*vikingArmy.length;

//     var saxon = saxonArmy[randomIdxSaxon];
//     var viking = vikingArmy[randomIdxViking];

//     if (saxon.health < viking.strength) {
//         this.saxonArray.splice(saxonArmy.indexOf(saxon),1)
//     }
//     return saxon.receiveDamage(viking.strength);
// }

War.prototype.saxonAttack = function(){
    var saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    var result = viking.receiveDamage(saxon.attack());

    if (viking.health < saxon.strength) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1);
    }

    return result;
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0){
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0){
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}

