// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    atack(){
        function attack(){
            return this.strength;
        }
    }
    receiveDamage(){
        function receiveDamage(damage){
            this.health -= damage;
        }
    }    
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
