// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(dmg) {
        this.health -= dmg;


    }
}

let Soldado1 = new Soldier(300, 150);

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)

        this.name = name;
    }

    receiveDamage(dmg) {
        this.health -= dmg;

        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

let Viking1 = new Viking('Harald', 300, 150);

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(dmg) {

        this.health -= dmg;
        console.log(dmg, this.health);

        if (this.health > 0) {
            return "A Saxon has received " + dmg + " points of damage"
        } else {
            return "A Saxon has died in combat"
        }
    }

}

// War

class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        let arrVik = new Viking(viking.name, viking.health, viking.strength);
        this.vikingArmy.push(arrVik);
    }

    addSaxon(saxon) {
        let arrSax = new Saxon(saxon.health, saxon.strength)
        this.saxonArmy.push(arrSax);
    }

    vikingAttack() {

        let saxonAttacked = this.selectRandom(this.saxonArmy);
        let vikingAttacker = this.selectRandom(this.vikingArmy);

        return saxonAttacked.receiveDamage(vikingAttacker.strength)

    }
    saxonAttack() { }
    showStatus() { }

    selectRandom(arr) {
        if (arr.length === 1) {
            return arr[0];
        } else if (arr.length > 1) {
            let random = Math.floor(Math.random() * arr.length);
            return arr[random];
        }
    }
}


