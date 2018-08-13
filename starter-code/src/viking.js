// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damageArg) {
    this.health -= damageArg;
}

// Viking
function Viking (nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
    this.name = nameArg;
};

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damageArg) {
    this.health -= damageArg;
    if (this.health > 0) {
        return this.name + " has received " + damageArg + " points of damage";
    }
    return this.name + " has died in act of combat";
};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!"
};



// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg )
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damageArg) {
    this.health -= damageArg;
    if (this.health > 0) {
        return "A Saxon has received " + damageArg + " points of damage";
    }
    return "A Saxon has died in combat";
};

// War
function War() {
    this.vikingArmy = [],
    this.saxonArmy = []
}

War.prototype.addViking = function(vikingObj){
    this.vikingArmy.push(vikingObj);
};

War.prototype.addSaxon = function(saxonObj){
    this.saxonArmy.push(saxonObj);
};

War.prototype.vikingAttack = function(){
    var rdnS = Math.floor(Math.random() * this.saxonArmy.length);
    var rdnV = Math.floor(Math.random() * this.vikingArmy.length);    
    var result = this.saxonArmy[rdnS].receiveDamage(this.vikingArmy[rdnV].strength);
    this.saxonArmy = this.saxonArmy.filter(function(el){
        return el.health > 0;
    })
    return result;
};

War.prototype.saxonAttack = function(){    
    var rdnS = Math.floor(Math.random() * this.saxonArmy.length);
    var rdnV = Math.floor(Math.random() * this.vikingArmy.length);    
    var result = this.vikingArmy[rdnS].receiveDamage(this.saxonArmy[rdnV].strength);
    this.vikingArmy = this.vikingArmy.filter(function(el){
        return el.health > 0;
    })
    return result;
};

War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0 ) {
        return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0 ) {
        return "Saxons have fought for their lives and survive another day..."
    }
    else { return "Vikings and Saxons are still in the thick of battle."}
};


