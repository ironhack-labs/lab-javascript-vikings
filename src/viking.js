// Soldier
class Soldier {
    constructor(health,strength){
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

// Viking
class Viking extends Soldier{
   constructor(name,health,strength){
        super(health,strength);
        this.name = name;
   }

   receiveDamage(damage){
        this.health -= damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
   }

   battleCry(){
    return `Odin Owns You All!`;
   }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        } 
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingSoldier){
        this.vikingArmy.push(vikingSoldier);
    }

    addSaxon(saxonSoldier){
        this.saxonArmy.push(saxonSoldier);
    }

    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const viking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon = this.saxonArmy[randomSaxonIndex];

        let attackResult = saxon.receiveDamage(viking.strength);

        if(saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return attackResult;
    }

    saxonAttack(){
        const randomVikingIndex2 = Math.floor(Math.random() * this.vikingArmy.length)
        const viking2 = this.vikingArmy[randomVikingIndex2];

        const randomSaxonIndex2 = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon2 = this.saxonArmy[randomSaxonIndex2];

        let attackResult2 = viking2.receiveDamage(saxon2.strength);

        if(viking2.health <= 0) {
            this.vikingArmy.splice(randomSaxonIndex2, 1);
        }

        return attackResult2;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`;
        } else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
