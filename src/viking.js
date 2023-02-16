// Soldier
class Soldier {
    constructor(health,srength){
        this.health = health;
        this.strength = srength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       this.health = this.health - damage;
    }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
