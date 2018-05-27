// Soldier
function Soldier(healthArg,strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}
Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}
// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
}
Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    }
    else{
       return this.name +" has died in act of combat";
    }
}
Viking.prototype.battleCry = function(){
 return "Odin Owns You All!";
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
function Saxon(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Saxon.prototype.receiveDamage = function(damage){
   this.health -= damage;
   if(this.health > 0){
   return  "A Saxon has received " + damage + " points of damage";
   }
   else{
       return "A Saxon has died in combat";
   }
}

// War
function War() {
    this.vikingArmy = [] ;
    this.saxonArmy = [] ;
}

War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.randomSaxon.receiveDamage() = randomViking.strength;
}