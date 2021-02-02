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
        } return `A Saxon has died in combat`
    }
}

// // War
 class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addSaxon(saxon){
        // this.saxon = new Saxon;
        this.saxonArmy.push(saxon);
    };
    addViking(viking){
        // this.viking = new Viking;
        this.vikingArmy.push(viking);
    };
    vikingAttack(){
        // const randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];

        // const randomViking = vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        // randomSaxon.receiveDamage(randomViking.strength());

        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const poorSaxon = this.saxonArmy[saxonIndex];
        const badViking = this.vikingArmy[vikingIndex];

        const damage = poorSaxon.receiveDamage(badViking.attack());

        if (poorSaxon.health <= 0){
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return damage;
    };
    saxonAttack(){
        // randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
        
        // randomViking = vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        // randomViking.receiveDamage(randomSaxon.strength());

        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const poorViking = this.vikingArmy[vikingIndex];
        const badSaxon = this.saxonArmy[saxonIndex];

        const damage = poorViking.receiveDamage(badSaxon.attack());

        if (poorViking.health <= 0){
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return damage;
    };
    showStatus(){
        if(!this.saxonArmy.length){
            return `Vikings have won the war of the century!`
        }
        if(!this.vikingArmy.length){
            return `Saxons have fought for their lives and survived another day...`
        } return `Vikings and Saxons are still in the thick of battle.`
    };

 };
