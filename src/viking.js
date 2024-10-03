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
    constructor(name, health, strength) {   // Aunque extienda la clase hace falta pasar los anteriores argumentos
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
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let indexRandomSaxonAttacked = Math.floor(Math.random() * this.vikingArmy.length);
        let indexRandomVikingAttacking = Math.floor(Math.random() * this.saxonArmy.length); 

        let randomSaxonAttacked = this.saxonArmy[indexRandomSaxonAttacked];
        let randomVikingAttacking = this.vikingArmy[indexRandomVikingAttacking];

        let damageInsuflated = randomSaxonAttacked.receiveDamage(randomVikingAttacking.strength);
       
        if (randomSaxonAttacked.health <= 0) {
            this.saxonArmy.splice(indexRandomSaxonAttacked, 1);
        }

        return damageInsuflated;
    }

    saxonAttack() {
        let indexRandomSaxonAttacking = Math.floor(Math.random() * this.saxonArmy.length);
        let indexRandomVikingAttacked = Math.floor(Math.random() * this.vikingArmy.length); 
 
        let randomVikingAttacked = this.vikingArmy[indexRandomVikingAttacked];
        let randomSaxonAttacking = this.saxonArmy[indexRandomSaxonAttacking];
 
        let damageInsuflated = randomVikingAttacked.receiveDamage(randomSaxonAttacking.strength);
        
        if (randomVikingAttacked.health <= 0) {
            this.vikingArmy.splice(indexRandomVikingAttacked, 1);
        }
 
        return damageInsuflated;
    }

    warAttack(WarFrontAttacking, WarFrontAttacked) {     // Avoiding Repetitive Code
        let [attacking, attacked] =
            (WarFrontAttacking.toLowerCase() === 'vikings' && WarFrontAttacked.toLowerCase() === 'saxons') ? [this.vikingArmy, this.saxonArmy] :
            (WarFrontAttacking.toLowerCase() === 'saxons' && WarFrontAttacked.toLowerCase() === 'vikings') ? [this.saxonArmy, this.vikingArmy] :
            (() => { throw new Error("Invalid armies."); })();

        let indexRandomAttacking = Math.floor(Math.random() * attacking.length);
        let indexRandomAttacked = Math.floor(Math.random() * attacked.length); 
 
        let randomAttacked = attacked[indexRandomAttacked];
        let randomAttacking = attacking[indexRandomAttacking];
 
        let damageInsuflated = randomAttacked.receiveDamage(randomAttacking.strength);
        
        if (randomAttacked.health <= 0) {
            attacked.splice(indexRandomAttacked, 1);
        }
 
        return damageInsuflated;
    }

    showStatus() {
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
