

// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function attack(){
    return this.strength;
};

Soldier.prototype.receiveDamage = function receiveDamage(damage){
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function battleCry(){
    return "Odin Owns You All!";
}



// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
        return  "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
}



// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function addViking(viking){
    if (viking instanceof Viking) {
        this.vikingArmy.push(viking);
    };
};


War.prototype.addSaxon = function addSaxon(saxon){
    if (saxon instanceof Saxon){
        this.saxonArmy.push(saxon);
    }
}

War.prototype.vikingAttack = function vikingAttack(){
    saxon = this.saxonArmy.random();
    viking = this.vikingArmy.random();
    status = saxon.receiveDamage(viking.attack());
    return status;
}
