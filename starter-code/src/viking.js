// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){return this.strength}

    receiveDamage(damage){
        this.health -= damage
    }
}

/*A Viking is a Soldier with an additional property, their name. They also have a different receiveDamage() method and new method,
 battleCry().
Modify the Viking class, have it inherit from Soldier, re-implement the receiveDamage() method for Viking, and add a new battleCry() method.
*/

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)             // always call super first 
        this.name = name
    }


    receiveDamage(damage){
        this.health -= damage
        
        if(this.health > 0){return `${this.name} has received ${damage} points of damage`}

        if(this.health <= 0){return `${this.name} has died in act of combat`}
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health -= damage

        if(this.health > 0){return `A Saxon has received ${damage} points of damage`}

        if(this.health <= 0){return `A Saxon has died in combat`}
    }
}


// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
       this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
     let randomSaxonPosition = Math.floor((Math.random() * this.saxonArmy.length))
     let randomVikingPosition = Math.floor((Math.random() * this.vikingArmy.length))

        this.saxonArmy[randomSaxonPosition].receiveDamage(this.vikingArmy[randomVikingPosition].strength)

        if(this.saxonArmy[randomSaxonPosition].health <= 0){
            this.saxonArmy.splice(randomSaxonPosition, 1)
        }
    //return ???
     }

    }
        
        //return {this.saxonArmy[ran].health}
    


    /* A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking 
    (also chosen at random). 
    This should only perform a single attack and the Saxon doesn't get to attack back.*/

    // saxonAttack()
    // showStatus()



// let w1 = new War()
// w1.addViking(new Viking )
