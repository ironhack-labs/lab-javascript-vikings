// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

receiveDamage(50);

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return (`Saxon has received ${damage} points of damage`);
        } else {
            return (`Saxon has died in combat`);
        }
    }
}

// War (Bonus)
class War {
    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = []
    }
    
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        generalAttack(vikingSoldier,saxonSoldier);
    }

    saxonAttack(){
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        generalAttack(saxonSoldier,vikingSoldier);
    }

    generalAttack(soldier,victim){
        victim.receiveDamage(soldier.attack());
    }

    showStatus(){
        if (this.vikingArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.saxonArmy === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
 