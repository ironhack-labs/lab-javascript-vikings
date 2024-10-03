//Iteration 1
// Soldier
class Soldier {

    //Class
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    //attack method
    attack () {
        return this.strength;
    }

    //receiveDamage()
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

//Iteration 2
// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } 
        
        return `${this.name} has died in act of combat`;
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}

//Iteration 3
// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

//Iteration 4
// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        if (viking instanceof Viking) {
            this.vikingArmy.push(viking);
        }   
    }

    addSaxon(saxon) {
        if (saxon instanceof Saxon) {
            this.saxonArmy.push(saxon);
        }
    }


    //Method for return a random player 
    getRandomPlayer(players) {
        const index= Math.floor(Math.random() * players.length);
        return players[index];
    }
    
    //Iteration 5
    //Attack method with 2 array parameters (Attackers and sufferers):
    attack (attackers, sufferers) {
        //Attacker random:
        const attackerRandom = this.getRandomPlayer(attackers);
        //Sufferer Random:
        const suffererRandom = this.getRandomPlayer(sufferers);
        //Call receiveDamage method and store the result
        const result = suffererRandom.receiveDamage(attackerRandom.strength);

        //If Sufferer is dead, remove of sufferers array
        if (suffererRandom.health <= 0) {
            //indexOf returns the index of "suffererRandom"
            sufferers.splice(sufferers.indexOf(suffererRandom), 1);
        }
        
        return result;
    }

    vikingAttack () {
        //Call attack method and pass the attackers array (vikings) as first argument  and the sufferers array (saxons) as 2º argument 
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        //Call the attack method and pass the attackers array (saxons) as first argument  and the sufferers array (vikings) as 2º argument 
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
