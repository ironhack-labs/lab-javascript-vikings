// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function(){
        return this.strength;
    }

    this.receiveDamage = function (damage){
        this.health = this.health - damage;
    }
}



// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

    this.receiveDamage = function (damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    this.battleCry = function(){
        return `Odin Owns You All!`;
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function (damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(Viking){
        this.vikingArmy.push(Viking);
    };

    this.addSaxon = function(Saxon){
        this.saxonArmy.push(Saxon);
    };

    this.vikingAttack = function(){
        this.randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        this.randomViking = Math.floor(Math.random()*this.vikingArmy.length);

        this.result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if (this.randomSaxon[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon);
        }
        return this.result;
    };

    this.saxonAttack = function(){
        this.randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        this.randomViking = Math.floor(Math.random()*this.vikingArmy.length);

        this.result = this.vikinArmy[randomVikin].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if (this.randomViking[randomViking].health <= 0){
            this.vikingArmy.splice(randomViking);
        }
        return this.result;
    }

    this.showStatus = function(){
        if (this.saxonArmy.length < 0){
            console.log("Vikings have won the war of the century!")
        }  else if (this.vikingArmy.length < 0){
            console.log("Saxons have fought for their lives and survive another day...")
        } else {
            console.log("Vikings and Saxons are still in the thick of battle.")
        }
    }


} 



