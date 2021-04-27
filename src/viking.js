// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health,strength);
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health-=damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health,strength);
    }

    receiveDamage(damage){
        this.health-=damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
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
        //Obtain a random saxon position from the array
        const randomSaxonPosition = Math.floor(Math.random()*this.saxonArmy.length);

        //Select a random saxon and a random viking from the arrays
        let randomSaxon = this.saxonArmy[randomSaxonPosition];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        //Viking attack saxon
        const result = randomSaxon.receiveDamage(randomViking.strength);

        //if saxon dies, remove it from the array
        if(result === "A Saxon has died in combat") {
            this.saxonArmy.splice(randomSaxonPosition, 1);
        }

        //Return the result of the attack
        return result;
    }

    saxonAttack(){
        //Obtain a random saxon position from the array
        const randomVikingPosition = Math.floor(Math.random()*this.vikingArmy.length);

        //Select a random saxon and a random viking from the arrays
        let randomViking = this.vikingArmy[randomVikingPosition];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        //Viking attack saxon
        const result = randomViking.receiveDamage(randomSaxon.strength);

        //if saxon dies, remove it from the array
        if(result === `${randomViking.name} has died in act of combat`) {
            this.vikingArmy.splice(randomVikingPosition, 1);
        }

        //Return the result of the attack
        return result;
    }

    showStatus() {
        if(this.vikingArmy.length===0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.saxonArmy.length===0) {
            return "Vikings have won the war of the century!";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}