// Soldier

class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
}
    attack() {
    return this.strength;
}
    receiveDamage(damage) {
    this.health = this.health - damage;
}
};


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
    }
    receiveDamage(damage) {
    this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return "Odin Owns You All!"
    }
};

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// // War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {

        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        // choose a number of the saxonArmy array at random:
                    
            let max = this.saxonArmy.length - 1;
            let randomSaxon = Math.floor(Math.random(1, max));
            
            let max2 = this.vikingArmy.length - 1;
            let randomViking = Math.floor(Math.random(1, max2));
            console.log(randomViking);

        // One attack of the viking to the saxon 
            let damageViking = this.vikingArmy[randomViking].attack();
            let oneHit = this.saxonArmy[randomSaxon].receiveDamage(damageViking);
            
            return oneHit;

        // tous les nombres de l'array saxonArmy <= 0 doivent être enlevés de l'array
        // autrement dit nouvel array qui garde que les nb > 0
        
        // let removeDeadBodies = this.saxonArmy.filter(function (aliveSaxon) {
        //     aliveSaxon[index].health > 0;
        //     return removeDeadBodies;
        // })
        
    }
    saxonAttack(){
        // Randomly pick a Saxon in the Saxon army array
        let randomSaxon = Math.floor(Math.random(1, this.saxonArmy.length -1));
        let randomViking = Math.floor(Math.random(1, this.vikingArmy.length -1))

        // Attack of the selected Saxon
        let damageSaxon = this.saxonArmy[randomSaxon].attack();
        let anotherHit = this.vikingArmy[randomViking].receiveDamage(damageSaxon);

        // Part where I tried to remove the dead bodies by filtering vikings <= 0

        // let removeDeadBodies = this.vikingArmy.filter(function (aliveViking) {
        //     aliveViking[index].health > 0;
        //     return removeDeadBodies;
        // })
        
        return anotherHit;
    }

    showStatus(){
        if (Array.isArray(this.saxonArmy) && !this.saxonArmy.length) { 
            return "Vikings have won the war of the century!";

        } else if (Array.isArray(this.vikingArmy) && !this.vikingArmy.length) { 
            return "Saxons have fought for their lives and survived another day...";
        //Idem doesnt work for this.saxonArmy.length === 0 or this.vikingArmy === []
        } else if ( this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    } 
          

}
