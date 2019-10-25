// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () { 
        return this.strength;
      }
    //   should remove the received damage from the health property
    receiveDamage(damage) { 
        this.health = this.health - damage ;
      }
} 

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) { 
        super(health, strength);
        this.name = name;
    }

    //if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
    //if the Viking dies, it should return "NAME has died in act of combat"

    receiveDamage(damage) { 
        this.health = this.health - damage;
        if(this.health > 0){ 
            return `${this.name} has received ${damage} points of damage`;
        } else { 
            return `${this.name} has died in act of combat`; 
        }
    }
    
    battleCry() {
        return  "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) { 
        super(health, strength);
    }

receiveDamage(damage){
this.health = this.health - damage;
        if(this.health > 0){ 
            return `A Saxon has received ${damage} points of damage`;
        } else { 
            return `A Saxon has died in combat`; 
        } 
    } 
} 

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy =[];
    }
    
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }

    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }

//     A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.

// should be a function
// should receive 0 arguments
// should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking

    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]; 
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 
        
        let attack = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0){ 
            this.saxonArmy.splice([randomSaxon, 1]);
        }
        return attack;
    } 

    
    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]; 
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 
        
        let attack2 = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0){ 
            this.vikingArmy.splice([randomViking, 1]);
        }
        return attack2;
    }

    showStatus(){

        if(this.saxonArmy.length === 0) { 
        return "Vikings have won the war of the century!"; 
    }  else if(this.vikingArmy.length === 0) { 
        return "Saxons have fought for their lives and survive another day...";
        } else { 
            return "Vikings and Saxons are still in the thick of battle." 
        };
    }
}  



//     Returns the current status of the War based on the size of the armies.

// should be a function
// should receive 0 arguments
// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."




