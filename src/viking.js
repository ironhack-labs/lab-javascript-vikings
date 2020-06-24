// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []; // set empty arrays for both armies
    saxonArmy = [];

    addViking(Viking){
        this.vikingArmy.push(Viking); // push new Viking to arrat when calling addViking 
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);   // push new Saxon to array when calling addSaxon
    }

    vikingAttack(){
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){                          // check if both armies have soldiers in them before running code
            const rS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];      // assign random viking/saxon to variables
            const rV = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
                
            return rS.receiveDamage(rV.attack());                                              // return result of calling receiveDamage on saxon with viking's attack method as argument
        }      

        for(let i = 0; i < this.saxonArmy.length; i++){                                        // check if any saxons are dead and if so, remove from army (could only get this to work if I removed
            if (this.saxonArmy[i].health <=0) {                                                // the return statement from function above, how do I check after calling the other function?)
                this.saxonArmy.splice(i, 1);
            }
        }
    }

    saxonAttack(){
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            const rS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            const rV = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
                
            return rV.receiveDamage(rS.attack());
        }   

        for(let i = 0; i < this.saxonArmy.length; i++){
            if (this.saxonArmy[i].health <=0) {
                this.saxonArmy.splice(i, 1);
            }
        }
    }

    showStatus(){
        if (this.saxonArmy.length = 0){                                                        // didnt work because attack functions incomplete
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length = 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
