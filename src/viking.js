// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(theDamage){
        super.receiveDamage(theDamage);
        
        if (this.health > 0){
        return (`${this.name} has received ${theDamage} points of damage`)}
        
        else {
        return (`${this.name} has died in act of combat`)}
    }

    battleCry(){
        return (`Odin Owns You All!`)
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(theDamage){
        super.receiveDamage(theDamage);

        if (this.health > 0){
            return (`A Saxon has received ${theDamage} points of damage`)
        }

        else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack(){
       let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
       let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);

       let randomSaxon = this.saxonArmy[randomSaxonIndex];
       let randomViking = this.vikingArmy[randomVikingIndex];

       randomSaxon.receiveDamage(randomViking.attack());

       if (randomSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxon, 1)
        return `A Saxon has died in combat`;
       }

       else{
        return `A Saxon has revieced ${randomViking.strength}`
       }
    }
    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
 
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomViking, 1)
            return `A Viking has died in combat`;
           }

            else{
            return `${randomViking.name} has received ${randomSaxon.strength} points of damage`
        }
    }
    
    showStatus(){
        if (this.saxonArmy.length === 0){return `Vikings have won the war of the century!`}
        else if (this.vikingArmy.length === 0){return `Saxons have fought for their lives and survived another day...`}
        else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1){return `Vikings and Saxons are still in the thick of battle.`}
    }
}
