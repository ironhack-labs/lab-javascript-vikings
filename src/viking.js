// this is the class for Soldier

class Soldier {
    constructor(health, strength) {
        //Those are the properties
        this.health = health;
        this.strength = strength;
    }


    // those are the methods for the Soldier

    // attack is the first method
    attack() {
        return this.strength;
    }

    //recieveDamage is the second method
    receiveDamage(damage) {
        this.health -= damage;
    }
}
// Viking
class Viking {
    constructor(name) {
        this.name = name;
    }
}
attack()


// those are the methods for the Viking
receiveDamage()

battleCry()


// Saxon
class Saxon {}

// War
class War {}


let Soldier1 = new Soldier('100', '50')