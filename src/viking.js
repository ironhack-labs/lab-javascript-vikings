// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strengh = strength;
    }

    attack() {
        return this.strengh;
    }
    receiveDemage(damage) {
        this.health = this.health - damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.vname = vname;


    }


    receiveDemage(damage) {
        super.receiveDemage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} `
        }
        else {
            return `${this.vname} died in act of combat`;
        }
    }
    batleCry() {
        return "Odin owns you all!"
    }


}



// Saxon
class Saxon extends Soldier {



    attack() {

        return this.strength;

    }

    receiveDemage(damage) {
        super.receiveDemage(damage);
        if (this.health > 0) {
            return "A saxon has received DAMAGE points of damage"
        }
        else {
            return `A saxon has died inc ombat`;
        }

    }


}


// War
class War {

    constructor() {
        vikingArmy = [];
        saxonArmy = [];
    }



    addViking(viking) {
        for (viking = 0; viking < 10; viking++) {
            this.vikingArmy.push(viking);

        }

    }
    addSaxon(saxon) {

        for (saxon = 0; saxon < 10; saxon++) {
            this.saxon.push(saxon);

        }

    }
    vikingAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const damage = randomViking.attack();
        const result = randomSaxon.receiveDamage(damage);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return result;
    }



    saxonAttack() {

    }
    showStatus() {

    }
    showStatus() {
        if (this.saxonArmy[this.saxon] === 0) {
            return "Vikings have won the war of the century!"

        }
        else if (this.vikingArmy[this.viking] === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of the battle";

        }
    }
}


