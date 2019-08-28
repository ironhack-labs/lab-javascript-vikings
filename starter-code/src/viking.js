// Soldier
class Soldier {
    constructor(healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg);
        this.name = nameArg;
    }

    receiveDamage(damage){
        this.health -= damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg){
        super(healthArg, strengthArg);
    }

    receiveDamage(damage){
        this.health -= damage;

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
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
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let str = randomSaxon.receiveDamage(randomViking.strength)
        
        if(randomSaxon.health <= 0){
            let i = this.saxonArmy.indexOf(randomSaxon);
            this.saxonArmy.splice(i, 1);
        }
        return str;
    }

    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let str = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0){
            let i = this.vikingArmy.indexOf(randomViking);
            this.vikingArmy.splice(i, 1);
        }

        return str;
    }

    showStatus(){
        if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
            return `Vikings and Saxons are still in the thick of battle.`;
        }
        else if(this.saxonArmy.length == 0){
            return `Vikings have won the war of the century!`;
        }
        else if(this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survive another day...`;
        }
    }
}
