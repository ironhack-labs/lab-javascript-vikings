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
    } return 
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    // unnecessary?
    // super(attack) {
    //     return this.strength;
    // }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
        //     return `${name} has died in act of combat`;
        // } else if (damage <= this.health) {
        //     return `${name} has received ${damage} points of damage`;

        //SECOND TRY
        return this.name + " has died in act of combat";
        } else {
            return this.name + " has received " + damage + " points of damage";
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }

}

// War
class War {
    
    constructor() {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
        return undefined;
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
        return undefined;
    }

    vikingAttack() {
        // let randomViking = Math.floor(Math.random * this.vikingArmy.length); WOULD IT WORK?
        let randomViking = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.length -= 1;
        }
        return randomViking;
    }

    saxonAttack() {
        let randomSaxon = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.length -= 1;
        }
        return randomSaxon;
    }

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length <=0){
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }

    } 
}

        

// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."




