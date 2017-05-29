// Soldier
function Soldier (health, strenght) {
  this.health = health;
  this.strenght = strenght;
  this.recieveDamage = function (damage){
  this.health = this.health - damage;
  };
  this.attack = function (){
    return Soldier.strenght;
  };
}
// Viking
function Viking (name, health, strenght) {
  this.name = name;
  Soldier.call(this, health, strenght);
  this.battlecry = function(){
    console.log("Odin Owns You All");
    } ;
  this.recieveDamage = function (damage){
    this.health = this.health - damage;
    if (Viking.health === 0){
      console.log(name + " has died in act of combat");}
    else {
      console.log(name + " has recieved " + damage + " points of damage");}
    };
  }

// Saxon
function Saxon (health, strenght) {
  Soldier.call(this, health);
  this.strenght = 7;
  this.battlecry = function(){
    console.log("Soy SAJÖOOOOOOON");
    } ;

  this.recieveDamage = function (damage){
    this.health = this.health - damage;
    if (Saxon.health === 0){
      console.log("A Saxon has died in combat");}
    else {
      console.log("A Saxon has recieved" + damage + " points of damage");}
    };
}



// War

function  War(){

  this.vikingArmy =[];
  this.saxonArmy = [];
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack= function(){
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length )];
    var randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
    //randomSaxon.health -= randomViking.strength;
    randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0) { this.saxonArmy.splice(randomSaxon,1);}
    //return (randomSaxon.health <= 0) ? this.saxonArmy.splice(randomSaxon,1) : ;
  };

  this.saxonAttack = function(){
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length )];
    var randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
    //randomSaxon.health -= randomViking.strength;
    randomViking.receiveDamage(randomSaxon.strength);
      if (randomSaxon.health <= 0) { this.saxonArmy.splice(randomSaxon,1);}
};

this.showStatus= function(){
   if (!(this.vikingArmy[0]))console.log('Saxons have fought for their lives and survive another day...');
   if (!(this.saxonArmy[0]))console.log('Vikings have won the war of the century!');
   if (this.vikingArmy[0]&&this.saxonArmy[0]) console.log('Vikings and Saxons are still in the thick of battle.');
  };

}

//Play

  var war= new War();
  var olaf = new Viking('Olaf',100, 10);
  var rollo = new Viking('Rollo',50, 8 );
  war.addViking(olaf);
  war.addViking(rollo);

  var saxonsNumbers = 5;
  for (var i = 0; i < saxonsNumbers ; i++) {
  var randomHealth = Math.round(Math.random()*15);
  var randomStrenght = Math.round(Math.random()*5);
  war.addSaxon(new Saxon(randomHealth,randomStrenght));
  }

console.log('WAR IS COMING!');
  while (war.saxonArmy[0] && war.vikingArmy[0]) {
    war.vikingAttack();
    if (war.saxonArmy[0]) war.saxonAttack();
    war.showStatus();
  }
console.log('Finally, the war ends!');




//var Rulfo = new Viking("Rulfo");
//var Saxon1 = new Saxon();
//var Saxon2 = new Saxon();



//var termopilas = new War();
//termopilas.addViking(Odin);
//termopilas.addViking(Rulfo);
//termopilas.addSaxon(Saxon1);
//termopilas.addSaxon(Saxon2);
//termopilas.saxonAttack();

//console.log(saxonArmy);
//console.log(vikingArmy);
