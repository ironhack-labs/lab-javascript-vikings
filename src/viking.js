// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength= strength;
    };
    attack() { 
        return this.strength;
    };
    receiveDamage(theDamage) {
        this.health-=theDamage;

    };
}
const soldier= new Soldier(150, 300);

// Viking

  class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name= name;    
    };
    
    receiveDamage(theDamage) {
        this.health-=theDamage;
        if(this.health>0) {
            return `${this.name} has received ${theDamage} points of damage`
        };
        if(this.health<=0) {
            return `${this.name} has died in act of combat`
        };
    };
    
    battleCry() {
        return "Odin Owns You All!"
    };
};

let viking = new Viking("Harald", 300, 150);



// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if(this.health>0) {

            return `A Saxon has received ${theDamage} points of damage`;
        };
        if(this.health<=0) {
            return "A Saxon has died in combat"
        };
    };
};

let saxon = new Saxon(60, 25);


// War
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(Viking) {
        this.vikingArmy.push(Viking);

    };
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    };
    
    vikingAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
};

saxonAttack() {

    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
};

showStatus() {
    if(this.saxonArmy.length===0) {
        return "Vikings have won the war of the century!"
    };
    if(this.vikingArmy.length===0) {
        return "Saxons have fought for their lives and survived another day..."
    };
    if(this.saxonArmy.length>=1 && this.vikingArmy.length>=1) {
        return "Vikings and Saxons are still in the thick of battle."
    };
};
};
    
    

