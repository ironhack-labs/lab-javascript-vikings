// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    };
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength) // calls the contructor of the parent, it cannot be referenced with super.constructor(), it is implicit
        this.name = name
        //return this // automatic for a constructor
    }
    // js support overriding (last method with the same name) but no native overloading (can be implemented with a generic foo() function and testing the passed arguments with the arguments keyword)
    //attack() // no need to implement, parent method is the same
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health)
            return `${this.name} has received ${damage} points of damage`
        else    
            return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    /* 
    constructor(health, strength) {
        super(health, strength)
    } 
    */
   // no need to call the parent constructor in this case
   // JavaScript uses prototype-based inheritance (meaning objects inherit properties and methods from their prototypes)
   // here, the constructor method is not overridden, so the constructor of the parent is called uppon instantiation
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health)
            return `A Saxon has received ${damage} points of damage`
        else    
            return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        
    }
}

const thor = new Viking("Thor", 100, 100)
thor.receiveDamage(50)
thor.receiveDamage(50)
const saxon1 = new Saxon(100, 100)
saxon1.receiveDamage(50)
console.log(saxon1.health)
