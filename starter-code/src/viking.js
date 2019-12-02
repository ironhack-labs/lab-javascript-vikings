// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
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
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking (Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon);
    }

    //Super Bonus!
    attack(armyA, armyB) { 
        let randomA = Math.floor(Math.random()*armyA.length);
        let randomB = Math.floor(Math.random()*armyB.length);
        const result = armyB[randomB].receiveDamage(armyA[randomA].strength);
        armyB = armyB.filter(element => element.health > 0);
        return result;
    }

    vikingAttack () {
        //Super Bonus!
        return this.attack(this.vikingArmy, this.saxonArmy); 

        //Legacy
        // let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        // let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        // const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        // this.saxonArmy = this.saxonArmy.filter(element => element.health > 0);
        // return result;
    }
    saxonAttack () {
        //Super Bonus!
        return this.attack(this.saxonArmy, this.vikingArmy); 

        //Legacy
        // let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        // let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        // const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        // this.vikingArmy = this.vikingArmy.filter(element => element.health > 0);
        // return result;
    }
    showStatus () {
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        } else{
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}


// const viking1 = new Viking("Joao", 200, 79);
// const saxon1 = new Saxon(80, 50);
// const war1 = new War();
// war1.addViking(viking1);
// war1.addSaxon(saxon1);
// console.log(war1.saxonAttack());
// console.log(war1.vikingAttack());
