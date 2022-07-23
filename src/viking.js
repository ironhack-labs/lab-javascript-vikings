// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength;
    };
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
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

    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }

    removeDeadBodies(whichArmy){
        whichArmy.forEach((eachSoldier, ind) => {
            if(eachSoldier.health <= 0){
                whichArmy.splice(ind, 1);
            }
        });
    }

    generateRandomSoldier(whichArmy){
        let randomSoldierNumber = Math.floor(Math.random() * whichArmy.length);
        let randomSoldier = whichArmy[randomSoldierNumber];
    }

    vikingAttack(){
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomVikingNumber];
       let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomSaxonNumber];
       let result = randomSaxon.receiveDamage(randomViking.attack());
       this.removeDeadBodies(this.saxonArmy);
       return result;
    }

    saxonAttack(){
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomVikingNumber];
       let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomSaxonNumber];
       let result = randomViking.receiveDamage(randomSaxon.attack());
       this.removeDeadBodies(this.vikingArmy);
       return result;
    }

    showStatus(){
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
}
