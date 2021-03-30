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
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has recieved ${damage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return (`Odin Owns You All!`);
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has recieved ${damage} points of damage`;
        }else{
            return `A Saxon has died in combat`
        }
    }
}

//randomizer
const randomize = function(max){
    return Math.floor(Math.random() * Math.floor(max));
}
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        if (this.saxonArmy.length == 0){
            return 'Vikings have won the war of the century!'
        }

        let randomSax = randomize(this.saxonArmy.length);
        let randomVik = randomize(this.vikingArmy.length);
        let defendSax = this.saxonArmy[randomSax];
        let attackVik = this.vikingArmy[randomVik];

        if (defendSax.health <= attackVik.strength){
            this.saxonArmy.splice([defendSax], 1);
            return defendSax.receiveDamage(attackVik.strength);
        }else{
            return defendSax.receiveDamage(attackVik.strength);
        }
    }

    saxonAttack(){
        if (this.vikingArmy.length == 0){
            return 'Saxons have fought for their lives and survived another day...'
        }

        let randomSax = randomize(this.saxonArmy.length);
        let randomVik = randomize(this.vikingArmy.length);
        let defendVik = this.saxonArmy[randomVik];
        let attackSax = this.saxonArmy[randomSax];

        if (defendVik.health <= attackSax.strength){
            this.vikingArmy.splice([defendVik], 1);
            return defendVik.receiveDamage(attackSax.strength);
        }else{
            return defendVik.receiveDamage(attackSax.strength);
        }
    }

    showStatus()
}

