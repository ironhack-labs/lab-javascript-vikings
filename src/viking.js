// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength)
        this.name = name;
    }
    

    receiveDamage(damage){
        this.health = this.health - damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(damage){
        this.health = this.health - damage;

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else{
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
        // --- Random Saxon
        let indexSaxon = Math.floor(Math.random()*(this.saxonArmy.length-1));
        let randomSaxon = this.saxonArmy[indexSaxon];

        // --- Random Viking
        let indexViking = Math.floor(Math.random()*(this.vikingArmy.length-1));
        let randomViking = this.vikingArmy[indexViking];

        
        let damage = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(indexSaxon,1);
        }

        return damage;
    }

    saxonAttack(){
        // --- Random Saxon
        let indexSaxon = Math.floor(Math.random()*(this.saxonArmy.length-1));
        let randomSaxon = this.saxonArmy[indexSaxon];

        // --- Random Viking
        let indexViking = Math.floor(Math.random()*(this.vikingArmy.length-1));
        let randomViking = this.vikingArmy[indexViking];

        
        let damage = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0){
            this.vikingArmy.splice(indexViking,1);
        }

        return damage;
    }
 /* 
    // GUI's SOLUTION
    soldierAttack(attackingSoldierArmy, defendingSoldierArmy){
        const randomAttackingSoldierIndex = Math.floor(attackingSoldierArmy.length * Math.random());

        const randomDefendingSoldierIndex = Math.floor(defendingSoldierArmy.length * Math.random());

        const randomAttackingSoldier = attackingSoldierArmy[randomAttackingSoldierIndex];

        const randomDefendingSoldier = defendingSoldierArmy[randomDefendingSoldierIndex];

        let attack = randomDefendingSoldier.receiveDamage(randomAttackingSoldier.strength);

        if (randomDefendingSoldier.health <= 0){
            defendingSoldierArmy.splice(randomDefendingSoldierIndex,1);
        }

        return attack;

    }

    vikingAttack(){
        return this.soldierAttack (this.vikingArmy, this.saxonArmy);
    }

    saxonAttack(){
        return this.soldierAttack (this.saxonArmy, this.vikingArmy);
    }
 */
    showStatus(){
        if (this.saxonArmy.length <=0){
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day...";
        }else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

