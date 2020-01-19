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
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
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
        let randomSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
        let saxon = this.saxonArmy[randomSaxonPosition];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let attackResult = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonPosition, 1);
        }
        return attackResult;
    }

    saxonAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[randomVikingPosition];
        let attackResult = viking.receiveDamage(saxon.strength);
        if(viking.health <= 0) {
            this.vikingArmy.splice(randomVikingPosition, 1);
        }
        return attackResult;
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }


    // ====================================================================================
    // ============================   SUPER BONUS SECTION   ===============================

    // vikingAttack() {
    //     let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //     this.soldierAttack(viking);
    // }

    // saxonAttack() {
    //     let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //     this.soldierAttack(saxon);
    // }

    // soldierAttack(attacker) {
    //     let victim;
    //     let victimPosition;
    //     if(attacker instanceof Viking) {
    //         victimPosition = Math.floor(Math.random() * this.saxonArmy.length);
    //         victim = this.saxonArmy[victimPosition];
    //     } else {
    //         victimPosition = Math.floor(Math.random() * this.vikingArmy.length);
    //         victim = this.vikingArmy[victimPosition];
    //     }
    //     let attackResult = victim.receiveDamage(attacker.strength);
    //     if(victim.health <= 0) {
    //         if(victim instanceof Viking) {
    //             this.vikingArmy.splice(victimPosition, 1);
    //         } else {
    //             this.saxonArmy.splice(victimPosition, 1);
    //         }
    //     }
    //     return attackResult;
    // }

    // ====================================================================================
}
