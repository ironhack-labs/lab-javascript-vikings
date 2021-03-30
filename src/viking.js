// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
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
        super(health, strength);
        this.name = name;
    }
    attack(){
        super.attack()
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health - this.damage;
        if(this.health > 0){
            return `${this.name} has received ${this.damage} points of damage`
        }
            return `${this.name} has died in act of combat`
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
        receiveDamage(damage){
            this.damage = damage;
            this.health = this.health - this.damage;
            if(this.health > 0){
                return `A Saxon has received ${this.damage} points of damage`
            }
                return 'A Saxon has died in combat'
        }
        }


// War
class War {}
