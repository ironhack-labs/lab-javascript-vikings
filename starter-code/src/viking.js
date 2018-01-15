// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function () {
        return this.strength;
    }
    this.receiveDamage = function (damage) {
        this.health = this.health - damage;
    }
}

// Viking
function Viking(name, healthArg, strengthArg) {
    this.name = name;
    Soldier.call(this, healthArg, strengthArg);
    this.receiveDamage = function (damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return name + " has died in act of combat";
        } else {
            return name + " has received " + damage + " points of damage";
        }
    };
    this.battleCry = function () {
        return "Odin Owns You All!";
    };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.receiveDamage = function (damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return "A Saxon has died in combat";
        } else {
            return "A Saxon has received " + damage + " points of damage";
        }
    };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

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
        var vikingFighter = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var saxonDamaged = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        var fightResult = saxonDamaged.receiveDamage(vikingFighter.strength);
        
        if (saxonDamaged.health <=0) {
            var fallenWarrior = this.saxonArmy.indexOf(saxonDamaged);
            this.saxonArmy.splice(fallenWarrior, 1)
        };

        return 'A Saxon has died in combat';

    };
    this.saxonAttack = function () {
        var saxonFighter = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        var vikingDamaged = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var fightResult = vikingDamaged.receiveDamage(saxonFighter.strength);
        
        if (vikingDamaged.health <=0) {
            var fallenWarrior = this.vikingArmy.indexOf(vikingDamaged);
            this.vikingArmy.splice(fallenWarrior, 1)
        };

        return vikingDamaged.name + " has received " + saxonFighter.strength + " points of damage";

    };
    this.showStatus = function () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
