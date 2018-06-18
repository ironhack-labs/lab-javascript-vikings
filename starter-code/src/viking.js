// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

}

// Viking
function Viking (nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


// Saxon
function Saxon(healthArg, strengthArg) { 
    Soldier.call(this, healthArg, strengthArg);

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



Soldier.prototype.attack = function() {
    return this.strength;

}


Soldier.prototype.receiveDamage = function(theDamage) {
    this.health = this.health-theDamage;

}


Viking.prototype.receiveDamage = function(theDamage) {
    this.health = this.health-theDamage;
    if (this.health<=0) {
        return (this.name + " has died in act of combat");
    }
    else
    {
        return (this.name + " has received " + Number(theDamage) + " points of damage")
    }

}


Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";

} 


Saxon.prototype.receiveDamage = function(theDamage) {
    this.health = this.health-theDamage;
    if (this.health<=0) {
        return ("A Saxon has died in combat");
    }
    else
    {
        return ("A Saxon has received " + Number(theDamage) + " points of damage")
    }

}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (oneViking) {
    this.vikingArmy.push(oneViking);
}

War.prototype.addSaxon = function (oneSaxon) {
    this.saxonArmy.push(oneSaxon);
}


// War.prototype.vikingAttack = function () {
//     var oneSaxon = 
//     var oneViking =

    
//     Viking.health = this.Viking.health - this.Saxon.health;
// }




// War.prototype.saxonAttack = function () {
//     this.
    
//     Viking.health = this.Viking.health - this.Saxon.health;
// }



