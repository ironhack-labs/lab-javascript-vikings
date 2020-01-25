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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health >= 1) {
           return `${this.name} has received ${damage} points of damage`;
        } else {
           return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health >= 1) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);

    }
    vikingAttack(){
        var randomNumSax = Math.floor(Math.random() * this.saxonArmy.length);
        var randomNumVik = Math.floor(Math.random() * this.vikingArmy.length);

        if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return;
        } else {
            this.saxonArmy[randomNumSax].receiveDamage(this.vikingArmy[randomNumVik].strength);
            if (this.saxonArmy[randomNumSax].health <= 0) {
                this.saxonArmy.splice(randomNumSax,1);   
            }
        }  
    }

    saxonAttack(){
        var randomNumSax = Math.floor(Math.random() * this.saxonArmy.length);
        var randomNumVik = Math.floor(Math.random() * this.vikingArmy.length);

        if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return;
        } else {
            this.vikingArmy[randomNumVik].receiveDamage(this.saxonArmy[randomNumSax].strength);
            if (this.saxonArmy[randomNumSax].health <= 0) {
                this.saxonArmy.splice(randomNumSaxnode ,1);  
            } 
        } 
    }

    // attack(receiver,damager) {
    //     var randomNum = Math.floor(Math.random() * this.receiver.length);

    //     this.receiver[randomNum].receiveDamage(this.damager[randomNum].strength);

    //     if (this.receiver[randomNum].health <= 0) {
    //         this.receiver.splice(randomNum,1);
    //     } 
    // }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        }
        else if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        } 
        else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}

let newWar = new War(); 

newWar.addViking(new Viking('john',20,30));
newWar.addViking(new Viking('max',20,30));
newWar.addViking(new Viking('kess',2,30));
newWar.addSaxon(new Saxon(6000, 200));
newWar.addSaxon(new Saxon(6000, 200));

// newWar.vikingAttack();
// newWar.vikingAttack();
// newWar.vikingAttack();
// newWar.vikingAttack();
// newWar.vikingAttack();

console.log(newWar.vikingAttack());
console.log(newWar.saxonAttack());
console.log(newWar.vikingAttack());
console.log(newWar.saxonAttack());
console.log(newWar.vikingAttack());
console.log(newWar.vikingAttack());
console.log(newWar.saxonAttack());
console.log(newWar.vikingAttack());
console.log(newWar.saxonAttack());
console.log(newWar.vikingAttack());

console.log(newWar.showStatus());