// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength; 
    }

    attack() {
        return Soldier.strength; }
    
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name,health,strength) //es correcto esto?? //
    {
        super(health,strength);
        this.name = name;

    }
    attack()
    { return Viking.strength} // como se hace ? (This method should be inherited from Soldier, no need to re-implement it.)

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${this.damage}  points of damage`) 
        }
        else {
            return (`${this.name} has died in act of compact`)
        }
    }

    battleCry () {
        return "Odin Owns You All!" }
    }
}


// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength; }
    receiveDamage(damage) {
        this.health -= damage
    if (this.health > 0) {
    return (`A Saxon has received ${this.damage}  points of damage`) 
        }
        else {
    return (`A Saxon has died in act of compact`)
        }

}

// War




}
