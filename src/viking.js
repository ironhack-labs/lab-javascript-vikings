// Soldier
class Soldier {
    constructor(health, strength) {
       this.health = health;
       this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damages) {
        this.health -= damages
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damages){
        super.receiveDamage(damages);
        if (this.health ===  0){
        return`${this.name} has died in act of combat`
        } else {
        return `${this.name} has received ${damages} points of damage`
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
    


}

// Saxon
class Saxon {}

// War
class War {}
