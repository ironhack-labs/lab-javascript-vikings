// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(Damage){
     this.health -= Damage; 
    }
}




// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
    super(health, strength)
    this.name = name;
   }
    
   receiveDamage(Damage){
      this.health -= Damage;

    if(this.health > 0){
        return `${this.name} has received ${Damage} points of damage`
      }else{
        return `${this.name} has died in act of combat`
      }
   }

   battleCry(){
    return "Odin Owns You All!"
   }
}




// Saxon
class Saxon extends Soldier {
   constructor (health, strength){
    super (health, strength)
   }
   
   receiveDamage(Damage){
      this.health -= Damage;

    if(this.health > 0){
        return `A Saxon has received ${Damage} points of damage`
      }else{
        return `A Saxon has died in combat`
      }
   }
  
}

// War
class War {
    constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
}
    
    addViking (vikingObject){
        this.vikingArmy.push(vikingObject)
    }

    addSaxon(saxonobject){
        this.saxonArmy.push(saxonobject)
    }

//Armies Attack 

vikingAttack(){
    //pick a random Saxon and random Viking
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const chosenSaxon = this.saxonArmy[randomSaxonIndex];
    const chosenViking = this.vikingArmy[randomVikingIndex];
//Saxon receives damage equal to Viking's strength
    const result = chosenSaxon.receiveDamage(chosenViking.strength);

    //if saxon's dies it removes from the army
    if(chosenSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxonIndex);
     
    //returns the result of the equal
    return result;
    }
}

saxonAttack(){
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const chosenSaxon = this.saxonArmy[randomSaxonIndex];
    const chosenViking = this.vikingArmy[randomVikingIndex];

    const result = chosenViking.receiveDamage(chosenSaxon.strength);

    if(chosenViking.health <= 0){
        this.vikingArmy.splice(randomVikingIndex);
    }
    return result;
}

showStatus(){
    if(this.saxonArmy <= [0]){
        return "Vikings have won the war of the century!";
    }else if(this.vikingArmy <= [0]){
        return "Saxons have fought for their lives and survived another day...";
    }else{
        return "Vikings and Saxons are still in the thick of battle.";
     }
}


}


