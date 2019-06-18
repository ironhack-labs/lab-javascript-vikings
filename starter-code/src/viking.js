// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
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
        return (this.health <= 0) ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health -= damage;
        return (this.health <= 0) ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`;
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let numberViking = Math.floor(Math.random() * (this.vikingArmy.length));
        let numberSaxon = Math.floor(Math.random() * (this.saxonArmy.length));

        const deadSaxon = this.saxonArmy[numberSaxon].receiveDamage(this.vikingArmy[numberViking].strength);
        if(this.saxonArmy[numberSaxon].health <= 0){
            this.saxonArmy.splice(numberSaxon,1);
        }
        return deadSaxon;
    }

    saxonAttack(){
        //console.log(this.vikingArmy.length)
        let numberViking = Math.floor(Math.random() * (this.vikingArmy.length));
        let numberSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
        // console.log(numberSaxon);
        const deadViking = this.vikingArmy[numberViking].receiveDamage(this.saxonArmy[numberSaxon].strength);
        if(this.vikingArmy[numberViking].health <= 0){
            this.vikingArmy.splice(numberViking,1);
        }
        return deadViking;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survive another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
