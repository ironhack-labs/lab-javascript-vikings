// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function () {
        return this.strength;
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
    }
}



// Viking

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
        if (damage < this.health) {
            this.health -= damage;
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }
}


Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage) {
        if (damage < this.health) {
            this.health -= damage;
            return "A Saxon has received " + damage + " points of damage";
        } else {
            this.health -= damage;
            return "A Saxon has died in combat";
        }
    }
}


// War

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(vikingObject){
    this.vikingArmy.push(vikingObject);
}

War.prototype.addSaxon = function(saxonObject){
    this.saxonArmy.push(saxonObject);
};

War.prototype.vikingAttack = function (){
    var getSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var theSaxon = this.saxonArmy[getSaxon];
    var getViking = Math.floor(Math.random()*this.vikingArmy.length);
    var theViking = this.vikingArmy[getViking];
    var attackFromViking = theSaxon.receiveDamage(theViking.attack());

    if (theSaxon.health < 0) {
        this.saxonArmy.splice(getSaxon, 1);
    }
   return attackFromViking;
};


// remove dead vikings from the army doesn't work

War.prototype.saxonAttack = function (){
    var getViking = Math.floor(Math.random()*this.vikingArmy.length);
    var theViking = this.vikingArmy[getViking];
    var getSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var theSaxon = this.saxonArmy[getSaxon];
    var attackFromSaxon = theViking.receiveDamage(theSaxon.attack());

        if (theViking.health <= 0) {
            this.vikingArmy.splice(getViking, 1);
        }
    
    return attackFromSaxon;
};


