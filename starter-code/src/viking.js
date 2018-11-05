// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength
    };
    this.receiveDamage = function(damage){
        this.health = this.health - damage
    }
}

// Viking
function Viking(name,health,strength) {
    this.name = name;
    Soldier.call(this, name, health, strength);
    
    this.receiveDamage = function(damage){
        this.health = this.health - damage
        if(this.health > 0) {
            console.log(this.name + ' has received '+ damage + ' points of damage ')}
            else{console.log(this.name + ' has died in act of combat ')}
    }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health,strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage){
        this.health = this.health - damage
        if(this.health > 0) {
            console.log('A Saxon has received '+ damage + ' points of damage ')}
            else{console.log('A Saxon has died in combat ')}
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy= [];
    this.addViking = function(viking){
        this.vikingArmy += viking
    };
    this.addSaxon=function(saxon){
        this.saxonArmy += saxon
    };
    this.vikingAttack = function(){
       var saxonDamage = Math.floor(Math.random() * this.saxonArmy.length-1)
        var vikingAttack = Math.floor(Math.random() * vicking.strength)
       var attack = Saxon.receiveDamage(Viking.strength)

    }
 
    

}


