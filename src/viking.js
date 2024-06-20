// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
       return this.strength
    }

    receiveDamage(damage) {

        this.health = this.health - damage;


    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {

        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {

        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {

     return "Odin Owns You All!";

    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage (damage) {

        this.health = this.health - damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }else if (this.health  <= 0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    constructor (vikingArmy = [], saxonArmy = []) {

        this.vikingArmy = vikingArmy;

        this.saxonArmy = saxonArmy;

    }

    addViking (viking) {

    
        this.vikingArmy.push(viking);


    }

    addSaxon (saxon) {

        this.saxonArmy.push(saxon);

    }

    vikingAttack () {

      
    let randomSaxonIndex = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

    let randomVikingIndex = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    

     let newHealth = randomSaxonIndex.receiveDamage(randomVikingIndex.strength);

     

        if (randomSaxonIndex.health <= 0){

            this.saxonArmy.splice(randomSaxonIndex,1);

            
        }  

        return newHealth

    }

    saxonAttack () {

     let randomSaxonIndex = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

     let randomVikingIndex = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    

     let newHealth = randomVikingIndex.receiveDamage(randomSaxonIndex.strength);

     if (randomVikingIndex.health <= 0) {

        this.vikingArmy.splice(randomVikingIndex,1);

     }

     return newHealth


    }


    showStatus () {

    if (this.vikingArmy.length === 0) {

        return "Saxons have fought for their lives and survived another day...";

    } else if ( this.saxonArmy.length === 0) {

        return "Vikings have won the war of the century!";
    } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0 ) {

        return "Vikings and Saxons are still in the thick of battle.";


    }


    }


}


const w1 = new War();

const v1 = new Viking("James", 0, 0);
// const v2 = new Viking("Simon", 1, 1);
w1.addViking(v1);
// w1.addViking(v2);

const s1 = new Saxon(5, 5);
w1.addSaxon(s1);

// w1.saxonAttack;
w1.vikingAttack;
console.log(w1.showStatus());
console.log(w1.vikingArmy);
console.log(w1.saxonArmy);


