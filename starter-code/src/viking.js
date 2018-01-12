// Soldier
function Soldier(health ,strength) {
    this.health= health;
    this.strength= strength;
    this.attack= function(){
        return this.strength
    };
    this.receiveDamage = function(damage){
         this.health = this.health - damage;
    }
}

// Viking
function Viking(name, health , strength) {
    this.name= name;
    this.health= health;
    this.strength= strength;
}
    
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Soldier.prototype.attack = function(){
    return this.strength
};



// Saxon
function Saxon() {}

// War
function War() {}
