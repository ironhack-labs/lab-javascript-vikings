// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health = this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        super(health, strength)
        // is attack inherited automatically or do I have to code it?
    }
    receiveDamage(damage) { // should be super. ?
        this.damage = damage;
        this.health = this.health - this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has has died in act of combat`;
        }
    }

}

constructor(name, health, strength) {
    this.name = name
    super(health, strength)
}  
recieveDamage(damage){
this.health = this.health - this.damage
if (this.health > 0){
    return `${this.name} has received ${this.damage} points of damage`
}else {return `${this.name} has died in act of combat`}
}
};
receiveDamage(damage) { // should be super. ?
    this.damage = damage;
    this.health = this.health - this.damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    }
    else if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
    }
}