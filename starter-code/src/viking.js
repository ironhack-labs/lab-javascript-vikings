// Soldier
function Soldier( health, strength ) {
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage = function( theDamage ) {
    this.health -= theDamage;
};



/////////////////////////////////////////////////////////

// Viking
function Viking( name, health, strength ) {
    Soldier.call( this, health, strength );
    this.name = name;
};

Viking.prototype = Object.create( Soldier.prototype );

Viking.prototype.receiveDamage = function( theDamage ) {
    this.health -= theDamage;
    if( this.health > 0 ) {
        return this.name + " has received " + theDamage + " points of damage";
    }
    else {
        return this.name + " has died in act of combat";
    }
};

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
};

var harald = new Viking( "Harald", 100, 80 );
var sigr = new Viking( "Sigr", 60, 110 );
var bjorn = new Viking( "Bjorn", 90, 90 );


/////////////////////////////////////////////////////////

// Saxon
function Saxon( health, strength ) {
    Soldier.call( this, health, strength );
};

Saxon.prototype = Object.create( Soldier.prototype );

Saxon.prototype.receiveDamage = function( theDamage ) {
    this.health -= theDamage;
    if( this.health > 0 ) {
        return "A Saxon has received " + theDamage + " points of damage";
    }
    else {
        return "A Saxon has died in combat";
    }
};

var georges = new Saxon( 80, 60 );
var harry = new Saxon( 50, 60 );
var charles = new Saxon( 55, 60 );


/////////////////////////////////////////////////////////

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};

War.prototype.addViking = function( Viking ) {
    this.vikingArmy.push( Viking );
};

War.prototype.addSaxon = function( Saxon ) {
    this.saxonArmy.push( Saxon );
};

var war = new War();

war.addViking( harald );
war.addSaxon( georges );
console.log( this.vikingArmy );
console.log( this.saxonArmy );


War.prototype.vikingAttack = function() {
    // Pick a random number between 0 and saxonArmy.length
    Math.floor( Math.random() * saxonArmy.length+1);
    // select a random Saxon based on the random number
    
    // Pick a random number between 0 and vikingArmy.length
    // select a random Viking based on the random number

    // Inflict given Viking strength to given Saxon health
    // Remove Saxon from army if he dies
    // Return "result of calling blablabla"
};