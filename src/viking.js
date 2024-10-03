// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage(damage){
       this.health -= damage; 
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }
    
    vikingAttack () {
        const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[randomIndexViking];
        const randomSaxon = this.saxonArmy[randomIndexSaxon];

        const result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomIndexSaxon, 1) ;
        }

        return result;

        //return this.genericAttack(this.vikingArmy, this.defenderArmy);

    }

    saxonAttack () {
        const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[randomIndexViking];
        const randomSaxon = this.saxonArmy[randomIndexSaxon];

        const result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomIndexViking, 1) ;
        }

        return result;

        // return this.genericAttack(this.saxonArmy, this.vikingArmy);
        
    }

    genericAttack (attackerArmy, defenderArmy) {
        const randomIndexAttacker = Math.floor(Math.random() * this.AttackerArmy.length);
        const randomIndexDefender = Math.floor(Math.random() * this.DefenderArmy.length);
        const randomAttacker = this.vikingArmy[randomIndexAttacker];
        const randomDefender = this.DefenderArmy[randomIndexDefender];

        const result = randomDefender.receiveDamage(randomAttacker.strength);

        if (randomDefender.health <= 0) {
            this.DefenderArmy.splice(randomIndexDefender, 1) ;
        }

        return result;
    }

    showStatus() {
        if ( this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if ( this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        return "Vikings and Saxons are still in the thick of battle.";
    
    }

}
