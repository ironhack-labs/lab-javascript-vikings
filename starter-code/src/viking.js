// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
    // check for less than zero?
    this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {

   this.health -= damage;

   if (this.health <= 0) {
        return this.name + ' has died in act of combat';
    } else {
        return this.name + ' has received ' + damage + ' points of damage';
    }
};

Viking.prototype.battleCry = function () {
    return 'Odin Owns You All!';
};



// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {

   this.health -= damage;

   if (this.health <= 0) {
        // return this.name + ' has died in act of combat';
        return 'A Saxon has died in combat';
    } else {
        return 'A Saxon has received ' + damage + ' points of damage';
    }
};


// War
function War() {

   this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {

   return this.soldierAttack(this.saxonArmy, this.vikingArmy);
};

War.prototype.saxonAttack = function () {

   return this.soldierAttack(this.vikingArmy, this.saxonArmy);
};

War.prototype.soldierAttack = function (defenders, attackers) {

   var defender = this.getRandomSoldier(defenders);

   var attacker = this.getRandomSoldier(attackers);

   var result = defender.receiveDamage(attacker.attack());

   if (defender.health <= 0) {

       var index = defenders.indexOf(defender);

       defenders.splice(index, 1);
    }

   return result;
};

War.prototype.getRandomSoldier = function (army) {
    var index = Math.floor(Math.random() * army.length);
    return army[index];
};

War.prototype.showStatus = function () {

   if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
        return 'Saxons and have fought fo their lives and survive another day...';
    } else {
        return 'Vikings and Saxons are still in the thick of battle';
    }
};



function startWar() {

   var war = new War();

   var vikingNames = ['Thor', 'Loki', 'Odin', 'Freyja'];

   vikingNames.forEach(function (vikingName) {
        war.addViking(new Viking(vikingName, getRandomBetween(10, 100), getRandomBetween(5, 10)));
        war.addSaxon(new Saxon(getRandomBetween(10, 50), getRandomBetween(3, 5)));
    });

   var battleRaging = true;

   while (battleRaging) {

       // intentionally allowing multiple attacks in row to give Saxons a shot in hell
        if (Math.random() >= 0.5) {
            war.vikingAttack();
            if (war.saxonArmy.length === 0) {
                battleRaging = false;
            }
        } else {
            war.saxonAttack();
            if (war.vikingArmy.length === 0) {
                battleRaging = false;
            }
        }

       console.log(war.showStatus());
        console.log('[statistics] viking army length', war.vikingArmy.length, 'saxon army length', war.saxonArmy.length);
    }

   function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}


startWar();