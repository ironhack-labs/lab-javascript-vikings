// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health =300
        this.strength=150
        
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -=damage
        
    }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health,strength);
    this.name=name

  }
  attack(){
    return this.strength
}
receiveDamage(damage){
    this.health -=damage
    if(this.health===0){
        return `${this.name} has died in act of combat`
    }
    else if(this.health!==0){
        return `${this.name} has received ${damage} points of damage`
    }
    
}
battleCry(){
    return `Odin Owns You All!`
}
}
// Saxon
class Saxon extends Soldier{
    constructor( health, strength){
      super(health,strength)
          this.health=health
          this.strength=strength
      }
      attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -=damage
        if(this.health===0){
            return `A Saxon has died in combat`
        }
        else if(this.health!==0){
            return `A Saxon has received ${damage} points of damage`
        }
    }
}


// War
class War {
    constructor()
    {
        this.vikingArmy=[]    
        this.saxonArmy=[]  
		
		
    }
	

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
	
	vikingAttack(){
		//elige a un vikingo del array para que ataque y a un sajón para que reciba
		 const randomVikingAttack = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
         const randomSaxonReciveDamage = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
		// Llamando a la funcion de recibir daño del sajon con el parámetro de fuerza de un vikingo 	
		 const saxonDamage= randomSaxonReciveDamage.receiveDamage(randomVikingAttack.strength);
		//Retirar sajones muertos	
			this.saxonArmy=this.saxonArmy.filter((aliveSaxon)=>aliveSaxon.health>0)
		//Comprobar si el sajón está vivo o muerto
		if(randomSaxonReciveDamage.health<=0){
			return `A Saxon has died in combat`
		}
		else{
		return `A Saxon has received ${randomVikingAttack.strength} points of damage`
		}
	}
	
	saxonAttack(){
		//elige a un vikingo del array para que ataque y a un sajón para que reciba
		 const randomSaxonAttack = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
         const randomVikingReciveDamage = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
		// Llamando a la funcion de recibir daño del sajon con el parámetro de fuerza de un vikingo 	
		 const vikingDamage= randomVikingReciveDamage.receiveDamage(randomSaxonAttack.strength);
		//Retirar sajones muertos	
			this.vikingArmy=this.vikingArmy.filter((aliveViking)=>aliveViking.health>0)
		//Comprobar si el sajón está vivo o muerto
		if(randomVikingReciveDamage.health<=0){
			return `A Viking has died in combat`
		}
		else{
		return `${randomVikingReciveDamage.name} has received ${randomSaxonAttack.strength} points of damage`
		}
	}
	
	showStatus(){
		if(this.vikingArmy.length===0){
			return "Saxons have fought for their lives and survive another day..."
		}
		else if(this.saxonArmy.length===0){
			return "Vikings have won the war of the century!"
		} 
		else{
			return "Vikings and Saxons are still in the thick of battle."
		}
	}
	
}