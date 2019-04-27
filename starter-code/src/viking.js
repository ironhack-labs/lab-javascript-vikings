// Soldier

class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }
    
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
    
}



// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    attack(){
        return this.strength
        }
    receiveDamage(damage){
         //if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
        //if the Viking dies, it should return "NAME has died in act of combat"
        this.health = this.health - damage

        if(damage && this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else if(damage && this.health === 0){
            return `${this.name} has died in act of combat`
        }
       
    }
    
    battleCry(){
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength);
    }
    receiveDamage(damage){
    //if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
    // if the Saxon dies, it should return "A Saxon has died in combat"
    this.health = this.health - damage

        if(damage && this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else if(damage && this.health === 0){
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
    addViking(Viking){ 
        
        this.vikingArmy.push(Viking)
        
    }
    addSaxon(Saxon){
        
        this.saxonArmy.push(Saxon)
    }
     
    vikingAttack(){
        let randomViking = this.vikingArmy[ Math.floor(Math.random() * this.vikingArmy.length) ]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        
        randomSaxon.receiveDamage(randomViking.strength)
        
        if (randomSaxon.health <= 0) { 
            this.saxonArmy.splice(randomSaxon)
            return 'A Saxon has died in combat'
        }
          
    }
    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        
        let attack = randomViking.receiveDamage(randomSaxon.strength)
        
        if (randomViking.health <= 0) { 
            this.vikingArmy.splice(randomViking)
        }
        return attack
    }
    showStatus(){
//if the Saxon array is empty, should return "Vikings have won the war of the century!"
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."

    }
}

const saxon = new Viking('Celia',300,150)
const viking = new Saxon(300,150)