// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.damage = this.damage;
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
    }
    attack() {
        return this.strength
    }   
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(strength, health)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier{
    constructor (health, strength) {
        super (strength, health);
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        }
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];  
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    };
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    };
    vikingAttack(){};
    saxonAttack(){}
    showStatus(){}
}

