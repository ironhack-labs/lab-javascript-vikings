function Soldier (health, strength){
  
  this.health = health;
  this.strength = strength;


  this.receiveDamage = function(health){
   var receivedDamage=0;
   this.health -= receivedDamage;
   return receivedDamage;
 };
 
}


function Viking (health, strength ,name) {
  
  Soldier.call(this, health, strength);
  this.vikingName =name;
  this.battleCry="Odin Owns You All!";
  this.showReceivedDamage = function (){
    console.log(vikingName, " has received" , receivedDamage, "points of damage");
  };
  if (health <=0) {console.log(name, " has died in battle")}
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor =Viking;

var viking1 = new Viking (100,100, "John");
var viking2 = new Viking (100,100, "Steve");
var viking3 = new Viking (100,100, "Marc");
var vikingArmy = [ viking1, viking2, viking3]




function Saxon (health, strength){
  Soldier.call (this, health, strength);
  if (health <=0) {console.log( "A Saxon has died in battle")}
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

var saxon1= new Saxon(80,80);
var saxon2= new Saxon(80,80);
var saxon3= new Saxon(80,80);
var saxonArmy = [ saxon1, saxon2, saxon3]



  
  function addVikings (){
    var numberOfReqVikings=prompt("How many more vikings do we need?")
    for (var i =0; i<numberOfReqVikings; i++ ) {
  vikingArmy.push(new Viking(100, 100,"vikingName 1"+i))
  }
  console.log(vikingArmy)

}
//addVikings()

  function addSaxons (){
    var numberOfReqSaxons=prompt("How many more Saxons do we need?");
    for (var i =0; i<numberOfReqSaxons; i++ ) {
    saxonArmy.push(new Saxon(80, 80))[i]
    }
  
console.log(saxonArmy)
}
//addSaxons()

//an attackfunction with attack (e.g. saxon1) and a victim (e.g. viking1)
var attackfunction = function (attacker, victim) { 
    var result= 0;
    result =victim.health-attacker.strength;
    attacker.strength =0;
    return result
  
  } 
  
attackfunction(viking1, saxon1)