// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) //the receiveDamage METHOD 
    //receives ONE ARGUMENT, which is (damage)
    {
        this.damage = damage;
        this.health -= damage; // I found this solution,
                              // but I did NOT understand it!
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    // because of 'super' returns also strength for the attack() METHOD
    // --> 'super' makes Viking inherit the attack()METHOD from Soldier
    receiveDamage(damage) {       
        this.health -= damage; 
        if (damage >= this.health) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier { //these brackets are still necessary!!!
    // constructor(health, strength) {
    //     super(health, strength);
    // } // read afterwards that it is not necessary,
    //because Saxon inherits all these attributes from Soldier
    receiveDamage(damage) // (damage) is the received argument
    {
        this.health -= damage;
        // if (damage >= this.health) {
        //     return `A Saxon has died in combat`;
        // } else {
        //     return `A Saxon has received ${damage} points of damage`;
        // }
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `A saxon has died in combat`; 
            //solution found on the internet, but doesn't pass the test!
        }
    }
}

// War
class War {}
