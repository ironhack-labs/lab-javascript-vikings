// Soldier
function Soldier(health,strength) {
	this.health=health;
	this.strength=strength;
	this.attack= function (){
		return this.strength;
	}
	this.receiveDamage=function(damage){
		this.health -= damage;
	}
}

// Viking
function Viking(name,health,strength) {

	this.name = name;
	this.health=health;
	this.strength=strength;
	this.battleCry = function(){
		return "Odin Owns You All!"
	}
	//Soldier.call(this, health,strength)
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Soldier;
Viking.prototype.receiveDamage= function (damage) {
	this.health -= damage;
		
		if (this.health > 0) {
			return this.name + " has received " + damage + " points of damage"
		}else{
			return this.name + " has died in act of combat";
		}
}
Viking.prototype.attack = function (){
	return this.strength;
}

// Saxon
function Saxon(health,strength) {
	this.health=health;
	this.strength=strength;

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Soldier;
Saxon.prototype.attack = function (){
	return this.strength;
}
Saxon.prototype.receiveDamage= function (damage) {
	this.health -= damage;
		
		if (this.health > 0) {
			return  "A Saxon has received "+ damage +" points of damage"
		}else{
			return "A Saxon has died in combat";
		}
}
// War
function War() {}
