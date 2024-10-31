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
        if(this.health>0){
            this.health -= damage;
            return `${this.name} has received ${damage} points of damage`;
        }else if (this.health<=0){
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        if(this.health>0){
            this.health -= damage;
            return `A Saxon has received ${damage} points of damage`;
        }else if (this.health<=0){
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
        const rvIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const rsIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[rvIndex];
        const randomSaxon = this.saxonArmy[rsIndex];

        randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health<=0){
            this.saxonArmy.splice(rsIndex, 1);
            return "A Saxon has died in combat";
        }else{
            return `A Saxon has received ${randomViking.strength} damage in combat`;
        }
    }
    saxonAttack(){
        const rvIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const rsIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[rvIndex];
        const randomSaxon = this.saxonArmy[rsIndex];

        randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health<=0){
            this.vikingArmy.splice(rvIndex, 1);
            return `${this.vikingArmy.name} has died in act of combat`;
        }else{
            return `${this.vikingArmy[rvIndex].name} has received ${this.saxonArmy[rsIndex].strength} points of damage`;
        }
    }

    // attack refactor - could be used for viking or saxon
    // if this method is used, the vikingAttack() and saxonAttack() methods will no longer be used
    generalAttackMethod(attacker){
        const rvIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const rsIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[rvIndex];
        const randomSaxon = this.saxonArmy[rsIndex];

        if(attacker === "viking"){
            randomSaxon.receiveDamage(randomViking.strength);
            if(randomViking.health<=0){
                this.vikingArmy.splice(rvIndex, 1);
                return `${this.vikingArmy.name} has died in act of combat`;
            }else{
                return `${this.vikingArmy[rvIndex].name} has received ${this.saxonArmy[rsIndex].strength} points of damage`;
            }
        } else {
            randomViking.receiveDamage(randomSaxon.strength);
            if(randomViking.health<=0){
                this.vikingArmy.splice(rvIndex, 1);
                return `${this.vikingArmy.name} has died in act of combat`;
            }else{
                return `${this.vikingArmy[rvIndex].name} has received ${this.saxonArmy[rsIndex].strength} points of damage`;
            }
        }
    }

    showStatus(){
        if(this.saxonArmy.length<=0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length<=0){
            return "Saxons have fought for their lives and survived another day...";
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
