// Soldier
function Soldier(health, strength) {
    this.health = health ;
    this.strength = strength;
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

// War
function War() {
    this.vikingArmy = []; 
    this.saxonArmy = [];
}

//Extend to Heritage
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//Soldier Methods
Soldier.prototype.attack = function (){
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage){
   this.health = this.health - damage;
}

//Viking Methods
Viking.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
    if (this.health>0){
        return this.name + ' has received ' + damage + ' points of damage';
    }
    else {
        return this.name + ' has died in act of combat';
    }
}

Viking.prototype.battleCry = function (){
    return 'Odin Owns You All!';
}

//Saxon Methods
Saxon.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
    if (this.health>0){
        return 'A Saxon has received ' + damage + ' points of damage';
    }
    else {
        return 'A Saxon has died in combat';
    }
}

//War Methods
War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var result = saxon.receiveDamage(viking.strength);
    if (saxon.health<=0){
        arrayRemove(this.saxonArmy, saxon);
    }
    return result;
}

War.prototype.saxonAttack = function(){
    var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    console.log(saxon, viking);
    var result = viking.receiveDamage(saxon.strength);
    if (viking.health<=0){
        arrayRemove(this.vikingArmy, viking);
    }
    return result;
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length===0){
        return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length===0){
        return 'Saxons have fought for their lives and survive another day...';
    }
    if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1){
        return 'Vikings and Saxons are still in the thick of battle.';
    }
}

function arrayRemove(arr, value) {

return arr.splice(arr.indexOf(value));

 }