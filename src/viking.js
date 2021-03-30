// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage (damage) {
       this.health -= damage

       return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`;     
    }
    battleCry () {
        return "Odin Owns You All!"

    }
}

// Saxon
class Saxon extends Soldier {
        
    receiveDamage (damage) {
        this.health -= damage
        return  this.health <= 0 ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`; 
    }
}

// War
class War {
    constructor () {
            this.vikingArmy = [];
            this.saxonArmy = [];
    }

    addSoldier(soldier) {
       soldier instanceof Viking ? this.vikingArmy.push(soldier) : this.saxonArmy.push(soldier); 
       //if (soldier instanceof Saxon) this.saxonArmy.push(soldier);
    }

    addViking(soldier){
        this.addSoldier(soldier);
    }
    addSaxon(soldier) {
        this.addSoldier(soldier);
    }

    genericAttack(attackerArmy, attackedArmy) {
        
        let randomAttacker = attackerArmy[Math.floor(Math.random() * attackerArmy.length)]
        let randomAttacked = attackedArmy[Math.floor(Math.random() * attackedArmy.length)]
        
       
        //console.log(randomAttacker)
        //console.log(randomAttacked)

        let ending = randomAttacked.receiveDamage(randomAttacker.strength);

        if (randomAttacked.health <= 0) attackedArmy.splice((attackedArmy.indexOf(randomAttacked)),1);
        
        // console.log(viking)
        return ending;
            
    }
    vikingAttack() {
        return this.genericAttack(this.vikingArmy, this.saxonArmy);

    }
    saxonAttack() {
        return this.genericAttack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if (this.vikingArmy.length === 0)  return "Saxons have fought for their lives and survived another day..."
        if (this.saxonArmy.length === 0)  return "Vikings have won the war of the century!"
        return "Vikings and Saxons are still in the thick of battle."
    }

}

// TESTS 

// const thor = new Viking("Thor", 300, 300)
// const thorius = new Viking("Thorius", 200, 250)
// const sexy1 = new Saxon("Sexy1", 150, 100)
// const sexy = new Saxon("Sexy", 100, 200)
// const war = new War ();


// war.addViking(thor);
// war.addViking(thorius);
// war.addSaxon(sexy);


// console.log(war)

// console.log(war.vikingAttack());
// console.log(war.showStatus());
