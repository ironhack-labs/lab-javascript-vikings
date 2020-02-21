// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }

     attack() {
    return this.strength
}


    receiveDamage(damage){
        this.health -= damage

}

}

class Viking extends Soldier {
    constructor(health, strength, name) {
        super(health, strength)
        this.name = 'Harald'
        this.health= 300  
        this.strength = 150
    }

    
    receiveDamage(damage) {
        this.health -= damage
        if (this.health >= 0) {
            return  `${this.name} has received ${damage} points of damage`
        }else if(damage === 300){
            return  `${this.name} has died in act of combat`

     }  
        return receiveDamage(300);
    }
        
    battleCry() {
        return 'Odin Owns You All!'
    }
}



// Saxon

class Saxon extends Soldier{
        
attack(){
    return this.strength
}

receiveDamage(damage) {
    this.health-=damage
    
    if(this.health >= 0){

         return `A Saxon has received ${damage} points of damage`
    } else{
        return ` A SAXON has died in combat`

        }
        return receiveDamage(50);
    }
   
}

const aSoldier = new Soldier()
const aViking = new Viking ()
const aSaxon = new Saxon()

// W
class War { }
