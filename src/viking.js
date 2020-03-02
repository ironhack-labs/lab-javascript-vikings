// Soldier
class Soldier {
    constructor(health, strength){
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
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        // let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let msg = randomSaxon.receiveDamage(randomViking.attack());

        // if(msg === `A Saxon has died in combat`){
        //     const idx = this.saxonArmy.indexOf(randomSaxon);
        //     this.saxonArmy.splice(idx, 1);
        // }

        // return msg;
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack(){
        // let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let msg = randomViking.receiveDamage(randomSaxon.attack());

        // if(randomViking.health <= 0){
        //     const idx = this.vikingArmy.indexOf(randomViking);
        //     this.vikingArmy.splice(idx, 1);
        // }
        
        // return msg;
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    attack(attackingArmy, defendingArmy){
        let attackingSoldier = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
        let defendingSoldier = defendingArmy[Math.floor(Math.random() * defendingArmy.length)];

        let msg = defendingSoldier.receiveDamage(attackingSoldier.attack());

        if(defendingSoldier.health <= 0){
            const idx = defendingArmy.indexOf(defendingSoldier);
            defendingArmy.splice(idx, 1);
        }

        return msg;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
