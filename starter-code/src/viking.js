// Soldier
class Soldier{
    // The constructor
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    //Method
    attack (){
        return this.strength
    }

    receiveDamage(damage){
        this.damage = damage
        this.health -= this.damage
    }

}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength){
        super(name, strength)
        this.name = name;
        this.health = health
    }

    battleCry(){
        return "Odin Owns You All!"
    }

    receiveDamage(damage){
        this.damage = damage
        this.health -=this.damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }


}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage){
        this.damage = damage
        this.health -=this.damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    constructor(){
    	this.vikingArmy = []
    	this.saxonArmy =[]
    }

    addViking(Viking){
    	this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
    	this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
    	let sax = Math.floor(Math.random()*this.saxonArmy.length);
        let vik = Math.floor(Math.random()*this.vikingArmy.length);
        let damage = this.vikingArmy[vik].strength;
        let saxon = this.saxonArmy[sax];
        let result = saxon.receiveDamage(damage);
    	if(this.saxonArmy[sax].health <=0){
    		this.saxonArmy.splice(sax, 1)
        }
        return result
    }

    saxonAttack(){
    	let sax = Math.floor(Math.random()*this.saxonArmy.length);
        let vik = Math.floor(Math.random()*this.vikingArmy.length);
        let damage = this.saxonArmy[sax].strength;
        let viking = this.vikingArmy[vik];
    	let result = viking.receiveDamage(damage);
    	if(this.vikingArmy[vik].health <=0){
    		this.vikingArmy.splice(vik, 1)
        }
        return result
    }

    showStatus(){
        if (this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.vikingArmy.length>0 && this.saxonArmy.length>0){
            return "Vikings and Saxons are still in the thick of battle."
        }

        
        
        
    }

}
