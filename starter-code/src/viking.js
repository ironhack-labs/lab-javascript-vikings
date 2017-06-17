// Pair Programming
// Dennis Barriere
// Arnau Guadall


// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function (){
    return this.strength;
}

Soldier.prototype.reciveDamage = function (dmgRecived){
    this.health -= dmgRecived;
}

var chuckNorris = new Soldier(300,150);

/*console.log(chuckNorris.attack());
chuckNorris.reciveDamage(10);
console.log(chuckNorris.health);*/

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

// Inherits from Soldier
Viking.prototype = Object.create(Soldier.prototype);

var ragnar = new Viking('Ragnar', 100, 90);
var vik2 = new Viking('vik2', 100, 20);
var vik3 = new Viking('vik3', 100, 40);

/*console.log("Ragnar attack: ",ragnar.attack());*/

Viking.prototype.reciveDamage = function (dmgRecived) {
    this.health -= dmgRecived;
    if (this.health > 0 ) {
        return this.name + " has received " + dmgRecived + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }
}

/*console.log(ragnar.reciveDamage(120));
console.log(ragnar.health);*/

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";  
}

/*console.log(ragnar.battleCry());*/

// Saxon

function Saxon (health, strength) {
    Soldier.call(this, health, strength); 
}

// Inherits from Soldier
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.reciveDamage = function (dmgRecived){
    this.health -= dmgRecived;
    if (this.health > 0){
        return "A Saxon has recived " + dmgRecived + " points of damage.";
    } else {
        return " A Saxon has died in combat";
    }
}

var edwin = new Saxon(70,40);
var sax2 = new Saxon(100,90);

/*console.log("edwin strength " + edwin.strength);
console.log(edwin.reciveDamage(120));*/

// War
function War () {
    this.vikingArmy = [];
    this.saxonArmy = [];
} 

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var result = randomSaxon.reciveDamage(randomViking.strength);
    if (randomSaxon.health <= 0 ) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    }
    return result;
};

War.prototype.saxonAttack = function() {
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var result = randomViking.reciveDamage(randomSaxon.strength);
    if (randomViking.health <= 0 ) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    }
    return result;
};

War.prototype.showStatus = function() {
    if (this.saxonArmy.length === 0 ) {
        return "Vikings have won the war of the century!";
    } else if(this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
};

var medievalWar = new War();
medievalWar.addViking(ragnar);
medievalWar.addViking(Floki);
medievalWar.addViking(vik3);
medievalWar.addSaxon(edwin);
medievalWar.addSaxon(sax2);
/*wwII.vikingAttack();
wwII.saxonAttack();*/