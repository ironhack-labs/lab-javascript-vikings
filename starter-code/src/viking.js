// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
    }
}
    
// Viking
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name = name;
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0) return this.name + " has received " + damage + " points of damage";
        else  return this.name + " has died in act of combat";
    }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0) return "A Saxon has received " + damage + " points of damage"; 
        else return "A Saxon has died in combat";
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    }
    this.vikingAttack = function(){
        randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        
        var vikingAttack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        
        if(this.saxonArmy[randomSaxon].health < 1) this.saxonArmy.splice(randomSaxon,1);
        
        return vikingAttack;
    }
    this.saxonAttack = function(){
        randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        
        var saxonAttack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        
        if(this.vikingArmy[randomViking].health < 1) this.vikingArmy.splice(randomViking,1);
        
        return saxonAttack;
    }
    this.showStatus = function(){
        if(this.vikingArmy.length == 0) return "Saxons have fought for their lives and survive another day..."
        else if(this.saxonArmy.length == 0) return "Vikings have won the war of the century!"
        else return "Vikings and Saxons are still in the thick of battle."
    }
}
