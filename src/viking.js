// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
       this.health= this.health-damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage) {
        this.health= this.health-damage;
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health= this.health-damage;
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
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
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomVikingNumber];
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonNumber];

        const damage = randomViking.strength;
        randomSaxon.receiveDamage(damage);

        if(randomSaxon.health <=0 ){
        this.saxonArmy.splice(randomSaxonNumber,1);
    }
    return randomSaxon.receiveDamage(damage);
    }
    saxonAttack(){
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonNumber];
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomVikingNumber];

        const damage = randomSaxon.strength;
        randomViking.receiveDamage(damage);

        if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingNumber, 1);
    }
    return randomViking.receiveDamage(damage);  
    }
    showStatus(){
        if (!this.saxonArmy.length ){
            return `Vikings have won the war of the century!`;
        } else if (!this.vikingArmy.length){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
