// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}
    
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        return (this.health <= 0) ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health -= damage;
        return (this.health <= 0) ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`;
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        const deadSaxon = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        if(this.saxonArmy[0].health <= 0){
            this.saxonArmy.shift();
        }
        return deadSaxon;
    }

    saxonAttack(){
        const deadViking = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        if(this.vikingArmy[0].health <= 0){
            this.vikingArmy.shift();
        }
        return deadViking;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survive another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
