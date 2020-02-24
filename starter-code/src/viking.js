// Soldier
var solider = {
  health: 300,
  strength: 150,
  attack: function() {
      
  }
};

let viking = {
    name: 'Harald',
    health: 300,
    strength: 150
};

let saxon = {
    health: 60,
    strength: 25
};

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        return;
    } 
}; 

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(theDamage) {
        if (this.health > theDamage) {
            this.health = this.health - theDamage;
            return (`${this.name} has received ${theDamage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// viking.receiveDamage(50); WHY IS THIS UNDEFINED?

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    };

    receiveDamage(theDamage) {
        if (this.health > theDamage) {
            this.health = this.health - theDamage;
            return (`A Saxon has received ${theDamage} points of damage`)
    
        } else {
            return (`A Saxon has died in combat`)
        }
    }
};

// War
class War {
// class War extends Soldier {
    constructor() {
        // super(health, strength)
        // debugger
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        // let sxArmLgth = (this.saxonArmy).length;
        // let vkArmLgth = (this.vikingArmy).length;
        // let randomSaxon = (Math.floor(Math.random()*(sxArmLgth)));
        // let randomViking = (Math.floor(Math.random()*(vkArmLgth)));
        // let vkStrength = this.vikingArmy[randomViking].strength;
        // this.saxonArmy[randomSaxon].receiveDamage(vkStrength);

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];


        randomSaxon.receiveDamage(randomViking.strength);



        
    }

    saxonAttack() {

    }

    showStatus() {

    }

    
}



