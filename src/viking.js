// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength){ 
        super(health, strength); // what happens if I pass anothe parameter in the super //
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has recived ${damage} points of damage`
        }
        else {
            return `${this.name} has died in the act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon {}

// War
class War {}
