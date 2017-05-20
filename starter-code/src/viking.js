// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
  }

}

// Viking
function Viking ( name, health, strength ) {
  Soldier.call( this, health, strength );
  this.name = name;
  this.receiveDamage = function(damage){
    //console.log(this.name);
    this.health = this.health - damage;
    if( this.health <= 0 ){ return this.name + " has died in combat"; }
    else{ return this.name + " has received " + damage + " points of damage"; }
  }
  this.battleCry = function(){
    return "Odin Owns You All";
  }
}

// Saxon
function Saxon ( health, strength ) {
  Soldier.call( this, health, strength );

  this.receiveDamage = function( damage ){
    this.health = this.health - damage;
    if( this.health <= 0 ){ return "A Saxon has died in combat" }
    else{ return "A Saxon has received " + damage + " points of damage"; }
  }

}

// War
  function War () {

  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function( Viking ){

    this.vikingArmy.push( Viking );
    console.log(this.vikingArmy);
  }
  this.addSaxon = function( Saxon ){
    this.saxonArmy.push( Saxon );
  }
  this.vikingAttack = function(){
    var randomIndexViking=Math.floor(Math.random() * this.vikingArmy.length);
    var currentViking = this.vikingArmy[randomIndexViking];
    var randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var currentSaxon  = this.saxonArmy[randomIndexSaxon];
    console.log(currentSaxon);
    var warMessage = currentSaxon.receiveDamage( currentViking.attack() );
    console.log(warMessage);
    if ( currentSaxon.health <= 0 ){
      this.saxonArmy.splice(randomIndexSaxon, 1);
      console.log("size of saxonArmy after last hit", this.saxonArmy.length);
    }
  }
  this.saxonAttack = function(){
    var randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var currentSaxon  = this.saxonArmy[randomIndexSaxon];
    var randomIndexViking=[Math.floor(Math.random() * this.vikingArmy.length)];
    var currentViking = this.vikingArmy[randomIndexViking];
    console.log(currentViking, currentSaxon);

    var warMessage = currentViking.receiveDamage( currentSaxon.attack() );
    console.log(warMessage);
    if ( currentViking.health <= 0 ){
      console.log("dying");
      this.vikingArmy.splice(randomIndexViking, 1);
      console.log("size of vikingArmy after last hit", this.vikingArmy.length);
    }

  }/*
  this.showStatus = function(){

    if ( this.vikingArmy.length === 0 ){
      return "Saxons have fought for their lives and survive another day...";

    }
    else if ( this.saxonArmy.length === 0 ){
      return "Vikings have won the war of the century!";
    }
    else if (( this.vikingArmy.length != 0 ) && ( this.saxonArmy.length != 0 )){
      return "Vikings and Saxons are still in the thick of battle."
    }

  }*/

}


var war = new War();
createWarriors();

function createWarriors(){
  console.log("inside createWarrios");
  //var war = new War();
  vikingNames=["Thor","Ragnar", "Ubbe", "Ivar", "Sigurd", "Bjorn"];
  createVikings(vikingNames);
  createSaxons( );
  //console.log(war.vikingArmy);
  //console.log(war.saxonArmy);
  goToWar();

}

function createVikings(vikingNames){

  for( i=0; i<vikingNames.length; i++ ){
    var name=vikingNames[i];
    var strength = Math.floor(Math.random() * Math.random() * 300);
    var health = Math.floor(Math.random() * Math.random() * 30);
    war.addViking(new Viking( name, health, strength ));
  }
}

function createSaxons(){
for( i=0; i<10; i++ ){
  var strength = Math.floor(Math.random() * Math.random() * 100);
  var health = Math.floor(Math.random() *  Math.random() * 50);
  war.addSaxon (new Saxon( health, strength ));
  }
}

//goToWar();
function goToWar(){
  console.log(war.vikingArmy.length);
  console.log(war.saxonArmy.length);
  while(( war.vikingArmy.length >= 0 ) && (war.saxonArmy.length >= 0)){
    console.log("go to war -> vikingArmy", war.vikingArmy.length);
    console.log("go to war -> saxonArmy", war.saxonArmy.length);

    if(war.vikingArmy.length === 0){
      console.log("The War is over, All Vikings are dead, the Saxons won!");
      return;
    }
    else if(war.saxonArmy.length === 0){
      console.log("The War is over, All Saxons are dead, the Vikings won!");
      return;
    }
    war.saxonAttack();
    if(war.vikingArmy.length === 0){
      console.log("The War is over, All Vikings are dead, the Saxons won!");
      return;
    }
    else if(war.saxonArmy.length === 0){
      console.log("The War is over, All Saxons are dead, the Vikings won!");
      return;
    }
    war.vikingAttack();
  }

}
