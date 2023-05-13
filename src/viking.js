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
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";

    }
}

// Saxon
class Saxon  extends Soldier{
   receiveDamage(damage) {
    this.health = this.health - damage;
    
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }
   }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }

    vikingAttack(){
       let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
       let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

       let saxonHealthLeft = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

       for (let i = 0; i < this.saxonArmy.length; i++) {
        if (this.saxonArmy[i].health <= 0) {
            this.saxonArmy.splice(i, 1);
        }
       }

       return saxonHealthLeft;
       /*
       this.saxonArmy.forEach(function (saxonSoldier, index){
        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(index, 1);
        }
       })
       */


    }

    saxonAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let vikingHealthLeft = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if ( this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i, 1);
            }
        }

        return vikingHealthLeft;
        /*
        this.vikingArmy.forEach(function(vikingSoldier, index){
            if (vikingSoldier.health <= 0) {
                this.vikingArmy.splice(index, 1);
            }
        })
        */
        
    }    

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}

