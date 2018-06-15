// Soldier
function Soldier(health,strength) {
	this.health = health;
	this.strength = strength;

	this.attack = function () {
		return this.strength;
	}

	this.receiveDamage = function (damage) {
		this.health = this.health - damage;
	}
}

// Viking
function Viking(name,health,strength) {
	Soldier.call(this,health,strength);

	this.name = name;

	this.attack = function () {
		return this.strength;
	}

	this.receiveDamage = function (damage){
		this.health = this.health - damage;
		if (this.health > 0) return this.name + " has received " + damage +" points of damage";
		return this.name + " has died in act of combat";
	}

	this.battleCry = function (){
		return "Odin Owns You All!"
	}
}


// Saxon
function Saxon(health,strength) {
	Soldier.call(this,health,strength);

	this.attack = function (){
		return this.strength;
	}

	this.receiveDamage = function (damage){
		this.health = this.health - damage;
		if (this.health > 0) return "A Saxon has received " + damage + " points of damage"
			return "A Saxon has died in combat";
}
}

// War
function War() {
	this.vikingArmy = [ ];
	this.saxonArmy = [ ];

	this.addViking = function (Viking){
		this.vikingArmy.push(Viking);
	}

	this.addSaxon = function (Saxon){
		this.saxonArmy.push(Saxon);
	}

	this.vikingAttack = function (){
		var damage = this.saxonArmy[0].receiveDamage (this.vikingArmy[0].strength); 
		this.saxonArmy.pop();
		return damage
	}

	this.saxonAttack = function (){
		var damage = this.vikingArmy[0].receiveDamage (this.saxonArmy[0].strength); 
		this.vikingArmy.pop();
		return damage
	}

	this.showStatus = function (){
		if (this.saxonArmy.lenght <= 0){
			return "Vikings have won the war of the century!"
		}  else if (this.vikingArmy.lenght <= 0) {
			return "Saxons have fought for their lives and survive another day..."
		}  else {
			return "Vikings and Saxons are still in the thick of battle."
		} 
	}
}

