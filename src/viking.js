// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }

    // Iteration 1: Soldier
attack() {
    return this.strength;
};

receiveDamage(damage) {
    this.damage = damage;
    this.health = this.health - damage;
    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;  
}
receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
    }
}


battleCry() {
    return `Odin Owns You All!`;
}
}
// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
    super(health, strength);
        this.health = health;
        this.strength = strength;
    }
receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
        return `A Saxon has died in combat`;
    }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject) {
        this.vikingObject = vikingObject;
        this.vikingArmy.push(vikingObject); 
    }
    
    addSaxon(saxonObject) {
        this.saxonObject = saxonObject;
        this.saxonArmy.push(saxonObject);  
    }

    vikingAttack() {
        Soldier.damage === Viking.strength;
        if (Saxon.health <= 0) {
            this.saxonArmy.pop();
        }
        
    }

    saxonAttack() {

    }

    showStatus() {

    }
 }

 const removeDeadSaxons = new War();
removeDeadSaxons.vikingAttack(); 

const removeDeadVikings = new War();
removeDeadVikings.saxonAttack();  


