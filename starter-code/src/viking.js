// Soldier
class Soldier {
    constructor (health, strength) {
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
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage (damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier{

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
        let randomViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length-1))];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length-1))];
        let attackSaxon = randomSaxon.receiveDamage(randomViking.strength);
        
        attackSaxon === `A Saxon has died in combat`? this.saxonArmy.splice(randomSaxon):'';
        return attackSaxon;
    };

    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length-1))];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length-1))];
        let attackViking = randomViking.receiveDamage(randomSaxon.strength);
        
        attackViking === `${randomViking.name} has died in act of combat`? this.vikingArmy.splice(randomViking):'';
        return attackViking;
    }

    //-------SUPER BONUS --------

    // Attack(whoAtacks){
    //     let randomViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length-1))];
    //     let randomSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length-1))];
    //     let attackSaxon = randomSaxon.receiveDamage(randomViking.strength);
    //     let attackViking = randomViking.receiveDamage(randomSaxon.strength);

    //     whoAtacks === viking? attackSaxon: attackViking;

    //     attackSaxon === `A Saxon has died in combat`? this.saxonArmy.splice(randomSaxon):'';
    //     attackViking === `${randomViking.name} has died in act of combat`? this.vikingArmy.splice(randomViking):'';

    // }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }
        if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
