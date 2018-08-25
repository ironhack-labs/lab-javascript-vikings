// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function () {
        return this.strength;
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.constructor === Viking) {
            if (this.health <= 0 ) {
                return this.name + " has died in act of combat";
            } else if (this.health > 0) {
                return this.name + " has received " + damage + " points of damage";
            } else {
                return undefined;
            }
        } else if (this.constructor === Saxon) {
            if (this.health <= 0 ) {
                return "A Saxon has died in combat";
            } else if (this.health > 0) {
                return "A Saxon has received " + damage + " points of damage";
            } else {
                return undefined;
            }
        }

        
    }
}



/*Soldier.prototype.attack = function () {
    return (this.strength);
  };*/ 

//Viking.prototype = new Viking();

// Viking
function Viking(name, health, strength) {
    Soldier.call(this);
    this.name = name;
    this.health = health;
    this.strength = strength;

    this.battleCry = function () {
        return "Odin Owns You All!";
    };
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this);
    this.health = healthArg;
    this.strength = strengthArg;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (viking) {
        this.vikingArmy.push(viking);
    }
    this.addSaxon = function (saxon) {
        this.saxonArmy.push(saxon);
    }

    this.vikingAttack = function () {
        var selectedViking = Math.floor(Math.random() * this.vikingArmy.length);
        var selectedSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var selectedVikingAttack = this.vikingArmy[selectedViking].attack();
        var selectedSaxonReceiveDamageMsg = this.saxonArmy[selectedSaxon].receiveDamage(selectedVikingAttack);
        //this.saxonArmy[selectedSaxon].health - this.saxonArmy[selectedViking].strength;
        //var results = this.saxonArmy[selectedSaxon].receiveDamage(this.vikingArmy[selectedViking].attack());
        if (this.saxonArmy[selectedSaxon].health <= 0) {
            this.saxonArmy.splice(selectedSaxon, 1);
        } 
        return selectedSaxonReceiveDamageMsg;
    }

    this.saxonAttack = function () {
        var selectedViking = Math.floor(Math.random() * this.vikingArmy.length);
        var selectedSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var selectedSaxonAttack = this.saxonArmy[selectedSaxon].attack();
        var selectedVikingReceiveDamageMsg = this.vikingArmy[selectedViking].receiveDamage(selectedSaxonAttack);
        if (this.vikingArmy[selectedSaxon].health <= 0) {
            this.vikingArmy.splice(selectedViking, 1);
        } 
        return selectedVikingReceiveDamageMsg;
    }

    this.showStatus = function () {
        if (this.saxonArmy.length === 0) {
           return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
           return "Saxons have fought for their lives and survive another day..."; 
        } else {
           return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
