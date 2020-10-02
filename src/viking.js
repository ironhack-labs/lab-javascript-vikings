// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    
    constructor(name, health, strength) {
        super(health, strength); 
        this.name = name;
    }

    //Override receiveDamage method
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return(`${this.name} has received ${damage} points of damage`);
        } else {
            return(`${this.name} has died in act of combat`);
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return(`A Saxon has received ${damage} points of damage`);
        } else {
            return(`A Saxon has died in combat`);
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
        let res;
        let attackedSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length-1))];
        let attackingViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length-1))];
        res = attackedSaxon.receiveDamage(attackingViking.strength);
        if(attackedSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(sxn => sxn.health > 0);
        }
        return res;
    }

    saxonAttack() {
        let res;
        let attackedViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length-1))];
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length-1))];
        res = attackedViking.receiveDamage(attackingSaxon.strength);
        if(attackedViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter(sxn => sxn.health > 0);
        }
        return res;
    }
    showStatus() {
        if ((this.saxonArmy.length >= 1) && (this.vikingArmy.length >= 1)) {
            return 'Vikings and Saxons are still in the thick of battle.';
        } 
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } 
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        
    }

    //bonus
    //This function receives a string that represents the attacking army
    attack(army) {
        if (army !== 'vikings' && army !== 'saxons') {
            return "The time for this army to figth hast not come yet...";
        } else if (army === 'vikings') {
            attackingArmy = this.vikingArmy;
            attackedArmy = this.saxonArmy;
        } else if (army === 'saxons') {
            attackingArmy = this.saxonArmy;
            attackedArmy = this.vikingArmy;
        }

        let res;
        let attackedSoldier = this.attackedArmy[Math.floor(Math.random()*(this.attackedArmy.length-1))];
        let attackingSoldier = this.attackingArmy[Math.floor(Math.random()*(this.attackingArmy.length-1))];
        res = attackedSoldier.receiveDamage(attackingSoldier.strength);
        if(attackedSoldier.health <= 0) {
            this.attackedArmy = this.attackedArmy.filter(sxn => sxn.health > 0);
        }
        return res;

    }
}





