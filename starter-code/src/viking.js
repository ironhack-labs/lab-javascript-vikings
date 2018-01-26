// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health-=damage;
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
    this.health-=damage;
    if (this.health>0){
        return this.name + " has received " + damage + " points of damage";
    } else if (this.health<=0){
        return this.name + " has died in act of combat"
    }
}

Viking.prototype.attack = function(){
    return this.strength;
}

Viking.prototype.battleCry= function(){
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    this.health-=damage;
    if (this.health>0){
        return "A Saxon has received " + damage + " points of damage";
    } else if (this.health<=0){
        return "A Saxon has died in combat"
    }
}

Saxon.prototype.attack = function(){
    return this.strength;
}

// War
function War() {
    this.addViking = function(viking){
        this.vikingArmy.push(viking);
    };
    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    };
    this.vikingAttack = function(){
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if (this.saxonArmy[randomSaxon].health<=0) {
            this.saxonArmy.splice(randomSaxon,1);
            return "A Saxon has died in combat";
        } else {
            return "A Saxon has received " + this.vikingArmy[randomViking].strength + " points of damage";
        }
    };
    this.saxonAttack = function(){
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if (this.vikingArmy[randomViking].health<=0) {
            var message =this.vikingArmy[randomViking].name + "has died in combat";
            this.vikingArmy.splice(randomViking,1);
            return message;
        } else {
            return this.vikingArmy[randomViking].name + " has received " + this.saxonArmy[randomSaxon].strength + " points of damage";
        }
    };
    this.showStatus = function(){
        if (this.vikingArmy.length===0){
           return "Saxons have fought for their lives and survive another day...";
        } else if (this.saxonArmy.length===0){
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
    this.vikingArmy = [];
    this.saxonArmy = [];
}
