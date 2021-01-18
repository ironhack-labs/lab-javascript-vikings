// Soldier
// should receive 2 arguments haelth, strength.
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
// shoul be a function, receive 0 arguments. 
// return the strength property of the Soldier.
    attack() {
        return this.strength;
    }
// should be a function, receive 1 argument (the damage). 
// remove the received damage from the health property.
// shouldn't return anything.
    receiveDamage(damage) {
        this.health = health -= damage;
    }
}

// Viking
// should extend soldier
// class 3 arguments (name, health, strength)
// receive the name 1st argument, health 2st argument, strength 3st argument
class Viking extends soldier {
    constructor(name, health, strength){
        super (health, strength)
        this.name = name
    }
// no need to re-implement it.
// should return the strength Viking    
attack() {
    return this.strength (Viking)
}
// re-implemented for Viking, because version need to have different return

    receiveDamage(damage) {
        if ((this.health = this.health -= damage) > 0) {
            return `${this.name} has received ${damage} points of damage`;
          } else {
            return `${this.name} has died in act of combat`;
          }
    }
// receive 0 argument
// return should "Odin Owns You All!"
    battleCry() {
        return `Odin Owns You All!`
    }
}


// Saxon
// Saxon should extend Soldier
// no re-implement class e attack
class Saxon extends Soldier {
    attack() {
        return this.strength (Saxon)
    }

// re-implement receiveDamage, return if 
    receiveDamage(){
        if ((this.health = this.health -= damage) > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}


// War
class War {}
