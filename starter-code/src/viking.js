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
        this.health = this.health-damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health <=0){
            return `${this.name} has died in act of combat`;
        }
        return `${this.name} has received ${damage} points of damage`;
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health <=0){
            return `A Saxon has died in combat`;
        }
        return `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor() {
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
        let setViking = Math.floor(Math.random()*this.vikingArmy.length);
        let idxSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let setSaxon = this.saxonArmy[idxSaxon];
        setViking = this.vikingArmy[setViking];
        let returnDamage = setSaxon.receiveDamage(setViking.attack());
        if(setSaxon.health<=0){
            this.saxonArmy.splice(idxSaxon, 1);
        }
        return returnDamage;
    }

    saxonAttack(){
        let idxViking = Math.floor(Math.random()*this.vikingArmy.length);
        let setSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let setViking = this.vikingArmy[idxViking];
        setSaxon = this.saxonArmy[setSaxon];
        let returnDamage = setViking.receiveDamage(setSaxon.attack());
        if(setViking.health<=0){
            this.vikingArmy.splice(idxViking, 1);
        }
        return returnDamage;
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!';
        }else if (this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survived another day...';
        }else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }            
    }
}
