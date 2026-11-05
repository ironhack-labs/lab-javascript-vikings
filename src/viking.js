// Soldier
class Soldier {
    constructor (health,strength){
        this.health = health;
        this.strength = strength;
    }
    
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;

        if (this.health <= 0){
            return `${this.name} has died in act of combat`
        }else{
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(damage){
        this.health -= damage;

        if (this.health <= 0){
            return "A Saxon has died in combat"
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    constructor(){
        //initialize the properties (vikingArmy + saxonArmy) with empty arrays
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    //the method receives one argument - viking
    addViking(viking){
        this.vikingArmy.push(viking); //pushes the received object in the end of the empty array
    }
    //the method receives one argument - saxon
    addSaxon(saxon){
        this.saxonArmy.push(saxon); //pushes the received object in the end of the empty array
    }
    vikingAttack(){
        //picking random positions for Viking and Saxon for each army array - vikingArmy & saxonArmy
        //army.length tells us how many are alive.
        //Math.random generates a random number from 0 to 1
        //we multiply math.random and amy length
        // we use math floor so it rounds them down to an actual number so we can access the index
        const chosenVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
        const chosenSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);

        // makes the random viking attack the random Saxon and saves the combat message into a variable called result.
        //this.vikingArmy[chosenVikingPosition].strength -> looks inside of this army at a random position, find that Viking and sees his strength
        //this.saxonArmy[chosenSaxonPosition].receiveDamage -> looks inside of this army at a random positionn and runs the receiveDamage method, putting Vikings strenght into it
        //receiveDamage method is executed, lowers the Saxon's health
        const result = this.saxonArmy[chosenSaxonPosition].receiveDamage(this.vikingArmy[chosenVikingPosition].strength);

        //if statement checks the health of the random Sanxon from the array, if the health is less or equal to 0, it means that they died
        //this.saxonArmy.splice(chosenSaxonPosition,1 -> splice modifies the array, it checks the position of the random saxon that died and removes 1 items from that spot
        if (this.saxonArmy[chosenSaxonPosition].health <= 0){
            this.saxonArmy.splice(chosenSaxonPosition,1)
        }

        return result;
        
    }
    saxonAttack(){
        //same logic as vikingAttack method

        const chosenVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
        const chosenSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);

        const result = this.vikingArmy[chosenVikingPosition].receiveDamage(this.saxonArmy[chosenSaxonPosition].strength);

        if (this.vikingArmy[chosenVikingPosition].health <= 0){
            this.vikingArmy.splice(chosenVikingPosition,1)
        }
        return result;
    }


    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";

        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }


}