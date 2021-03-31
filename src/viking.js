// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    };

    receiveDamage(damage){
        this.health = this.health - damage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    };

    battleCry(){
        return 'Odin Owns You All!';
    };
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }

    receiveDamage(damage){
        let saxonInjured = `A Saxon has received ${damage} points of damage`
        let saxonDied = `A Saxon has died in combat`
        this.health = this.health - damage;
        if (this.health > 0){
            return saxonInjured;
        } else {
            return saxonDied;
        }
    }


}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking){ //if want to instigate here, it should take the arguments name health and strength.
    //    // this.vikingData = vikingData;
    //     const viking = new Viking(name, health, strength);//do I have to put the argument name here too?
    //     this.vikingArmy.push(viking); //add var from outside, so no this needed.
        this.vikingArmy.push(viking)
    };

    addSaxon(saxon){
        this.saxonArmy.push(saxon);//
    }

    vikingAttack(){
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const selectedViking = this.vikingArmy[vikingIndex];
        const selectedSaxon = this.saxonArmy[saxonIndex];
        //console.log(selectedSaxon)
        let result = selectedSaxon.receiveDamage(selectedViking.strength);
        
        if (selectedSaxon.health < 1){
            this.saxonArmy.splice(saxonIndex,1); //splice
            //return `A Saxon has died in combat`; // I don't understand why the return value from the receiveDamage() method above is not autmoatically returned here?/
        }
        return result;

    };

    saxonAttack(){
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const selectedViking = this.vikingArmy[vikingIndex];
        const selectedSaxon = this.saxonArmy[saxonIndex];
        let result = selectedViking.receiveDamage(selectedSaxon.strength);
        if (selectedViking.health < 1){
            this.vikingArmy.splice(vikingIndex,1);
            //return `${this.selectedViking.name} has died in act of combat`
        }
        return result;
    };

    showStatus(){
        //check if array is empty
        if (this.saxonArmy.length < 1){
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length < 1) {
            return  "Saxons have fought for their lives and survived another day...";
        }

        if((this.saxonArmy.length >0) && (this.vikingArmy.length >0)){
           return "Vikings and Saxons are still in the thick of battle."
        }
    };
}

const vikingSaxonWar = new War();
//vikingSaxonWar.addViking('Blatand', 5, 5); 
// vikingSaxonWar.addViking('Blatandson', 5, 5);
// vikingSaxonWar.addViking('Thor', 5, 5);
const saxonOne = new Saxon(5,5);
vikingSaxonWar.addSaxon(saxonOne);
// vikingSaxonWar.addSaxon(5,5);
// vikingSaxonWar.addSaxon(5,5);
// vikingSaxonWar.addSaxon(5,5);

// vikingSaxonWar.vikingAttack();
