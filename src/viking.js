// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        this.attack = () => {
            return this.strength;
        }
        this.receiveDamage = (damage) => {
            this.health -= damage;
        }
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(name);
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.receiveDamage = (damage) => {
            this.health -= damage;
            if (this.health > 0) {
                return `${name} has received ${damage} points of damage`
        } else return `${name} has died in act of combat`
    }
        this.battleCry = () => {
            return `Odin Owns You All!`;
        }
}
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = (damage) => {
        this.health -= damage;
            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`
        } else return `A Saxon has died in combat`
    }
}

// War
class War {}
