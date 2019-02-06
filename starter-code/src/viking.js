//------------------- Soldier------------------------------
function Soldier(health, strength) {
    //expect(Soldier.length).toEqual(2);
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}


//---------------------- Viking--------------------------------

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
     this.health -= damage;
    if (this.health > 0) {
        console.log(this.name + " has received DAMAGE point " + this.health + " points of damage");
    }
    else {
        console.log(this.name + "has died in act of combat");

    }
}

Viking.prototype.battlecry = function(){
    return "Odin Owns You All!" ;
}

var viking = new Viking("Hans", 50, 30);
var viking1 = new Viking("Fred", 50, 30);
var viking2 = new Viking("George", 50, 30);
var viking3 = new Viking("Lara", 50, 30);
var viking4 = new Viking("Mars", 50, 30);
//viking.receiveDamage(6);


//------------------------- Saxon
function Saxon( health, strength) {
    Soldier.call(this, health, strength);
     }
     Saxon.prototype = Object.create(Soldier.prototype);  

Saxon.prototype.receiveDamage = function (damage) {
     this.health -= damage;
    if (this.health > 0) {
        console.log(" A Saxon has received " + this.health + " damage");
    }
    else {
        console.log( "A Saxon has died in combat");

    }
}
var saxon1 = new Saxon( 50, 30);
var saxon2 = new Saxon( 30, 10);
var saxon3 = new Saxon( 20, 10);
var saxon4 = new Saxon( 25, 20);
var saxon5 = new Saxon( 35, 25);
//saxon.receiveDamage(50);

//---------------Creating  War-----------
function War() { 
    this.saxonArmy = [];
    this.vikingArmy= []; 

}

War.prototype.addViking = function (Viking) {
    this.vikingArmy.push(Viking) ;
   
}

War.prototype.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);
   
}
War.prototype.vikingAttack = function () {
    var saxonAttackedIndex = Math.floor(Math.random()*(this.saxonArmy.length));
    var vikingAttackedIndex = Math.floor(Math.random()*this.vikingArmy.length)
    this.saxonArmy[saxonAttackedIndex].receiveDamage(this.vikingArmy[vikingAttackedIndex].strength);
    if (this.saxonArmy[saxonAttackedIndex].health <= 0){
        this.saxonArmy.splice(saxonAttackedIndex,1);
    }

    return "The strength of the Viking is " + this.vikingArmy[vikingAttackedIndex].strength;
   
}
War.prototype.saxonAttack = function () {
    var attackedVikingIndex = Math.floor(Math.random()*(this.vikingArmy.length));
    var saxonAttackedIndex = Math.floor(Math.random()*(this.saxonArmy.length));
    this.vikingArmy[attackedVikingIndex].receiveDamage(this.saxonArmy[saxonAttackedIndex].strength);
    if (this.vikingArmy[attackedVikingIndex].health <= 0){
        this.vikingArmy.splice(attackedVikingIndex,1);
    }

    return "The strength of the Saxon is " + this.saxonArmy[saxonAttackedIndex].strength;
   
}
War.prototype.showStatus = function () {
    if(this.vikingArmy.length==0){
        return "Saxons have fought for their lives and survive another day...";
       
    }
    if (this.saxonArmy.length == 0 ){
        return "Vikings have won the war of the century!";       
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
        return "Vikings and Saxons are still in the thick of battle.";
    }
   
}

war = new War();
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);
war.addSaxon(saxon5);
war.addViking(viking);
war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);
console.log(war.saxonArmy);
console.log(war.vikingArmy);
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());

