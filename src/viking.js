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
        super (health, strength)
        this.name = name;
    }

        receiveDamage(damage) {
            this.health -= damage; 
            if (this.health > 0) {
                return `${this.name} has received ${this.damage} points of damage`;
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
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}


class War {
    constructor () {
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
        const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxon,1);
        }
        return saxon.receiveDamage(viking.strength) 
    }
        
    

    saxonAttack() {
        const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        if (saxon.health <= 0) {
            this.vikingArmy.splice(saxon,1);
        }
        return viking.receiveDamage(saxon.strength);
    }

    showStatus() {
    if (saxonArmy.length === 0 && vikingArmy.length > 0) {
        return (`Vikings have won the war of the century!`);
    } else if (vikingArmy.length === 0 && saxonArmy.length > 0) {
            return (`Saxons have fought for their lives and survived another day...`);
        } else {
            return (`Vikings and Saxons are still in the thick of battle.`);
        }     
    }; 