// Soldier
function Soldier(health, strength){
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name= name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}
Viking.prototype.receiveDamage = function (damage){
   this.health -= damage;
    if (this.health > 0){
        return this.name +" has received " + damage + " points of damage"
    } else{
        return this.name + " has died in act of combat"
    }
}



// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return 'A Saxon has received ' + damage + ' points of damage';
    } else{
        return 'A Saxon has died in combat';
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
    var numberSaxon = Math.floor(Math.random(this.saxonArmy.length));
    var numberViking = Math.floor(Math.random(this.vikingArmy.length));
    var resultado = this.saxonArmy[numberSaxon].receiveDamage(this.vikingArmy[numberViking].strength);
 
    if(this.saxonArmy[numberSaxon].health <= 0){
        this.saxonArmy.splice(numberSaxon, 1);
    }
    return resultado;
 }
 // --- Same pero comprimido ---
 War.prototype.saxonAttack = function (){
   var resultado=  this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))].receiveDamage(this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))].strength);
   if(this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))].health <=0){
       this.vikingArmy.splice(Math.floor(Math.random(this.vikingArmy.length)), 1);
   }
   return resultado;
 }
 War.prototype.showStatus = function (){
    if (!this.saxonArmy.length){
        return "Vikings have won the war of the century!";
    }
    else if(!this.vikingArmy.length){
    return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
 }