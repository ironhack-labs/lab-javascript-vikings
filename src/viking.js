// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
       this.health -=  damage;
    }
};

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -=  damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health === 0){
            return `${this.name} has died in act of combat`
        }
     }
     battleCry(){
         return `Odin Owns You All!`
     }
}
// let viking;
// const name = 'Harald';
// const strength = 150;
// const health = 300;

// Saxon
class Saxon {}

// War
class War {}
