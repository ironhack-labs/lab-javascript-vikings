// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    // Viking


    this.attack = function() {
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage) { 
    this.health -= damage; 
	var message="";
    if (this.health > 0){
       message= this.name + " has received " + damage + " points of damage";
    } else {
        message = this.name + " has died in act of combat";
    }
	console.log(message,'<----');
	return message;
}

// Saxon
function Saxon() {}

// War
function War() {}
