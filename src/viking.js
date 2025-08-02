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
        if (damage > this.health) {
            this.health -= damage 
    }
}
}
    

class Viking extends Soldier {
    super(health, strength, name) {
        this.name = name;
    }
    receiveDamage(damage) {
       this.health -= damage;
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
        } else { 
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odins Owns You All!!!!"
    }
}

class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `this Saxon has received ${damage} points of damage`
        } else { 
            return "A Saxon has died in combat"}
    }
}    


// Vikingno


// War
class War {
    constructor(vikingArmy, saxonArmy) {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon() {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const indexViking = Math.floor(Math.random() * this.vikingArmy.length)

        const randomSaxon = this.SaxonArmy[indexSaxon];
        const randomViking = this.vikingArmy[indexViking];
        const resultAttack = randomSaxon.receiveDamage(randomViking.strength);



        if (randomSaxon.health <= 0) {
            this.SaxonArmy.splice([Math.floor(this.SaxonArmy.length * Math.random)], 1);
            console.log("se ha eliminado un viking random");
        } else {
            return resultAttack;
        }
    }
    saxonAttack() {

        const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const indexViking = Math.floor(Math.random() * this.vikingArmy.length)

        const randomSaxon = this.SaxonArmy[indexSaxon];
        const randomViking = this.vikingArmy[indexViking];
        const resultAttack = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.VikingArmy.splice([Math.floor(this.VikingArmy.length * Math.random)], 1);
            console.log("se ha eliminado un saxon random");
        } else {
            return resultAttack;
        }
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxon have fought for their lives and survived another day.."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
        }
    }

    // BONUS 5 hacer el metodo para el ataque genérico, y luego se elige atacante con el metodo especifico de cada uno.
    genericAttack(attackerArmy, defenderArmy) {
       
        const indexAttacker = Math.floor(Math.random() * attackerArmy.length);
        const indexDefender = Math.floor(Math.random() * defenderArmy.length);


        const randomAttacker = attackerArmy[indexAttacker];
        const randomDefender = defenderArmy[indexDefender];
        const resultAttack = randomDefender.receiveDamage(randomAttacker.strength);

        if (randomDefender.health <= 0) {
            defenderArmy.splice(indexDefender, 1);
        } return resultAttack;
    }

    vikingAttack() {
        return this.genericAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.saxonAttack(this.saxonArmy, this.vikingArmy)
    }
