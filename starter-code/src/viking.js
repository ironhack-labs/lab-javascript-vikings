// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function() {
        return this.strength;
    }

    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    
    this.attack = function() { // copiar el método así?
        return this.strength;
    }
    
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return this.name + " has received " + damage + " points of damage"; // ¿Necesario el this?? Qué pasa si no se pone?
        }else{
            return this.name + " has died in act of combat"; //¿necesario el this?
        }
    }

    this.battleCry = function() {
        return "Odin Owns You All!";
    }

}

Viking.prototype = Object.create(Soldier.prototype);





// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.attack = function() { // copiar el método así?
        return this.strength;
    }

    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        }else{
            return "A Saxon has died in combat";
        }
    }

}

Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function (Viking){
        this.vikingArmy.push(Viking);
    } 

    this.addSaxon = function (Saxon) {
        this.saxonArmy.push(Saxon);
    }

    this.vikingAttack = function() {
        var numbViking = Math.floor(Math.random() * this.vikingArmy.length);
        var numbSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var viking = this.vikingArmy[numbViking];
        var saxon = this.saxonArmy[numbSaxon];
        var result = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            this.saxonArmy.splice(numbSaxon,1);
        }
        return result;
    }

    this.saxonAttack = function() {
        var numbViking = Math.floor(Math.random() * this.vikingArmy.length);
        var numbSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var viking = this.vikingArmy[numbViking];
        var saxon = this.saxonArmy[numbSaxon];
        var result = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0) {
            this.vikingArmy.splice(numbViking,1);
        }
        return result;
    }


    this.showStatus = function (){
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
