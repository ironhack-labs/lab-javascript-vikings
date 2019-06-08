// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }

    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
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
    
    addViking(viking1){
        this.vikingArmy.push(viking1);
    }

    addSaxon(saxon1){
        this.saxonArmy.push(saxon1);
    }

    vikingAttack(){
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let demage = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
        if(this.saxonArmy[saxonIndex].health<=0){
            this.saxonArmy.splice(saxonIndex,1);
        }
        return demage;
    }

    saxonAttack(){
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let demage = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);
        if(this.vikingArmy[vikingIndex].health<=0){
            this.vikingArmy.splice(vikingIndex,1);
        }
        return demage;
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return `Vikings have won the war of the century!`;
        }
        else if(this.vikingArmy.length===0){
            return `Saxons have fought for their lives and survive another day...`;
        }
        else{
           return `Vikings and Saxons are still in the thick of battle.` 
        }
    }
}
