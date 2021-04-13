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
            this.damage = damage;
            this.health -= this.damage; 
        }

    
}



// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super (health, strength)
        this.name = name;
    }

        receiveDamage(damage) {
            this.damage = damage;
            this.health -= this.damage; 
            if (this.health > 0) {
                return (`${this.name} has received ${this.damage} points of damage`);
            } else {
                return (`${this.name} has died in act of combat`);
            }
        }

        battleCry() {
            return (`Odin Owns You All!`)
        }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return (`A Saxon has received ${this.damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`);
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }


    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)

    }

    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const vikingGo = this.saxonArmy.receiveDamage(this.vikingArmy.strength)
        // No se seguir ... el planteamiento de quitar los deads //
        if (randomSaxon.health <= 0; this.saxonArmy.indexOf(element) {
           return this.saxonArmy.splice(element,1)}
           return vikingGo;
        }

    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const saxonGO = this.vikingArmy.receiveDamage(this.saxonArmy.strength)
            // idem //
        if (randomViking.health <= 0); this.vikingArmy.indexOf(element) {
            return this.vikingArmy.splice(element,1)}
            return saxonGo;
 
    }

    showStatus() {
    if (saxonArmy.length === 0 && vikingArmy.length > 0) {
        return (`Vikings have won the war of the century!`);
    } else if (vikingArmy.length === 0 && saxonArmy.length > 0) {
            return (`Saxons have fought for their lives and survived another day...`);
        } else {
            return (`Vikings and Saxons are still in the thick of battle.`);
        }     
    }