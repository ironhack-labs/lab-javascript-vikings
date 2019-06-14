// Soldier
class Soldier {
    constructor(healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damageReceived){
        this.health -= damageReceived;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg);
        this.name = nameArg;
    }
    receiveDamage(damageReceived){
        this.health -= damageReceived;
        if(this.health > 0){
            return `${this.name} has received ${damageReceived} points of damage`;
        }else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(healthArg, strengthArg){
        super(healthArg, strengthArg);
    }
    receiveDamage(damageReceived){
        this.health -= damageReceived;
        if(this.health > 0){
            return `A Saxon has received ${damageReceived} points of damage`;
        }else{
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingToAdd){
        this.vikingArmy.push(vikingToAdd);
    }
    addSaxon(saxonToAdd){
        this.saxonArmy.push(saxonToAdd);
    }
    vikingAttack(){
        let randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[randomVikingNum];
        let randomSaxon = this.saxonArmy[randomSaxonNum];

        let attackOutcome = randomSaxon.receiveDamage(randomViking.attack());
        if(attackOutcome === 'A Saxon has died in combat'){
            this.saxonArmy.splice(randomSaxonNum, 1);
        }
        return attackOutcome;
    }
    saxonAttack(){
        let randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[randomVikingNum];
        let randomSaxon = this.saxonArmy[randomSaxonNum];

        let attackOutcome = randomViking.receiveDamage(randomSaxon.attack());
        if(attackOutcome === `${randomViking.name} has died in act of combat`){
            this.vikingArmy.splice(randomVikingNum, 1);
        }
        return attackOutcome;        
    }
    showStatus(){
        if(this.saxonArmy.length === 0 ){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0 ){
            return "Saxons have fought for their lives and survive another day...";
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
