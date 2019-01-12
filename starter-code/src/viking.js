// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
    }
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg,strengthArg);
    this.name = nameArg;

    this.receiveDamage = function(damage) {
        this.health -= damage;

        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage"
        } else {
            return this.name + " has died in act of combat"
        }
    }

    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);

    this.receiveDamage = function(damage) {
        this.health -= damage;

        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage"
        } else {
            return "A Saxon has died in combat"
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(viking){
        this.vikingArmy.push(viking);
    }

    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    }

    this.vikingAttack = function(){

        var saxonRandom = getSoldierRandom(this.saxonArmy);
        var vikingRandom = getSoldierRandom(this.vikingArmy);

        var saxonDied = saxonRandom.receiveDamage(vikingRandom.attack());

        
        if (saxonRandom.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonRandom), 1);
        }

        return saxonDied;
    }

    this.saxonAttack = function(){
        var saxonRandom = getSoldierRandom(this.saxonArmy);
        var vikingRandom = getSoldierRandom(this.vikingArmy);

        var vikingDied = vikingRandom.receiveDamage(saxonRandom.attack());
        console.log(vikingRandom.health)

        if (vikingRandom.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingRandom), 1);
        }

        return vikingDied;
    }

    function getSoldierRandom(soldierArmy){
        var position = Math.random() * (soldierArmy.length - 1);
        return soldierArmy[position];
    }

    this.showStatus = function(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
     
        }
    }
}

