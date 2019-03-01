
//SoldierConstructor
function Soldier(healthArg, strengthArg) {

    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function () {
        return this.strength;

    };

    this.receiveDamage = function (theDamage) {
        this.health -= theDamage;
    };
}

// VikingContructor
//viking está herdando de soldado 

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, healthArg, strengthArg) {
    this.name = name;

    Soldier.call(this, healthArg, strengthArg);

    this.receiveDamage = function (theDamage) {

        this.health -= theDamage;

        return this.health > 0 ?
            this.name + " has received " + theDamage + " points of damage" :
            this.name + " has died in act of combat";

    }
    this.battleCry = function () {

        return "Odin Owns You All!";
    }
}

// saxonContructor
//Saxon herdando atributos de Soldado
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
    this.receiveDamage = function (theDamage) {

        this.health -= theDamage;
        return this.health > 0 ?
            "A Saxon has received " + theDamage + " points of damage" :
            "A Saxon has died in combat";

    }
}

// WarConstructor
function War() {

    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function (Viking) {

        this.vikingArmy.push(Viking);
    };

    this.addSaxon = function (Saxon) {

        this.saxonArmy.push(Saxon);



    };

    this.vikingAttack = function () {

        var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];



        var receivedDamage = saxon.receiveDamage(viking.strength);


        if (saxon.health <= 0) {

            var index = this.saxonArmy.indexOf(saxon);

            if (index > -1) {

                this.saxonArmy.splice(index, 1);
            }

        } return receivedDamage;

    };

    this.saxonAttack = function () {

        var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        var receivedDamage = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {

            var index = this.vikingArmy.indexOf(viking);

            if (index > -1) {

                this.vikingArmy.splice(index, 1);

            }

        } return receivedDamage;

    };

    this.showStatus = function () {

     return this.saxonArmy == 0? 
            "Vikings have won the war of the century!":
            this.vikingArmy == 0? 
            "Saxons have fought for their lives and survive another day...":
            "Vikings and Saxons are still in the thick of battle.";
        
    };
}