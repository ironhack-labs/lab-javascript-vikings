// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
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
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingSoldier) {
        this.vikingArmy.push(vikingSoldier);
    }

    addSaxon(saxonSoldier) {
        this.saxonArmy.push(saxonSoldier);
    }

    selectRandomSoldier(army) {
        const min = 0;
        const max = army.length - 1;
        const randomIndex = Math.floor(Math.random() * (max-min + 1)) + min;
        const randomSoldier = army[randomIndex];
        return randomSoldier;
    }

    
    vikingAttack() {
        const attackingVikingSoldier = this.selectRandomSoldier(this.vikingArmy);
        const attackedSaxonSoldier = this.selectRandomSoldier(this.saxonArmy);

        const attackResult = attackedSaxonSoldier.receiveDamage(attackingVikingSoldier.strength);

        this.saxonArmy = this.saxonArmy.filter(soldier => {
            if (soldier.health > 0) {
                return true;
            } else {
                return false;
            }
        })

        return attackResult;

    }

    saxonAttack() {
        const attackingSaxonSoldier = this.selectRandomSoldier(this.saxonArmy);
        const attackedVikingSoldier = this.selectRandomSoldier(this.vikingArmy);

        const attackResult = attackedVikingSoldier.receiveDamage(attackingSaxonSoldier.strength);

        this.vikingArmy = this.vikingArmy.filter(soldier => {
            if (soldier.health > 0) {
                return true;
            } else {
                return false;
            }
        })

        return attackResult;

    }
    

    showStatus() {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "";
        }
    }
}
