// Soldier
class Soldier {
    constructor(health, strength) {
        

        this.health = health;
        this.strength = strength;

       function attack(){
            return strength
        }
        
        function receiveDamage(theDamage){
            this.health -= theDamage
        }
    }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
