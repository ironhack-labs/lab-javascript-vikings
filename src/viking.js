// Soldier
class Soldier {
    constructor(health, strength){
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
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}

//This function will be used to select a random saxon and viking from their array
function getRandomNb(max) {
    return Math.floor(Math.random() * Math.floor(max));
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

    attack(attackerArmy, defenderArmy){
        const randNbAtt = getRandomNb(attackerArmy.length);
        const randNbDef = getRandomNb(defenderArmy.length);
        const attacker = attackerArmy[randNbAtt];
        const defender = defenderArmy[randNbDef];

        const outcome = defender.receiveDamage(attacker.strength);
        if(defender.health <= 0) defenderArmy.splice(randNbDef, 1);
        return outcome;
    }

    // vikingAttack() {
    //     const randNbSax = getRandomNb(this.saxonArmy.length);
    //     const defendingSaxon = this.saxonArmy[randNbSax];
    //     const randNbVik = getRandomNb(this.vikingArmy.length);
    //     const attackingViking = this.vikingArmy[randNbVik];

    //     const outcome = defendingSaxon.receiveDamage(attackingViking.strength);
    //     if(defendingSaxon.health <= 0) this.saxonArmy.splice(randNbSax, 1);
    //     return outcome;
    // }

    // saxonAttack() {
    //     const randNbSax = getRandomNb(this.saxonArmy.length);
    //     const attackingSaxon = this.saxonArmy[randNbSax];
    //     const randNbVik = getRandomNb(this.vikingArmy.length);
    //     const defendingViking = this.vikingArmy[randNbVik];

    //     const outcome = defendingViking.receiveDamage(attackingSaxon.strength);
    //     if(defendingViking.health <= 0) this.vikingArmy.splice(randNbVik, 1);
    //     return outcome;
    // }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        //If no more saxons
        if(!this.saxonArmy.length) return "Vikings have won the war of the century!";
        //If no more vikings
        else if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
        //If there are still vikings and saxons
        else return "Vikings and Saxons are still in the thick of battle.";
    }

}
