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
// I don't know why the "viking" doesn't inherit this.health & this.strength from Soldier
// I got this to pass Jasmine by hard coding but would like to know how to do this dynamically

class Viking extends Soldier{
    constructor(name, health, strength){
        super(name);
        this.name = name;
        this.health = health;
        this.strength = strength;
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
