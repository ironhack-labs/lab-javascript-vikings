// SOLDIER
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
};



//VIKING
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) {        
        return this.name + ' has received ' + damage + ' points of damage';
    } else{
        return this.name + ' has died in act of combat';
    }
};

Viking.prototype.battleCry = function(){
    return  "Odin Owns You All!";
};


var viking1  = new Viking('Harald', 100, 60);
var viking2  = new Viking('Fran', 100, 80);
var viking3  = new Viking('Pepe', 100, 10);
viking1.attack();
viking1.receiveDamage(30);




// //SAXON
function Saxon( health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) {        
        return 'A Saxon has received ' + damage + ' points of damage and have ' + this.health + ' points of live ';
    } else{
        return 'A Saxon has died in combat';
    }
};

var saxon1  = new Saxon(100, 200);
var saxon2  = new Saxon(100, 3);
var saxon3  = new Saxon(100, 10);
viking1.attack();
viking1.receiveDamage(30);



// WAR
function War() {
    
    
}

//Variables
War.prototype.vikingArmy = [];
War.prototype.saxonArmy = [];

//Methods
War.prototype.addViking = function(Viking){    
    war.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon){    
    war.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function(){    
    var randomNum = Math.floor(Math.random()* war.vikingArmy.length); randomViking = war.vikingArmy[randomNum]; randomSaxon  = war.saxonArmy[randomNum];  
   
    if (randomViking.health >= 0) {
        return 'The viking named ' + randomViking.name + ' was attacked by a saxon called ' + randomSaxon.name + ' with a strength of ' + randomSaxon.strength + ' and ' + randomViking.name + ' has now ' + (randomViking.health-=randomSaxon.strength) + ' points of life';
    } else{
        console.log(randomViking.health);
        console.log(randomSaxon.health);
        war.vikingArmy.pop(randomNum);
        return 'The viking named ' + randomViking.name + ' is now dead and out of the army';
    }
};
War.prototype.saxonAttack = function(){    
    var randomViking = war.vikingArmy[Math.floor(Math.random()* war.vikingArmy.length)];
    var randomSaxon  = war.saxonArmy[Math.floor(Math.random()* war.saxonArmy.length)];
    
    return 'The saxon named ' + randomSaxon.name + ' was attacked by a viking called ' + randomViking.name + ' with a strength of ' + randomViking.strength + ' and ' + randomSaxon.name + ' has now ' + (randomSaxon.health-=randomViking.strength) + ' points of life';
};
War.prototype.showStatus = function(){    
};


var war = new War();

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
console.log(war.vikingAttack());
console.log(war.saxonAttack());


