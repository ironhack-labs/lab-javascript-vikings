// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
    //should return the strength property of the Soldier
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
    //should remove the received damage from the health property
}

// Vikings
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

    this.battleCry = function () {
        return "Odin Owns You All!";
    };
}
Viking.prototype = Object.create(Soldier.prototype);
//Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
        return (this.name + " has received " + damage + " points of damage");
    } else{
        return (this.name + " has died in act of combat");
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
//Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
        return ("A Saxon has received " + damage + " points of damage");
    } else{
        return ("A Saxon has died in combat");
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}


War.prototype.vikingAttack = function(){
    var i = Math.floor(Math.random() * this.vikingArmy.length);
    var j = Math.floor(Math.random() * this.saxonArmy.length);
    var damage = this.vikingArmy[i].strength;

    var status = this.saxonArmy[j].receiveDamage(damage);
    if(status.includes("died")){
        this.saxonArmy.splice(j,1);
    }
    return status;
}
War.prototype.saxonAttack = function(){
    var i = Math.floor(Math.random() * this.saxonArmy.length);
    var j = Math.floor(Math.random() * this.vikingArmy.length);
    var damage = this.saxonArmy[i].strength;

    var status = this.vikingArmy[j].receiveDamage(damage);
    if(status.includes("died")){
        this.vikingArmy.splice(j,1);
    }
    return status;
}
War.prototype.showStatus = function(){
    if (this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}

