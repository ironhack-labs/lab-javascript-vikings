// Soldier
class Soldier {
    constructor(health, strength){
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
    constructor (name, health, strength) {
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
    }
    
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor (){
        let currentSaxon;
        let currentViking;
    }
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        this.currentSaxon = this.saxonArmy[randSaxonIndex];
        this.currentViking = this.vikingArmy[randVikingIndex];

        let result = this.currentSaxon.receiveDamage(this.currentViking.attack());

        if(this.currentSaxon.health <= 0) {
            this.saxonArmy.splice(randSaxonIndex, 1);
        }

        return result;
    }

    saxonAttack() {
        let randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        this.currentSaxon = this.saxonArmy[randSaxonIndex];
        this.currentViking = this.vikingArmy[randVikingIndex];

        let result = this.currentViking.receiveDamage(this.currentSaxon.attack());

        if(this.currentViking.health <= 0) {
            this.vikingArmy.splice(randSaxonIndex, 1);
        }

        return result;
    }

    

    showStatus() {
        if(this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    };

};

