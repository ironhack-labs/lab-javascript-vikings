
class Soldier {
constructor(healthArg, strengthArg) {

this.health = healthArg;
this.strength = strengthArg;

}
attack(){

return this.strength

}

receiveDamage(theDamage){

this.health -= theDamage;
}

}










class Viking extends Soldier{
    constructor(name, healthArg, strengthArg){
    	      super(healthArg, strengthArg)


    	      this.name = name;
    	      this.health = healthArg;
    	      this.strength = strengthArg;

}

   attack(){
return this.strength;
}


receiveDamage(theDamage){

this.health -= theDamage;

if (this.health > 0){

return this.name + " has received " + theDamage + " points of damage";

}else{
	return this.name + " has died in act of combat"

}

}
battleCry(){

	return "Odin Owns You All!";
}

} //last bracket 



class Saxon extends Soldier{

	constructor(health, strength){
super(health, strength)

		this.health = health;
		this.strength = strength;
	}

	attack(){

return this.strength;

	}


receiveDamage(theDamage){

this.health -= theDamage;

if (this.health > 0){

return "A Saxon has received " + theDamage + " points of damage";

}else{
	return "A Saxon has died in combat"

}

}











} //last bracket


 





 








