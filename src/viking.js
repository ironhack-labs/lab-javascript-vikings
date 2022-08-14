// Soldier j
class Soldier {
	constructor(health,strength){
	this.health= health;
	this.strength= strength;
	}
	attack(){
		return this.strength
	}
	receiveDamage(damage){
		this.health-=damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name,health,strength){
		super(health,strength);
		this.name=name;
	}
	attack(){
		return this.strength;
	}

	receiveDamage(damage)
	{
		this.health-=damage;
	 if(this.health>0)
	 {
		return `${this.name} has received ${damage} points of damage`;
	 } 
	 else  if(this.health<=0)
	 {
		return `${this.name} has died in act of combat`;
	 }
	}
	
	battleCry()
	{
		return "Odin Owns You All!"
	}
	
}

// Saxon
class Saxon  extends Soldier{
	receiveDamage(damage)
	{
		this.health-=damage;
	 if(this.health>0)
	 {
		return `A Saxon has received ${damage} points of damage`;
	 } 
	 else  if(this.health<=0)
	 {
		return `A Saxon has died in combat`;
	 }
	}

}

// War
class War {
	constructor(){
		this.vikingArmy=[];
	this.saxonArmy=[]}

	addViking(vikingObject){
		this.vikingArmy.push(vikingObject);
	}

	addSaxon(saxonObject){
		this.saxonArmy.push(saxonObject);
	}

	vikingAttack(){
		const randomSaxonDamage = Math.floor((Math.random()*this.saxonArmy.length));
    const randomVikingDamage = Math.floor((Math.random()*this.vikingArmy.length));
		const alive=this.saxonArmy[randomSaxonDamage].receiveDamage( this.vikingArmy[randomVikingDamage].strength);
		if(alive == "A saxon has died in combat"){
			this.saxonArmy.splice(randomSaxonDamage);
		}
		return alive;
	}

	saxonAttack(){
		const randomSaxonDamage = Math.floor((Math.random()*this.saxonArmy.length));
    const randomVikingDamage = Math.floor((Math.random()*this.vikingArmy.length));
	  const alive=this.vikingArmy[randomVikingDamage].receiveDamage( this.saxonArmy[randomSaxonDamage].strength);
	  if(this.health<=0){
			this.vikingArmy.splice(randomVikingDamage)
		}
		return alive;
	}

	showStatus(){
		if(this.saxonArmy.length==0){
			return `Vikings have won the war of the century!`
		} else if(this.vikingArmy.length==0){
			return `Saxons have fought for their lives and survived another day...`
		} else{
			return `Vikings and Saxons are still in the thick of battle.`
		}
			}
		}