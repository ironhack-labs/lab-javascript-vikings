// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage) {
        theDamage = this.health - theDamage;
        return theDamage
    }
    
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){ 
        theDamage = this.health - theDamage;

        if (this.health > 0) {
            console.log(`${name} has recieved ${theDamage} points of damage `);
        }
        else if (this.health <= 0) {
            console.log(`${name} has died in combat`);
        }
    }
} 

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health > 0){
            console.log(`a saxson has recieved ${theDamage} points of damage `)
        } else {
            console.log(`A saxson has died in combat`)
        }
    }

}

// War
class War {}
