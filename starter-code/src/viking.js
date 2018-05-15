// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
    }
}
// Viking

Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
    Soldier.call(this,health,strength);
    this.name = name;

    this.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }

    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
    Soldier.call(this, health,strength);
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    var getRandomViking= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    var getRandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

    this.addViking = function(Viking){
        this.vikingArmy.push(Viking);
    }
    this.addSaxon = function(Saxon){
        this.saxonArmy.push(Saxon);
    }

    this.vikingAttack = function(){
        var getRandomViking= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var getRandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var vikingDamaging = getRandomSaxon.receiveDamage(getRandomViking.strength);

        this.saxonArmy = this.saxonArmy.filter(function(saxonSurvivor){
            return saxonSurvivor.health > 0;
        });
        return vikingDamaging;
    }

    this.saxonAttack = function(){
        var getRandomViking= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var getRandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var saxonDamaginig = getRandomViking.receiveDamage(getRandomSaxon.strength);

        this.vikingArmy = this.vikingArmy.filter(function(vikingSurvivor){
            return vikingSurvivor.health > 0;
        });
        return saxonDamaginig;
    }

    this.showStatus = function(){
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else
            return "Vikings and Saxons are still in the thick of battle."
    }
};


