// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
}

// Viking
function Viking(name, health,strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
   if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    } else {
       return this.name + " has died in act of combat";
   }
}

Viking.prototype.battleCry = function (){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
   if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    } 
       return "A Saxon has died in combat";
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

War.prototype.vikingAttack = function(){
   var r = Math.floor(Math.random()*this.vikingArmy.length);
   var s = Math.floor(Math.random()*this.saxonArmy.length);
   this.saxonArmy[s].receiveDamage(this.vikingArmy[r].strength);
   if (this.saxonArmy[s].health <= 0){
    this.saxonArmy.splice(s,1);
    }
    }

}