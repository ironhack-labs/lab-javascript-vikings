// Soldier
function Soldier(health, strength) { 
    this.health = health;
    this.strength = strength;
    this.attack = function () {
        return this.strength;
    };
    this.receiveDamage = function (damage) {
        this.health-=damage;
    };
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage) {
        this.health -= damage;
        return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
    };

    this.battleCry =  function() {
        return "Odin Owns You All!";
    };
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function (damage) {
        this.health -= damage;
        return this.health > 0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
    };
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (viking) {
        this.vikingArmy.push(viking);
    };
    this.addSaxon = function (saxon) {
        this.saxonArmy.push(saxon);
    };

    this.vikingAttack = function () {
        var message = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        var healtSaxon = this.saxonArmy[0].health
        var newArray = this.saxonArmy.filter(elemento => elemento.health > 0);
        this.saxonArmy = newArray;
        return message;
    };

    this.saxonAttack = function () {
        var message = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        var healtSaxon = this.vikingArmy[0].health
        var newArray = this.vikingArmy.filter(elemento => elemento.health > 0);
        this.vikingArmy = newArray;
        return message;
    };

    this.showStatus = function () {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day...";
        }

        return "Vikings and Saxons are still in the thick of battle.";
    };
}
//call(this, caracteristicas)