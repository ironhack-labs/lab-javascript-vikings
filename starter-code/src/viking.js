// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength; 
    }

   attack() {
      return this.strength
   }

   receiveDamage(damage) {
       this.health = this.health - damage 
   }

}

// Viking
class Viking extends Soldier{

    constructor(name,health,strength) {
        super(health,strength) 
        this.name = name 

    }

    attack() { 
        return this.strength 
    }

    receiveDamage(damage) { 
        this.health = this.health - damage 
        if(this.health 
            > 0) {
          return  `${this.name} has received ${damage} points of damage`
        } else {
        return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'

    }

}



// Saxon
class Saxon extends Soldier{


receiveDamage(damage) {

    this.health = this.health - damage 
        if(this.health 
            > 0) {
          return  `A Saxon has received ${damage} points of damage`
        } else {
        return `A Saxon has died in combat`
        }

}

   

}

// War
class War {
    
   /*why no parameters passed?? */ constructor() {
        this.vikingArmy = []; 
        this.saxonArmy = [];
    }



    addViking(Viking) {

        this.vikingArmy.push(Viking);

    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);

    }

    //Armies Attack 

    vikingAttack() {
     let randomSaxon = this.saxonArmy[Math.floor(Math.random () * this.saxonArmy.length)]; 

     
     
     let randomVikingStrength = this.vikingArmy[Math.floor(Math.random () * this.vikingArmy.length)].strength

     let deathStatus = randomSaxon.receiveDamage(randomVikingStrength) 

    if(deathStatus.includes('died')) {
        this.saxonArmy.splice(randomSaxon);
    }

    return deathStatus;

    }
    saxonAttack(){

        let randomViking = this.vikingArmy[Math.floor(Math.random () * this.vikingArmy.length)]; 

     
     
        let randomSaxonStrength = this.saxonArmy[Math.floor(Math.random () * this.saxonArmy.length)].strength
   
        let deathStatusSecond = randomViking.receiveDamage(randomSaxonStrength) 
   
       if(deathStatusSecond.includes('died')) {
           this.vikingArmy.splice(randomViking)
       }
   
       return deathStatusSecond;

    }
    showStatus(){

        console.log("kjnkdjngd");
        console.log(this.vikingArmy);


        if(this.saxonArmy.length == 0) {return "Vikings have won the war of the century!"} 
        else if(this.vikingArmy.length == 0){return "Saxons have fought for their lives and survived another day..."}
        else{return "Vikings and Saxons are still in the thick of battle."}

    }

}

