// Soldier
function Soldier(healthArg,strengthArg) {
    this.health=healthArg;
    this.strength=strengthArg;

}

Soldier.prototype.attack = function (){
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}
// Viking
function Viking(naming,health,strength) {
    Soldier.call(this,health,strength);
    this.name=naming;
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;

Viking.prototype.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health >0) { 
        return this.name +' has received '+ damage +' points of damage';
    } else {
        return this.name + ' has died in act of combat';
    }
}

Viking.prototype.battleCry = function () {
    return 'Odin Owns You All!';
} 

// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health >0) { 
        return 'A Saxon has received '+ damage +' points of damage';
    } else {
        return 'A Saxon has died in combat';
    }
}

// War
function War() {
    vikingArmy =[];
    saxonArmy =[];
}

War.prototype.addViking = function (vikingSoldier){
    War.vikingArmy.push(vikingSoldier);
}

War.prototype.addSaxon = function (saxonSoldier){
    War.saxonArmy.push(saxonSoldier);
}

War.prototype.vikingAttack = function (){
    var saxonSoldierIndex=Math.floor(Math.random()*War.saxonArmy.length);
    var vikingSoldierIndex=Math.floor(Math.random()*War.vikingArmy.length);
    var returnMessage ='';
    returnMessage = this.saxonArmy[saxonSoldierIndex].receiveDamage(this.vikingArmy[vikingSoldierIndex].strength);   

    var deadSaxonSoldierIndex = this.saxonArmy.findIndex(function (saxonSoldier){ return saxonSoldier.health <= 0;})
    delete(this.saxonArmy[deadSaxonSoldierIndex]);

    return returnMessage;
}
War.prototype.saxonAttack = function (){
    var saxonSoldierIndex=Math.floor(Math.random()*War.saxonArmy.length);
    var vikingSoldierIndex=Math.floor(Math.random()*War.vikingArmy.length);
    var returnMessage ='';
    returnMessage = this.vikingArmy[vikingSoldierIndex].receiveDamage(this.saxonArmy[saxonSoldierIndex].strength);   

    var deadVikingSoldierIndex = this.vikingArmy.findIndex(function (vikingSoldier){ return vikingSoldier.health <= 0;})
    delete(this.vikingArmy[deadVikingSoldierIndex]);
    
    return returnMessage;
}

War.prototype.showStatus = function (){
    if( this.saxonArmy.length >0 && this.vikingArmy.length ===0){
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length === 0 && this.vikingArmy.length >0) {
        return "Vikings have won the war of the century!";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }

}