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

// Vikingg
class Viking extends Soldier{

    constructor(name, health, strength){
        
        super(health, strength);
        this.name = name;

    }

    receiveDamage(damage){

        this.health -= damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return `A Saxon has died in combat`
        }

    }

}

// War
class War {

    constructor() {
       this.vikingArmy = [];
       this.saxonArmy = [];
       this.totalVikings = this.vikingArmy.length;
       this.totalSaxons = this.saxonArmy.length;
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        // let rand = Math.random();

        // let randomVikingIndex = Math.floor(rand * this.totalVikings);
        // let randomViking = this.vikingArmy[randomVikingIndex];

        // let randomSaxonIndex = Math.floor(rand * this.totalSaxons);
        // let randomSaxon = this.saxonArmy[randomSaxonIndex];

        // let attackResult = randomSaxon.receiveDamage(randomViking.strength);
        // // let a = this.selectRandomSaxon().receiveDamage(this.selectRandomViking().strength);

        // if(attackResult.includes("A Saxon has died")) this.saxonArmy.splice(randomSaxonIndex,1)

        // return attackResult;
        return this.soldierAttack('viking');
    }

    saxonAttack() {
        // let rand = Math.random();

        // let randomVikingIndex = Math.floor(rand * this.totalVikings);
        // let randomViking = this.vikingArmy[randomVikingIndex];

        // let randomSaxonIndex = Math.floor(rand * this.totalSaxons);
        // let randomSaxon = this.saxonArmy[randomSaxonIndex];

        // let attackResult = randomViking.receiveDamage(randomSaxon.strength);

        // if(attackResult.includes("has died in act of combat")) this.vikingArmy.splice(randomVikingIndex,1)

        // return attackResult;
        return this.soldierAttack('saxon');
    }

    soldierAttack(soldier){
        let rand = Math.random();

        let randomVikingIndex = Math.floor(rand * this.totalVikings);
        let randomViking = this.vikingArmy[randomVikingIndex];

        let randomSaxonIndex = Math.floor(rand * this.totalSaxons);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        
        let attackResult;

        if(soldier === 'viking'){
            attackResult = randomSaxon.receiveDamage(randomViking.strength);
            if(attackResult.includes("A Saxon has died")) this.saxonArmy.splice(randomSaxonIndex, 1);  
        }else{
            attackResult = randomViking.receiveDamage(randomSaxon.strength);
            if(attackResult.includes("has died in act of combat")) this.vikingArmy.splice(randomVikingIndex, 1)
        }

        return attackResult;
    }

    showStatus() {

        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}
