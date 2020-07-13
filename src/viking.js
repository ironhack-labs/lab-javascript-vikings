// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}


// Viking
class Viking extends Soldier { //I establish the inheritance with extends
    constructor (name, health, strength){
        super (health, strength)
        this.name = name
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
           
          } else {
            return `${this.name} has died in act of combat`
          }
        };

    battleCry(){
        return "Odin Owns You All!"
    }    
}


// Saxon
class Saxon extends Soldier { //I establish the inheritance with extends
    
    receiveDamage(damage) {
        this.health = this.health - damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
           
          } else {
            return "A Saxon has died in combat"
          }
        
        };

}

// War
class War {
    constructor (){  //the constructor is needed to build the object from the object
        this.vikingArmy = []  //within the builder i can assign empty arrays
        this.saxonArmy = []
    }

    addViking(Viking){ //it is a function that receives the Viking object as an argument
        this.vikingArmy.push(Viking) //I use the push method to add the received Viking to the army
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let theReturn = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0); // it is like one exercise of the other lab
        }
        return theReturn;
    }
    

    saxonAttack(){
            let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            let theReturn = randomViking.receiveDamage(randomSaxon.strength);
    
            if (randomViking.health <= 0) {
                this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0); // this part is like one of the first exercises of the last lab. 
            }
            return theReturn;
        }
    
}




function showStatus() { //i tried it but it doesn't works. I think the logic is right so it should be a conditional, but maybe there's something wrong or another way to do it. 

    if (this.vikingArmy.length == 0) {
        return "Vikings have won the war of the century!";
       
      } else if (this.saxonArmy.length == 0) {
        return "Saxons have fought for their lives and survived another day...";

      } else{
        return randomSaxon.receiveDamage(randonViking.strength);

      }
    

}