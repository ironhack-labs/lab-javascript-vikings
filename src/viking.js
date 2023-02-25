// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damageReceived) {
        this.health = this.health - damageReceived;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damageReceived) {
        this.health -= damageReceived;
        if(this.health > 0) {
            return `${this.name} has received ${damageReceived} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damageReceived) {
        this.health -= damageReceived;
        if(this.health > 0) {
            return `A Saxon has received ${damageReceived} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    // I'm commenting this part of the code because it's the extra iteration where we 
    // simplify the vikingAttack() and saxonAttack() methods by creating a generic one. 
    // It should be checked too, if possible. 
    // Thanks :)
    /* startAttack(attackArray, defenseArray) {
        const attackerIndex = Math.floor(Math.random() * this.attackArray.length);
        const chosenAttacker = attackArray[attackerIndex];

        const defenderIndex = Math.floor(Math.random() * this.defenseArray.length);
        const chosenDefender = defenseArray[defenderIndex];

        const attackResult = chosenDefender.receiveDamage(chosenAttacker.strength);

        if(chosenDefender.health <= 0) {
            defenseArray.splice(defenderIndex, 1);
        }

        return attackResult;
    } */

    vikingAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const currentSaxon = this.saxonArmy[saxonIndex];
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const currentViking = this.vikingArmy[vikingIndex];

        const vikingAttackResult = currentSaxon.receiveDamage(currentViking.strength);

        if(currentSaxon.health <= 0) {
            this.saxonArmy.splice(currentSaxon, 1);
        }
        
        return vikingAttackResult;
    }

    saxonAttack() {
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const currentViking = this.vikingArmy[vikingIndex];
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const currentSaxon = this.saxonArmy[saxonIndex];


        const saxonAttackResult = currentViking.receiveDamage(currentSaxon.strength);

        if(currentViking.health <= 0) {
            this.vikingArmy.splice(currentViking, 1);
        }

        return saxonAttackResult;
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }


    }
}

/* ------------------------------------------------------------------------
|ALL THE CODE BELOW HERE IS TOTALLY EXTRA AND WAS NOT IN THE README file   |
|I just wanted to play a bit with the classes that I've built and see how  |
|                    it works and how to MAKE IT work!                     |
|------------------------------------------------------------------------- */

const firstWar = new War(); // To begin, we need to create a war. We can' play without a war!

//Now I will create the Vikings for my army. 
const vikingSoldier1 = new Viking('Ragnar', 200, 36);
const vikingSoldier2 = new Viking('Lagertha', 125, 20);
const vikingSoldier3 = new Viking('Björn', 100, 16);
const vikingSoldier4 = new Viking('Floki', 50, 5);

//And now I will do the same with my Saxons. 
const saxonSoldier1 = new Saxon(200, 36);
const saxonSoldier2 = new Saxon(250, 5);
const saxonSoldier3 = new Saxon(100, 16);
const saxonSoldier4 = new Saxon(50, 5);

//Of course now I need to add my soldiers to their respectives armies:
firstWar.addViking(vikingSoldier1);
firstWar.addViking(vikingSoldier2);
firstWar.addViking(vikingSoldier3);
firstWar.addViking(vikingSoldier4);

firstWar.addSaxon(saxonSoldier1);
firstWar.addSaxon(saxonSoldier2);
firstWar.addSaxon(saxonSoldier3);
firstWar.addSaxon(saxonSoldier4);

//Now everything is ready. We've got a war, and soldiers in their respectives armies. 
console.log(`SOLDIERS!!!\nLET THE WAR...\nBEGIN!!!`);

//I've been testing different things and I came to the conclusion that we can use loops to make this work:

while (firstWar.vikingArmy.length > 0 && firstWar.saxonArmy.length > 0) { //This checks that there are soldiers alive in both armies. Without soldiers there can't be a war. 
    if((Math.random() * 10) < 5) {
        console.log(firstWar.vikingAttack());
    } else {
        console.log(firstWar.saxonAttack());
    }
} //The inner if loop basically chooses a random number between 0 and 5 if the number is lower than 5, the Vikings attack, and if it's greater, the Saxons attack.
// I think that doing this randomly is the best way to do it. At least better than doing it manually. 

//Finally, when there are no more soldiers in each army, the war is over. 
//That means that one of the armies length is equal to 0, so that takes us out of the while loop. 
//Now we just need to check which army has 0 soldiers alive (aka array.length === 0), and declare the winner. Like this:

if(firstWar.saxonArmy.length > 0) {
    console.log(`The Saxons have won the war! War is over.`)
} else {
    console.log(`The Viking army has won the war! ${Viking.battleCry}`);
}