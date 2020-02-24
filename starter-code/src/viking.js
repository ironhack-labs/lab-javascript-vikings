// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        // console.log("Test");
        return this.strength;
    }
    receiveDamage(damage){
        // console.log("Test");
        this.health = this.health - damage;
    }
}

// // Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health <= 0){
            return (`${this.name} has died in act of combat`)
        }
        return (`${this.name} has received ${damage} points of damage`)
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// // Saxon
class Saxon extends Soldier{
    constructor (health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health <= 0){
            return (`A Saxon has died in combat`)
        }
        return (`A Saxon has received ${damage} points of damage`)
    }
}

// // War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let saxonNr = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingNr = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[saxonNr];
        let randomViking = this.vikingArmy[vikingNr];

        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <=0){
            this.saxonArmy.splice(randomSaxon, 1)
        }
        return result;
    }

    saxonAttack(){
        let saxonNr = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingNr = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[saxonNr];
        let randomViking = this.vikingArmy[vikingNr];

        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <=0){
            this.vikingArmy.splice(randomViking, 1)
        }
        return result;

    }
    showStatus(){
        if (this.saxonArmy.length >=1 && this.vikingArmy.length >=1){
            return `Vikings and Saxons are still in the thick of battle.`
        }
        else if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        return `Saxons have fought for their lives and survived another day...`
    }
}