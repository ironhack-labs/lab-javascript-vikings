// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(danger) {
        this.health= this.health - danger;
    }
}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(danger) {
        this.health= this.health - danger;
        if(this.health > 0)return `${this.name} has received ${danger} points of damage`;
        else return `${this.name} has died in act of combat`;
        
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health,strength);
    }

    receiveDamage(danger) {
        this.health= this.health - danger;
        if(this.health > 0)return `A Saxon has received ${danger} points of damage`;
        else return `A Saxon has died in combat`;
        
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
        const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length); 
        const saxonRandom = Math.floor(Math.random() * this.vikingArmy.length); 
        const battleResult = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
        if(battleResult.includes("died")) this.saxonArmy.splice(saxonRandom,1);
        return battleResult;

    }
    saxonAttack(){
        const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length); 
        const saxonRandom = Math.floor(Math.random() * this.vikingArmy.length); 
        const battleResult = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);
        if(battleResult.includes("died")) this.vikingArmy.splice(vikingRandom,1);
        return battleResult;

    }
    showStatus(){
        if(!this.saxonArmy[0])return 'Vikings have won the war of the century!';
        else if(!this.vikingArmy[0]) return 'Saxons have fought for their lives and survived another day...';
        else return 'Vikings and Saxons are still in the thick of battle.';
    }
}
