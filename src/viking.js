// worked with Brittney :)

// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        this.attack = () => {
            return this.strength;
        }
        this.receiveDamage = (damage) => {
            this.health -= damage;
        }
    }
}

// Viking 

class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        this.receiveDamage = (damage) => {
            this.health -= damage;
            if (this.health > 0) {
                return `${name} has received ${damage} points of damage`
         } else return `${name} has died in act of combat`
        }
        this.battleCry = () => {
            return `Odin Owns You All!`;
         }
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = (damage) => {
        this.health -= damage;
            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`
        } else return `A Saxon has died in combat`
    }
}

// // War
 class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addSaxon(saxon){
        this.saxon = new Saxon;
        this.saxonArmy.push(saxon);
    };
    addViking(viking){
        this.viking = new Viking;
        this.vikingArmy.push(viking);
    };
    vikingAttack(){
        randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];

        randomViking = vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        randomSaxon.receiveDamage(randomViking.strength());
    };
    saxonAttack(){
        randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
        
        randomViking = vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        randomViking.receiveDamage(randomSaxon.strength());
    };
    showStatus(){

    };

 };
