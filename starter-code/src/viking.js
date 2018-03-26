// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}


Soldier.prototype.attack = function(){
    return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
};

// Viking
function Viking(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
}



Viking.prototype.attack = function(){
    return this.strength;
};



Viking.prototype.receiveDamage = function (damage){
    this.health = this.health - damage ;
    if (this.health > 0){
        return (this.name + " has received " + damage + " points of damage")
    } else{
        return (this.name + " has died in act of combat");
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
} 

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype.attack = function(){
    return this.strength;
};



Saxon.prototype.receiveDamage = function (damage){
    this.health = this.health - damage ;
    if (this.health > 0){
        return ("A Saxon has received " + damage + " points of damage")
    } else{
        return ("A Saxon has died in combat");
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};


War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
    randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

    this.saxonArmy[randomSaxon].receiveDamage (this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0){
        this.saxonArmy.splice(randomSaxon,1);
        return 'A Saxon has died in combat'
    } else{
        return this.saxonArmy[randomSaxon].name + " has received " + this.vikingArmy[randomViking].strength + " points of damage"
    }
}

War.prototype.saxonAttack = function(){
    randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

    this.vikingArmy[randomViking].receiveDamage (this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0){
        this.vikingArmy.splice(randomViking,1);
        return 'A Viking has died in combat'
    } else{
        return this.vikingArmy[randomViking].name + " has received " + this.saxonArmy[randomSaxon].strength + " points of damage"
    }
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
