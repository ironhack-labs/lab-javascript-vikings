// Soldier
function Soldier (health, strength) {
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
function Viking (name, health, strength) {
	Soldier.call(this, health, strength);
	this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
		this.health -= damage; 
		if (this.health > 0) {
			return this.name + " has received " + damage + " points of damage";
		} else { 
			return this.name + " is drinking mead in Valhalla! RIP.";
		}
	}


Viking.prototype.battleCry = function(){
return "Odin owns you all!!!!!"
}




// Saxon
function Saxon (health, strength) {
	Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
		this.health -= damage; 
		if (this.health > 0) {
			return "A Saxon has received" + damage + "points of damage";
		} else { 
			return "A Saxon goes to hell";
		}
	}




// War
function War () {
	this.vikingArmy = [];
	this.saxonArmy = [];
}

War.prototype.addViking = function(viking){
	this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
	this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    if (this.saxonArmy.length === 0) {
		return "Saxons have fought for their lives and survive another day...";
	}
	// select random Saxon from array
	saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
	// select random Viking from array
	viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
	// call Viking attack method and pass it to a variable
	damage = viking.attack();
	// pass damge to Saxon through receive damage
	saxon.receiveDamage(damage);
	if (saxon.health <= 0) {
		saxonIndex = this.saxonArmy.indexOf(saxon);
		this.saxonArmy.splice(saxonIndex, 1);
	}
}

War.prototype.saxonAttack = function(){
	if (this.vikingArmy.length === 0) {
		return "Saxons have fought for their lives and survive another day...";
	}
	// select random Saxon from array
	saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
	// select random Viking from array
	viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
	// call Saxon attack method and pass it to a variable
	damage = saxon.attack();
	// pass damge to Viking through receive damage
	viking.receiveDamage(damage);

	if (viking.health <= 0) {
		vikingIndex = this.vikingArmy.indexOf(viking);
		this.vikingArmy.splice(vikingIndex, 1);
	}
}

War.prototype.showStatus = function(){
	if (this.saxonArmy.length === 0) {
		return "Vikings have won the war of the century!";
	} else if (this.vikingArmy.length === 0) {
		return "Saxons have fought for their lives and survive another day...";
	} else {
		return "Vikings and Saxons are still in the thick of battle.";
	}
}

var vikingThor = new Viking("Thor", 150, 300);
var saxonSoldier = new Saxon(60, 25);

var ragnarok = new War();

ragnarok.addViking(vikingThor);
ragnarok.addSaxon(saxonSoldier);

for (var i = 0; i < 12; i += 1) {
    ragnarok.saxonAttack();  
      }
debug(ragnarok.showStatus());
