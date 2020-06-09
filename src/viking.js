// Soldier
class Soldier {
    constructor(health, strength){ // insit is an argument. 
        this.health = health;
        this.strength = strength;
    }
    attack() {  // bekommt kein argument
       return Soldier.strength;
    }
    receiveDamage(damage) { // damage is the argument 
        this.health -= damage; 
    }
}


// Viking
class Viking extends Soldier{
    constructor(name, health, strength) { 
        this.name = name; 
        super(health,strength); // super: get the health and strength property from the otriginal class
    }
    receiveDamage(damage) { // damage is the argument 
        this.health -= damage; 
        if (this.health >  0){
            console.log(`${this.name} has received ${this.damage} points of damage`);
        } else {
            console-log(`${this.name} has died in act of combat.`);
        }
    } 
    battleCry() {
        console.log("Odin Owns You All!"); 
    }

}

// Saxon
class Saxon extends Soldier {   // extends,inheritance => Soldier
    constructor(health, strength){
        super(health,strength) // super` refers to the constructor of the parent (Animal)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
        console.log(`A Saxon has received ${this.damage} points of damage`)
    } else {
        console.log(`A Saxon has died in combat`)
    }
}
}


// War
class War {
    constructor();
}