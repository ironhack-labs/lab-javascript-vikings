// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300;
        this.strength = 150;
    }

    attack = () => this.strength;

    receiveDamage(damage) {
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
        return this.health > 0 ? 
            `${this.name} has received ${damage} points of damage` : 
            `${this.name} has died in act of combat`;
    }

    battleCry = () => 'Odin Owns You All!';
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? 
            `A Saxon has received ${damage} points of damage` : 
            `A Saxon has died in combat`;
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

    fight(attackersArmy, enemysArmy) {
        const randomAttacker = attackersArmy[Math.floor(Math.random() * attackersArmy.length)];
        const randomEnemy = enemysArmy[Math.floor(Math.random() * enemysArmy.length)];
        const resultOfAttack = randomEnemy.receiveDamage(randomAttacker.strength);
        const onlyLivingEnemies = enemysArmy.filter(soldier => soldier.health > 0);
        return [resultOfAttack, onlyLivingEnemies];
    }

    vikingAttack() {
        const fightResults = this.fight(this.vikingArmy, this.saxonArmy);
        const onlyLivingSaxons = fightResults[1];
        this.saxonArmy = onlyLivingSaxons;
        return fightResults[0];
    }

    saxonAttack() {
        const fightResults = this.fight(this.saxonArmy, this.vikingArmy);
        const onlyLivingVikings = fightResults[1];
        this.vikingArmy = onlyLivingVikings;
        return fightResults[0];
    }

    showStatus() {
        return (
            this.saxonArmy.length === 0 ? 'Vikings have won the war of the century!' :
                this.vikingArmy.length === 0 ? 'Saxons have fought for their lives and survived another day...' :
            'Vikings and Saxons are still in the thick of battle.'
        );
    }
}
