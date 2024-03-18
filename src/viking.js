// Soldier
class Soldier {
    constructor(health, strength) {
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
        super.receiveDamage (damage);
        return this.health > 0 ?
        `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        super.receiveDamage(damage);
        return this.health > 0 ?
        `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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

    attack(attackerArmy, defenderArmy){
        const chosenAttackerIndex = Math.floor(Math.random() * attackerArmy.length);
        const chosenDefenderIndex = Math.floor(Math.random() * defenderArmy.length);
        
        const chosenAttacker = attackerArmy[chosenAttackerIndex];
        const chosenDefender = defenderArmy[chosenDefenderIndex];

        const recieveDamageMessage = chosenDefender.receiveDamage(chosenAttacker.attack());

        if(chosenDefender.health <= 0){
            defenderArmy.splice(chosenDefenderIndex, 1);
        }

        return recieveDamageMessage;
    }
    
    vikingAttack(){
        // const chosenSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        // const chosenSaxon = this.saxonArmy[chosenSaxonIndex];
        // const chosenViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        // const recieveDamageMessage = chosenSaxon.receiveDamage(chosenViking.attack());
        // if(chosenSaxon.health <= 0){
        //     this.saxonArmy.splice(chosenSaxonIndex, 1);
        // }
        // return recieveDamageMessage;
        return this.attack(this.vikingArmy, this.saxonArmy);

    }
    saxonAttack() {
        // const chosenVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        // const chosenViking = this.vikingArmy[chosenVikingIndex];
        // const chosenSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        // const recieveDamageMessage = chosenViking.receiveDamage(chosenSaxon.attack());
        // if (chosenViking.health <= 0) {   
        //     this.vikingArmy.splice(chosenVikingIndex, 1);
        // }
        // return recieveDamageMessage;
        return this.attack(this.saxonArmy, this.vikingArmy);

    }

    


    
    showStatus(){
        if(this.vikingArmy.length >0 && this.saxonArmy.length > 0){
            return 'Vikings and Saxons are still in the thick of battle.';
        }

        return this.vikingArmy.length === 0 ? 'Saxons have fought for their lives and survived another day...' : 'Vikings have won the war of the century!';

    }

}
