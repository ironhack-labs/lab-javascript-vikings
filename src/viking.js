// Soldier
class Soldier {
    constructor(theHealth, theStrength) {
        this.health = theHealth;
        this.strength = theStrength;
    }

    attack = function () {
        return this.strength;
    };

    receiveDamage = function (theDamage) {
        this.health -= theDamage;
        return;
    }
}

// Viking
class Viking extends Soldier {
    constructor(theName, theHealth, theStrength) {
        super(theHealth, theStrength);
        this.name = theName;
    }

    receiveDamage = function (theDamage) {
        if (this.health > theDamage) {
            this.health -= theDamage;
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry = function(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(theHealth, theStrength) {
        super(theHealth, theStrength);
    };

    receiveDamage = function (theDamage) {
        if (this.health > theDamage){
            this.health -= theDamage;
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking = function (aVikingObject) {
        this.vikingArmy.push(aVikingObject);
    };

    addSaxon = function (aSaxonObject) {
        this.saxonArmy.push(aSaxonObject);
    };

    vikingAttack = function () {
        let randomNumberVikingArray = Math.floor(Math.random() * this.vikingArmy.length);
        let pickViking = this.vikingArmy[randomNumberVikingArray];
        let randomNumberSaxonArray = Math.floor(Math.random() * this.saxonArmy.length);
        let pickSaxon = this.saxonArmy[randomNumberSaxonArray];

        let resultOfAttack = pickSaxon.health - pickViking.strength;

        if (resultOfAttack <= 0) {
            this.saxonArmy.splice(randomNumberSaxonArray);
        }

        return pickSaxon.receiveDamage(pickViking.strength);
    };

    saxonAttack = function () {
        let randomNumberVikingArray = Math.floor(Math.random() * this.vikingArmy.length);
        let pickViking = this.vikingArmy[randomNumberVikingArray];
        let randomNumberSaxonArray = Math.floor(Math.random() * this.saxonArmy.length);
        let pickSaxon = this.saxonArmy[randomNumberSaxonArray];

        let resultOfAttack = pickViking.health - pickSaxon.strength;

        if (resultOfAttack <= 0) {
            this.vikingArmy.splice(randomNumberVikingArray);
        }

        return pickViking.receiveDamage(pickSaxon.strength);
    };

    showStatus = function (){
        if (this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day...";
        } else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
}

