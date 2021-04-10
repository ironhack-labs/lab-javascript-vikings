// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

const soldier = new Soldier(100,100);

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        const life = this.health -= damage
        if (life <= 0){
            return `${this.name} has died in act of combat.`
        }
        return `${this.name} has received ${damage} points of damage.`
    }

    battleCry(){
        return "Odin Owns You All!!";
    }

}

const fromen = new Viking ("Fromen", 50, 50);

// Saxon
class Saxon extends Soldier{
    constructor(){
        
    }
}

// War
class War {}
