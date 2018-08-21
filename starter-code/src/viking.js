// Soldier
class Soldier { //class Soldier puts in place the rules for how the viking and saxon soldiers will be represented with values (health & strength)
    constructor (healthArg, strengthArg){ 
        this.health = healthArg; //represents the health level of the soldier
        this.strength = strengthArg; //represents the strength level of the soldier 
    };
    
    attack() { //if a soldier performs an attack
        return this.strength; //return the strength level of that soldier
    }
    
    receiveDamage(strengthArg) { //if a soldier recieves an attack (they recieve damage)
        this.health -= strengthArg; //return the health level of that soldier minus their strength; they have been weakened by the attack
    
    }
}

// Viking
class Viking extends Soldier { //class Viking inherits class Soldiers arguments, and applies them to the viking  soldiers
    constructor (name, healthArg, strengthArg){
        super (name, healthArg, strengthArg) 
        this.name = name; //the name of the viking soldier being called on (vikings have a name property so we can return the name Harald - see VikingSpec.js)
        this.health = healthArg; // the health level of viking soldier being called on
        this.strength = strengthArg; //health level of viking soldier being called on
        
    };
   
    receiveDamage(damage) {
        super.receiveDamage(damage);

        if (this.health > 0) { //if the health of the called on viking soldier is greater than 0, that soldier is still alive
            return `${this.name} has received ${damage} points of damage`; //return message showing how many points of damage that soldier has recieved from an attack
        } else { // if the health of the called on viking soldier is less than 0, that soldier has died
            return `${this.name} has died in act of combat`; //return message showing that the viking soldier has died
        }
    
    }

    battleCry() {
        return "Odin Owns You All!";
}
}

// Saxon

class Saxon extends Soldier { //class Saxon inherits class Soldiers arguments, and applies them to the saxon army soldiers
    constructor (healthArg, strengthArg) { //
        super (healthArg, strengthArg)
        this.health = healthArg; //the health of the saxon soldier being called on
        this.strength = strengthArg; //the strength of the saxon solider being called on
    };

    receiveDamage(damage) { 
    super.receiveDamage(damage);

        if (this.health > 0) { //if the health of the called on saxon soldier is greater than 0, that soldier is still alive
        return `A Saxon has received ${damage} points of damage`; //return message showing how many points of damage that soldier has recieved from an attack
    } else { //if the health of the called on saxon soldier is less than 0, that soldier has died
        return `A Saxon has died in combat`; //return message showing that the saxon soldier has died
    }
}
}

// War

class War { //the war will occur within the War class!
    constructor() { 
      this.vikingArmy = []; //creates an empty viking army array, we will push viking soldiers into the array to fill its length using .push
      this.saxonArmy = []; //creates an empty saxon army array, we will push saxon soldiers into the array to fill its length using .push
    }
    addViking(viking){ 
      this.vikingArmy.push(viking) //pushs viking soldiers into viking army array to create its length
    }
    addSaxon(saxon){
      this.saxonArmy.push(saxon) //pushes saxon soliders into saxon army array to create its length
    }
  
    vikingAttack(){ //viking army attacks saxon army a single time, saxon army is unable to attack back
      let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; //variable saxon finds a random saxon soldier within its army's length
      let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; //variable viking finds a random viking soldier within its army's length
      let resultDamage = saxon.receiveDamage(viking.strength); //varialbe resultDamage shows the damage the random saxon soldier recieves, which amounts to the strength that the random viking soldier used

      if(saxon.health <= 0) { //if the random saxon soldier's health falls to or below zero (dies)
          this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1); //remove the random saxon soldier from its army's length
      }

      return resultDamage; 
    }
      
      saxonAttack() { //saxon army attacks viking army a single time, viking army is unable to attack back
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; //variable viking finds a random viking soldier within its army's length
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; //variable saxon finds a random saxon soldier within its army's length
    let resultDamage = viking.receiveDamage(saxon.strength); //varialbe resultDamage shows the damage the random viking soldier recieves, which amounts to the strength that the random saxon soldier used

      if (viking.health <= 0) { //if the random viking soldier's health falls to or below zero (dies)
          this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1); //remove the random viking soldier from its army's length
      }

      return resultDamage;
    }
  

    showStatus() { //show a status update on the war
        if(this.saxonArmy.length === 0) { //if there are no more saxons left in the saxon army, its length would equal to 0
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) { //if there are no more vikings in the viking army, its length would equal to 0
            return "Saxons have fought for their lives and survive another day..."; 
        } else { //if neither of the above are true, else would mean that both armies contain at least 1 value in their lengths
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
