// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;    
    this.attack = function() {
        return strength;
    }
}

//     receiveDamage();    
Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}
   

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
        return this.name + ' has received ' + damage + ' points of damage';
    }
    else {
        return this.name + ' has died in act of combat';
    }
}

Viking.prototype.battleCry = function() {
        return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
        return 'A Saxon has received ' + damage + ' points of damage'
    }
    else {
        return "A Saxon has died in combat"
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(object) {
        this.vikingArmy.push(object);
    }
    this.addSaxon = function(object) {
        this.saxonArmy.push(object);
    }
    this.vikingAttack = function () {
        var vIndex = Math.floor(Math.random()*this.vikingArmy.length);
        var sIndex = Math.floor(Math.random()*this.saxonArmy.length);
        var hp = this.saxonArmy[sIndex].receiveDamage(this.vikingArmy[vIndex]);
        if(saxonArmy[sIndex].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[sIndex], 1);
        }
        return hp;
    }
    
}

