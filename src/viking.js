/*  ---- Soldier ----  */
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(demage) {
        this.health -= demage;
    }
}

/*  ---- Viking ----  */
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    battleCry() {
        return "Odin Owns You All!";
    }

    receiveDamage(demage) {
        this.health -= demage;
        if (this.health > 0) {
            return `${this.name} has received ${demage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

/*  ---- Saxon ----  */
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }

    receiveDamage(demage) {
        this.health -= demage;
        if (this.health > 0) {
            return `A Saxon has received ${demage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

/*  ---- War ----  */
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    //Method to add vikings & saxons to each array
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }

    //Viking attack
    vikingAttack() {
        // Viking Attack: Pick a random viking from viking array
        let i = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingAttacker = this.vikingArmy[i];

        // Saxon Defend: Pick a random saxon from saxon array
        let j = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonDefender = this.saxonArmy[j];

        // Result of the combat
        let resultOfVikingAttack = saxonDefender.receiveDamage(vikingAttacker.strength);

        // Remove dead Saxons from the army
        if (saxonDefender.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonDefender), 1);
        }

        return resultOfVikingAttack;
    }

    //Saxon attack
    saxonAttack() {
        // Saxon Attack: Pick a random saxon from saxon array
        let k = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonAttacker = this.saxonArmy[k];

        // Viking Defend: Pick a random viking from viking array
        let l = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingDefender = this.vikingArmy[l];

        // Result of the combat
        let resultOfSaxonAttack = vikingDefender.receiveDamage(saxonAttacker.strength);

        // Remove dead Saxons from the army
        if (vikingDefender.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingDefender), 1);
        }
        
        return resultOfSaxonAttack;
    }

    /* Iteration 5 get cleaner code

    attack(attacker, defender) {
        let i = Math.floor(Math.random() * attacker.length);
        let j = Math.floor(Math.random() * defender.length);

        let warAttacker = attacker[i];
        let warDefender = defender[j];

        let resultOfAttack = warDefender.receiveDamage(warAttacker.strength);

        if(warDefender.health <= 0) {
            defender.splice(defender.indexOf(warDefender), 1);
        }

        return resultOfAttack;
    }
    */

    showStatus(){
        console.log(this.saxonArmy)
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}