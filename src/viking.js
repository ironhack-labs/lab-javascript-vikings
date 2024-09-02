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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    //Armies Attack

    vikingAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const strengthViking = this.vikingArmy[randomViking].attack();
        const result = this.saxonArmy[randomSaxon].receiveDamage(strengthViking);
        if(this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon, 1);
        return result;
    }

    saxonAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const strengthSaxon = this.saxonArmy[randomSaxon].attack();
        const result = this.vikingArmy[randomViking].receiveDamage(strengthSaxon);
        if(this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking, 1);
        return result;

    }

    showStatus() {
        if(!this.saxonArmy.length) return "Vikings have won the war of the century!";
        if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle.";

    }
}
