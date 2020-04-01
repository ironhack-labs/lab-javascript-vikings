// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
  
}

// Viking
    class Viking extends Soldier {
        constructor(name,health,strength){ 
         super(health,strength)
          this.name = name;
        }
        receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health >= 1){
         return `${this.name} has received ${damage} points of damage`;
         
        }
         return `${this.name} has died in act of combat`;

        }

        battleCry(){
            return "Odin Owns You All!"
        }
      }
    
// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health >= 1 ){
        return `A Saxon has received ${damage} points of damage`;
        } 
        return `A Saxon has died in combat`
}
    }


// War
class War {
constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let indexViking =Math.floor(Math.random() * this.vikingArmy.length)
        let currentSaxon = this.saxonArmy[indexSaxon]
        let currentViking = this.vikingArmy[indexViking]
        // console.log(currentViking)
        const war = currentSaxon.receiveDamage(currentViking.strength)
        
        if(currentSaxon.health <= 0){
            this.saxonArmy.splice(indexSaxon,1)
        }
        return war
        }
    saxonAttack(){
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        // console.log(indexSaxon)
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length)
        let currentSaxon = this.saxonArmy[indexSaxon]
        let currentViking = this.vikingArmy[indexViking]
        let war = currentViking.receiveDamage(currentSaxon.strength)
        if(currentViking.health <= 0){
            this.vikingArmy.splice(indexViking,1)
        }
        return war
        
    }
    showStatus(){
        if(!this.saxonArmy.length){ return `Vikings have won the war of the century!`}
        else if (!this.vikingArmy.length){ return "Saxons have fought for their lives and survived another day..."}
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
        
    }
}
 guerra = new War()
 saxon = new Saxon(10,25)
 viking = new Viking("jose",15,15)
 saxon1= new Saxon(5,5)
 viking1= new Viking("juan", 30,30)
 guerra.addSaxon(saxon)
 guerra.addSaxon(saxon1)
 guerra.addViking(viking)
 guerra.addViking(viking1)
 console.log(guerra.saxonAttack())
 console.log(guerra.saxonArmy)