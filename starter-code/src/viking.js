// Soldier
function Soldier(healthArg, strengthArg) {
	this.health=healthArg;
	this.strength=strengthArg;
	this.attack=function(){
		return this.strength;
	};
	this.receiveDamage=function(damage){
		this.health -= damage;
	}
}

// Viking
function Viking(name,health,strength) {
	this.name=name;
	
	Soldier.call(this, health,strength);
	this.receiveDamage=function(damage){
	 health-=damage;
	 if(health>0){
	   return name + " has received "+ damage + " points of damage";
	 }else{
	   return name + " has died in act of combat";
	 }
	}
	this.battleCry = function(){
	  return "Odin Owns You All";
	}
}

 var viking = new Viking("Hi",500,400);
 
 console.log(viking.attack());
 
 function Saxon(health, strength){
   this.health=health;
   this.strength= strength;
   Soldier.call(this, health,strength);
   this.receiveDamage=function(damage){
	 health-=damage;
	 if(health>0){
	   return "A Saxon has received "+ damage + " points of damage";
	 }else{
	   return "A Saxon has died in act of combat";
	  }
   }
 }
 
 var saxon = new Saxon(400, 350);
 
 console.log(saxon.attack());
 
 
 function war(){
   this.vikingArmy=[], 
   this.saxonArmy=[];
   this.addViking=function(viking){
     this.viking=viking;
     console.log(viking.name);
     console.log(viking.health);
     console.log(viking.strength);
    this.vikingArmy.push( new Viking( viking.name, viking.health, viking.strength));
   }
 }
 
 var fight = new war("a");
 
 
 var nuevo = {
   name: prompt("Nombre"),
   health: prompt("Salud"),
   strength: prompt("Fuerza")
 };
 
 
 
 
fight.addViking(nuevo);
console.log(fight.vikingArmy);