// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        const stringAlive = `${this.name} has received ${damage} points of damage`
        const stringDead = `${this.name} has died in act of combat`
        return this.health > 0 ? stringAlive : stringDead
    }

    battleCry () {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage
        const stringAlive = `A Saxon has received ${damage} points of damage`
        const stringDead = `A Saxon has died in combat`
        return this.health > 0 ? stringAlive : stringDead
    }

}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack() {
        
        const vikingAttacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        
        const randomIndexSaxonDefender = Math.floor(Math.random()*this.saxonArmy.length)
        const saxonDefender = this.saxonArmy[randomIndexSaxonDefender];
        const battleOutcome = saxonDefender.receiveDamage(vikingAttacker.strength)

        if(saxonDefender.health <= 0) {
            this.saxonArmy.splice(randomIndexSaxonDefender, 1)
        }

        return battleOutcome
    }

    saxonAttack() {
        
        const saxonAttacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        
        const randomIndexVikingDefender = Math.floor(Math.random()*this.vikingArmy.length)
        const vikingDefender = this.vikingArmy[randomIndexVikingDefender];
        const battleOutcome = vikingDefender.receiveDamage(saxonAttacker.strength);

        if(vikingDefender.health <= 0) {
            this.vikingArmy.splice(randomIndexVikingDefender, 1)
        }

        return battleOutcome
    }

    showStatus() {

        const stillFighting =this.vikingArmy.length > 0 && this.saxonArmy.length > 0;
        const stillFightingInfotext = `Vikings and Saxons are still in the thick of battle.`;
        const allVikingsDead = !this.vikingArmy.length;
        const allVikingsDeadInfotext = `Saxons have fought for their lives and survived another day...`;
        const allSaxonsDeadInfotext = `Vikings have won the war of the century!`;
        
        return stillFighting ? stillFightingInfotext : allVikingsDead ? allVikingsDeadInfotext : allSaxonsDeadInfotext
        
}
}
