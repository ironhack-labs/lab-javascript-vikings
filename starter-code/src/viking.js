// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function(){
        return this.strength;
    };

    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

    this.receiveDamage = function(damage) {
        this.health -= damage;
        if(health > 0){
            return this.name + " has received " + this.damage + " points of damage";
        }
        else {
            return this.name + " has died in act of combat";
        }
    }

    this.battleCry = function(){
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function(damage) {
        this.health -= damage;
        if(health > 0){
            return "A Saxon has received " + this.damage + " points of damage";
        }
        else {
            return "A Saxon has died in act of combat";
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(viking) {
        this.vikingArmy.push(viking);
    }

    this.saxonArmy = function(saxon){
        this.saxonArmy.push(saxon);
    }

    this.vikingAttack = function(){
        var theVictm = Math.floor(Math.random() * saxonArmy.length); 
        var isDead = saxonArmy[theVictm].receiveDamage(300);
        if (isDead = "A Saxon has died in act of combat"){
            this.saxonArmy.splice(theVictm,1);
        }

        return isDead;
    }

    this.saxonAttack = function(){
        var theVictm = Math.floor(Math.random() * vikingArmy.length); 
        var isDead = vikingArmy[theVictm].receiveDamage(25);
        if (isDead = vikingArmy[theVictm].name + " has died in act of combat"){
            this.vikingArmy.splice(theVictm,1);
        }

        return isDead;
    }

    this.showStatus = function(){
        if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        else if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle";
        }
    }
}
