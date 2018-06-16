// Soldier

function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
    Soldier.prototype.attack = function() {
        return this.strength;
    }
    Soldier.prototype.receiveDamage = function(damage) {
        this.health -= damage;
		}


// Viking
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
    } else{
			message = this.name + " has died in act of combat";
		}
		return message;
}
this.Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
        var message="";
    if (this.health > 0){
        message = "A Saxon has received " + damage + " points of damage"
    } else{
            message = "A Saxon has died in combat"
        }
    return message;
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function(oneViking){
    this.vikingArmy.push(oneViking);
}
War.prototype.addSaxon = function(oneSaxon){
    this.saxonArmy.push(oneSaxon);
}    

War.prototype.vikingAttack = function(){
    var exitMessage = ""
    var randViking = parseInt(Math.random()*(this.vikingArmy.length-1));
    var randSaxon = parseInt(Math.random()*(this.saxonArmy.length-1));
    exitMessage = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength);
    
    if (this.saxonArmy[randSaxon].health <= 0){
        this.saxonArmy.splice(randSaxon, 1)
    }
    return exitMessage;
}

War.prototype.saxonAttack = function(){
    var exitMessage = ""
    var randSaxon = parseInt(Math.random()*(this.saxonArmy.length-1));
    var randViking = parseInt(Math.random()*(this.vikingArmy.length-1));
    exitMessage = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength);

    if (this.vikingArmy[randViking].health <= 0) {
        this.vikingArmy.splice(randViking-1)
    }
    return exitMessage;
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    };
    if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle."

}