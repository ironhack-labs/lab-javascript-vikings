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
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : 'A Saxon has died in combat';
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
        let saxon = this.selectSoldier.call(this, this.saxonArmy)
        let viking = this.selectSoldier.call(this, this.vikingArmy)
        let battleResult = this.attack(viking,saxon)
        if (saxon.health <= 0) {
            this.saxonArmy = this.removeDeadSoldier.call(this,this.saxonArmy, saxon)
        }
        return battleResult;
    }
    saxonAttack() {
        let saxon = this.selectSoldier.call(this, this.saxonArmy)
        let viking = this.selectSoldier.call(this, this.vikingArmy)
        let battleResult = this.attack(saxon,viking)
        if (viking.health <= 0) {
            this.vikingArmy = this.removeDeadSoldier.call(this, this.vikingArmy, viking)
        }
        return battleResult;

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    selectSoldier(army) {
        const randomSoldier = Math.floor(Math.random() * army.length)
        return army[randomSoldier]
    }
    attack(attack, defend) {
        return defend.receiveDamage(attack.strength)
    }
    removeDeadSoldier(army, deadSoldier) {
        return army.filter(soldier=> soldier !== deadSoldier)
    }
}