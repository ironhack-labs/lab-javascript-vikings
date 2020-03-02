// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(thedamage) {
        this.health -= thedamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super (health,strength)
        this.name = name;
    }
    receiveDamage(thedamage){
        this.health -= thedamage;
        if ( this.health > 0) {
            return (`${this.name} has received ${thedamage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super (health,strength)
    }
    receiveDamage(thedamage){
        this.health -= thedamage;
        if ( this.health > 0) {
            return (`A Saxon has received ${thedamage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let saxonArmyLength = this.saxonArmy.length;
        let vikingArmyLength = this.vikingArmy.length;
        let randomSaxon = Math.floor(Math.random()*saxonArmyLength);
        let randomViking = Math.floor(Math.random()*vikingArmyLength);
        let message = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return message;
    }
    saxonAttack(){
        let saxonArmyLength = this.saxonArmy.length;
        let vikingArmyLength = this.vikingArmy.length;
        let randomSaxon = Math.floor(Math.random()*saxonArmyLength);
        let randomViking = Math.floor(Math.random()*vikingArmyLength);
        let message = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return message;
    }
    showStatus() {
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}


let a = new Viking('daniel', 100, 100);
let b = new Saxon(1000, 1000);
let c = new War
c.addViking(a);
c.addSaxon(b);
console.log('jogada 1');
console.log(c);
console.log(c.showStatus());
c.vikingAttack();
console.log('jogada 2');
console.log(c);
console.log(c.showStatus());
c.saxonAttack();
console.log('jogada 3');
console.log(c);
console.log(c.showStatus());
