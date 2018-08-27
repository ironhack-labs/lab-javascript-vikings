// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

//Viking

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }
    this.battleCry = function (){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in combat";
        }
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
    }
War.prototype.addSaxon = function(saxon) {
this.saxonArmy.push(saxon);
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day...";
    }
    else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}

