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
class Viking extends Soldier {
    constructor(name, health, strength) {
        super();
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        // Get a random viking from the viking army (create random index first, then pick the random viking. same for saxon)
        // Get a random Saxon from the Saxon army
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex];


        // Define the amount of damage the the viking will do
        const vikingDamage = randomViking.attack()

        // Get the result of the attack by getting the damage received by the Saxon
        const attackResult = randomSaxon.receiveDamage(vikingDamage)

        // If the Saxon is dead, remove it from the array (…maybe splice can help)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        

        // Return the the result of the attack
        return attackResult;
    }

    saxonAttack(){
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex];

        const saxonDamage = randomSaxon.attack();

        const attackResult = randomViking.receiveDamage(saxonDamage)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        
        return attackResult;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}
