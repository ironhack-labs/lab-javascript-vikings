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
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
        if(this.health <= 0) return `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
        if(this.health <= 0) return `A Saxon has died in combat`
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
        
    }

    addViking(objViking) {
        this.vikingArmy.push(objViking);
        console.log()
        /* const moby = new Whale('Moby', 'white', 'Yum!'); */
    }

    addSaxon(objSaxon) {
        this.saxonArmy.push(objSaxon);
    }

    vikingAttack() {

        /* const saxon = new Saxon(this.health, this.strength);
        const viking = new Viking(this.name, this.health, this.strength); */
        let randomViking1 = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon1 = Math.floor(Math.random() * this.saxonArmy.length);
        let resultOfAttack = this.saxonArmy[randomSaxon1].receiveDamage(this.vikingArmy[randomViking1].strength);
        if (this.saxonArmy[randomSaxon1].health <= 0) {this.saxonArmy.pop([randomSaxon1])};
        return resultOfAttack;
    }
    /* saxonAttack()
    showStatus() */

}

/* const viking1 = new Viking('Ragnar', 100, 88);
const war1 = new War();


war1.addViking(viking1);
console.log(war1.addViking()) */

