// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;  
};

// Viking
function Viking(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)

    this.name = name;
}

// inherit methods from base Vehicle
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0){
        return this.name + ' has received '+ damage + ' points of damage';
    } else{
        return this.name + ' has died in act of combat'; 
    }
};

Viking.prototype.battleCry = function(){
    return 'Odin Owns You All!';
};


// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
}

// inherit methods from base Vehicle
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
    this.health -= damage;    
    if(this.health > 0){
        return 'A Saxon has received '+ damage + ' points of damage';
    } else{
        return 'A Saxon has died in combat'; 
    }
}

// War
function War() {
   this.vikingArmy = [];
   this.saxonArmy =[];
}

War.prototype.addViking = function(viking){
   this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    var numRandomSx = Math.floor(Math.random() * this.saxonArmy.length);
    var randomSaxon = this.saxonArmy[numRandomSx];
    
    var numRandomVk = Math.floor(Math.random() * this.vikingArmy.length);
    var randomViking = this.vikingArmy[numRandomVk];

    var result = randomSaxon.receiveDamage(randomViking.strength);
    
    return result;
}

War.prototype.saxonAttack = function(){
    var numRandomSx = Math.floor(Math.random() * this.saxonArmy.length);
    var randomSaxon = this.saxonArmy[numRandomSx];
    
    var numRandomVk = Math.floor(Math.random() * this.vikingArmy.length);
    var randomViking = this.vikingArmy[numRandomVk];

    return randomViking.receiveDamage(randomSaxon.strength);
}

War.prototype.showStatus = function(){
    if(!this.saxonArmy){

        return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy){
        return 'Saxons have fought for their lives and survive another day...';
    } else{
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}
