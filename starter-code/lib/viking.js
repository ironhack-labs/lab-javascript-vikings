// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };


function Soldier (health, strength, receiveDamage){
  this.health = health;
  this.strength = strength;
  this.receiveDamage = 0;
}

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.hitTaken = function (attacker){
  var damage = (Math.floor(Math.random() * this.health));
  this.receiveDamage =+ damage;
  return this.health -= this.receiveDamage;
}

// Soldier.prototype.hitTaken = function (attacker){
//       var damage = (Math.floor(Math.random() * this.health));
//       this.receiveDamage =+ damage;
//       var newHealth = this.health -= this.receiveDamage;
//       if (this.receiveDamage > 0) {
//       return newHealth -= this.receiveDamage;}
//       else {
//         return this.health -= damage;
//       }
// }

var ringo = new Soldier (20, 15, 0);
ringo.attack();
var george = new Soldier (17, 18, 30);

ringo.hitTaken();
// ringo.healthLost();
// console.log(ringo);

Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength, attack, receiveDamage) {
  Soldier.call (this, health, strength, attack, receiveDamage);
  this.name = name;
  this.battlecry = '**Odin Owns You All**';

  this.healthWarning = function (){
    if (this.health === 0) { console.log(this.name + " has died in act of combat. A Saxon wins this War! Final stats: Health: " + Saxon1.health + " Strength: " + Saxon1.strength + " Damage received: " + Saxon1.receiveDamage); }
  else { console.log(this.name + " has received " + this.receiveDamage + " points of damage.");
  }
}
}

var Viking1 = new Viking ('Thor', 70, 35, 0);
var Viking2 = new Viking ('Esma', 50, 40, 0);
Viking1.attack();
Viking1.hitTaken();
// Viking1.healthWarning();

Saxon.prototype = Object.create(Soldier.prototype);
//
function Saxon (health, strength, attack, receiveDamage) {
  Soldier.call (this, health, strength, attack, receiveDamage);


  this.deathMaybe = function (){
      if (this.health === 0) { console.log("A Saxon has died in act of combat. Vikings own this War! Final stats: Health: " + Viking1.health + " Strength: " + Viking1.strength + " Damage received: " + Viking1.receiveDamage); }
    else { console.log("A Saxon has received " + this.receiveDamage + " points of damage.");

   }
  }
}

var Saxon1 = new Saxon (70, 40, 0);
Saxon1.attack();
Saxon1.hitTaken();
// Saxon1.deathMaybe();
// console.log(Saxon1.deathMaybe);

// function War (attack, received) {
// Soldier.call(health, strength, attack, receiveDamage);
// }

War.protoype = Object.create(Soldier.prototype, Viking.prototype)

function War (){
Soldier.call();
Viking.call();
this.saxonAttack = function () {
  Saxon1.attack();
  Viking1.hitTaken(Saxon1);
  return Viking1.healthWarning();
}

// saxonAttack();

this.vikingAttack = function () {
  Viking1.attack();
  Saxon1.hitTaken(Viking1);
  return Saxon1.deathMaybe();
}
return console.log("War begings now!");
// console.log()
}

var moveSax = new War ();
moveSax.saxonAttack();
var moveVik = new War();
moveVik.vikingAttack();
//
// function vikingAttack () {
//   Saxon.health
//
// }







//
// module.exports = {
//   Soldier: Soldier,
//   Viking:  Viking,
//   Saxon:   Saxon,
//   War:     War
// };
