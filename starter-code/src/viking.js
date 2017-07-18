/ Soldier
function Soldier (health, strength) {
 this.health = health;
 this.strength = strength;
 // this.attack = function (){
 // return this.strength;
 }
 Soldier.prototype.attack = function (){
   return this.strength
 };

 Soldier.prototype.receiveDamage = function (theDamage) {
   this.health -= theDamage;
}

// Viking
function Viking (health, strength, name) {
 Soldier.call(this, health, strength)
 this.name = name;
 }

 Viking.prototype = Object.create(Soldier.prototype);
 Viking.prototype.constructor = Viking;

 Viking.prototype.receiveDamage = function (theDamage) {
   this.health -= theDamage;

   if(this.health > 0){
   return this.name+" has received " + strength +" points of damage"
   }else{
    return this.name + " has died in act of combat"
 }
}


 this.battleCry = function (){
   return "Odin Owns You All!"
}


// Saxon
function Saxon (health, strength) {
 Soldier.call(this, health, strength, attack)
}
 Saxon.prototype = Object.create(Soldier.prototype);
 Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (theDamage) {
   this.health -= theDamage;

   if(this.health > 0){
   return ("A Saxon has received " + strength +" points of damage")
   }else{
   return ("A Saxon has died in act of combat")

}
}
// War
function War() {
 this.vikingArmy =[];
 this.saxonArmy = [];
}


 War.prototype.addViking = function(viking){
   this.vikingArmy.push(viking)
 }

 War.prototype.addSaxon = function(saxon){
   this.saxonArmy.push(saxon)
 }

 this.vikingAttack = function (){
 var randomSaxon = Math.floor(Math.random() *this.saxonArmy.length);
 var randomViking = Math.floor(Math.random() *this.vikingArmy.length);
 var newViking = this.vikingArmy[randomViking];
 var newSaxon = this.saxonAttack[randomSaxon];

   var result = newSaxon.receiveDamage(newViking.attack())
   if(newViking.health===0)
   this.newViking.splice(randomSaxon, 1);

   };

   this.saxonAttack = function (){
 var randomSaxon = Math.floor(Math.random() *this.saxonArmy.length);
 var randomViking = Math.floor(Math.random() *this.vikingArmy.length);
 var newViking = this.vikingArmy[randomViking];
 var newSaxon = this.saxonAttack[randomSaxon];

   var result = newViking.receiveDamage(newSaxon.attack())
   if(newViking.health===0)
   this.newSaxon.splice(randomViking, 1);

   };


 this.showStatus= function(){
   if (this.saxonArmy.length===0){
     return "Vikings have won the war of the century!"
   }
   else if (this.vikingArmy.length===0){
     return "Saxons have fought for their lives and survive another day..."
   }
   else if (this.saxonArmy.length>0 && this.vikingArmy.length>0){
   return "Vikings and Saxons are still in the thick of battle."
   }
   }
