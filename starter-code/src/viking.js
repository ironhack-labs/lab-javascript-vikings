// Soldier
// soldier = new Soldier(health, strength);


class Soldier(){
    consutrctuor(healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(amoungOfDamage){
        this.health -= amountOfDamage;
    }
}

// Viking 
function Viking() {}


class Viking extends Soldier{
    constructor(theName, theHealth, theStrength){
        super(theHealth, theStrength)
        this.name = theName;
    }

    receiveDamage(amount){
        super.receiveDamage(amount);
        if(this.health > 0){
            return `${this.name} has reeceived ${amount} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return "Odin owns you all!";
    }


}

// Saxon
function Saxon() {}

class Saxon extends Soldier{
    constructor(health, stregnth){
        super(health, strength); 
        if(this.health > 0){
            return `a Saxon has received ${amount} points of damage`
        } else {
            return `A Saxon has died in act of combat`
        }
    }

       
    }

// War
function War() {}


class War{
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(theViking){
        this.vikingArmy.push(theViking);
    }

    addSaxon(theSaxon){
        this.saxonArmy.push(theSaxon);
    }


    vikingAttack(){
        let randomVikingIndex = Math.floor(math.random()*this.vikingArmy.length);
        let randomSaxonIndex = Math.floor(math.random()*this.saxonArmy.length);
        let randomViking = this.vikingArmy(randomVikingIndex);
        let randomSaxon = this.saxonArmy(randomSaxonIndex);

        let result = randomSaxon.receiveDamage(randomViking.attack())

        if(randomSaxon.health < 1){
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return result;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        }

        return "VIkings and Saxons are still in the thick of battle."
    }
}