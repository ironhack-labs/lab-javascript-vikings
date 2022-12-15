// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
     }

    receiveDamage(damage){
        this.health -= damage
    }


}

// Viking
class Viking extends Soldier {}

// Saxon
class Saxon extends Soldier {}

// War
class War extends Soldier {}
