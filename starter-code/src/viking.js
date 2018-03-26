// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
 
 }
 
 Soldier.prototype.attack = function(){
    return this.strength;
 }
 
 Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
 }
 
 // Viking
 function Viking(name, health, strength) {
     Soldier.call(this, health, strength);
     this.name = name;
 }

 Viking.prototype = Object.create(Soldier.prototype);

 Viking.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
     if (this.health > 0){
         return this.name + " has received " + damage + " points of damage";
     }
     else {
         return this.name + " has died in act of combat";
     }
 }

 Viking.prototype.battleCry = function () {
     return "Odin Owns You All!";
 }


 // Saxon
 function Saxon(health, strength) {
    Soldier.call(this, health, strength);
 }
 
 Saxon.prototype = Object.create(Soldier.prototype);
 
 Saxon.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
     if (this.health > 0){
         return "A Saxon has received " + damage + " points of damage";
     }
     else {
         return "A Saxon has died in combat";
     }
 }

 
 // War
 function War() {
     this.vikingArmy = [];
     this.saxonArmy = [];

     War.prototype.addViking = function(viking) {
        this.vikingArmy.push(viking);
    }

     War.prototype.addSaxon = function(saxon) {
         this.saxonArmy.push(saxon);
     }

     War.prototype.vikingAttack = function(){
        var randomSax =  Math.floor((Math.random() * this.saxonArmy.length));
        var randomVik = Math.floor((Math.random() * this.vikingArmy.length));
     
     
        var currentSaxon = this.saxonArmy[randomSax];
        var currentViking = this.vikingArmy[randomVik];
     
     
        if(currentSaxon.health <= currentViking.strength){
            this.saxonArmy.splice(randomSax, 1)
        }
     
        return currentSaxon.receiveDamage(currentViking.strength)
     
     }

     War.prototype.saxonAttack = function(){
        var randomSax =  Math.floor((Math.random() * this.saxonArmy.length));
        var randomVik = Math.floor((Math.random() * this.vikingArmy.length));
     
     
        var currentSaxon = this.saxonArmy[randomSax];
        var currentViking = this.vikingArmy[randomVik];
     
     
        if(currentViking.health <= currentSaxon.strength){
            this.vikingArmy.splice(randomVik, 1)
        }
     
        return currentViking.receiveDamage(currentSaxon.strength)
     
     }

     War.prototype.showStatus = function(){
         if (this.saxonArmy.length === 0) {
             return "Vikings have won the war of the century!"
         }
         else if (this.vikingArmy.length === 0){
             return "Saxons have fought for their lives and survive another day..."
         }
         else {
             return "Vikings and Saxons are still in the thick of battle.";
         }
     }

    //  War.prototype.vikingAttack = function() {
    //      var randomViking = Math.floor(Math.random() * vikingArmy.length);
    //      var viking = new Viking();
    //      var vikingStrength = this.viking.strength;

    //      var randomSaxon = Math.floor(Math.random() * saxonArmy.length);
    //      var saxon = new Saxon();
    //      var saxonHealth = this.saxon.health;

    //      return saxon.receiveDamage(vikingStrength);

    //      if (vikingStrength >= saxonHealth){
    //          this.saxonArmy.splice(saxonArmy[randomSaxon],1);
    //      }

             
    //     }
    
    }