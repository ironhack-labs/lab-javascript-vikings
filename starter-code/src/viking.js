// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function() {
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

// Viking
function Viking(name, healthArg, strengthArg) {

    Soldier.call(this, healthArg, strengthArg)
    this.name = name;
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }

    this.battleCry = function() {
        return "Odin Owns You All!";
    }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0){
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
    this.addViking = function(Viking){
        this.vikingArmy.push(Viking);
    } 
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon);
    } 
    this.vikingAttack = function() {
        this.randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        this.randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        var result = this.randomSaxon.receiveDamage(this.randomViking.strength);

        if (this.randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(this.randomSaxon), 1);
        };

        return result;
       
    }

    this.saxonAttack = function () {
        this.randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        this.randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        var result = this.randomViking.receiveDamage(this.randomSaxon.strength);

        if (this.randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(this.randomViking), 1);
        };

        return result;
    }
    // showStatus()

}
