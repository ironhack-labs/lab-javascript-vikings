// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function (){
    return this.strength
}

Soldier.prototype.receiveDamage = function (dama){
    this.health = this.health - dama;
}


// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
};

var newViking = new Viking("Brynhild", 100, 300);
console.log(newViking);
console.log(newViking.strength);

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (dama){
    this.health -= dama;
    if ( this.health > 0){
        return this.name + " has received " + dama + " points of damage"
    } else {
        return this.name + " has died in act of combat"}

};

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (dama){
    this.health -= dama;
    if (this.health > 0){
        return "A Saxon has received " + dama + " points of damage"
    } else {
        return "A Saxon has died in combat"
    }
};

var newSaxon = new Saxon(50, 200)
console.log(newSaxon);
console.log(newSaxon.receiveDamage(50));
console.log(newSaxon.receiveDamage(10));
// War

var newSoldier = new Soldier(100, 200);
console.log(newSoldier);
var newSaxon = new Saxon(50, 200)
console.log(newSaxon);


//test field
function War() {

// Empty army
    this.vikingArmy = [];
    this.saxonArmy = [];

// Add a viking and a Saxon to the arty
    war.prototype.addViking = function(viking){
        this.vikingArmy.push(viking);
    };

    war.prototype.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    };

    //Random select one
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var randomSaxon = this.this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    war.prototype.vikingAttack() = function(){
        receiveDamage(randomSaxon) = randomViking.strength;
        //remove dead Saxon
        if (randomSaxon.health > 0){
            return receiveDamage(randomSaxon);
        }
    }

};
