//Soldier
function Soldier (health, strength) {
    this.strength = strength;
    this.health = health;
}

Soldier.prototype.attack = function(){
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
};

//Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
    Soldier.prototype.receiveDamage.call(this, damage);
    if(this.health <= 0)
        return this.name + " has died in act of combat";     
    return this.name + " has received "+ damage + " points of damage";
};

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
};

//Saxon
function Saxon(health, strength){
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    Soldier.prototype.receiveDamage.call(this, damage);
    if(this.health <= 0)
        return "A Saxon has died in combat";
    return "A Saxon has received "+ damage + " points of damage";
};

//War
function War(){
    this.vikingsArmy = [];
    this.saxonsArmy = [];
}

War.prototype.addViking = function(viking){
    this.vikingsArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
    this.saxonsArmy.push(saxon);
};

War.prototype.vikingAttack = function(){
    var vIndex = this.randomSoldierIndex(this.vikingsArmy);
    var sIndex = this.randomSoldierIndex(this.saxonsArmy);
    var result = this.saxonsArmy[sIndex].receiveDamage(this.vikingsArmy[vIndex].attack()*2);
    this.saxonsArmy = this.saxonsArmy.filter(function(e){ return e.health > 0; });
    return result;
};

War.prototype.saxonAttack = function(){
    var vIndex = this.randomSoldierIndex(this.vikingsArmy);
    var sIndex = this.randomSoldierIndex(this.saxonsArmy);
    var result = this.vikingsArmy[vIndex].receiveDamage(this.saxonsArmy[sIndex].attack());
    this.vikingsArmy = this.vikingsArmy.filter(function(e){ return e.health > 0; });
    return result;
};

War.prototype.fight = function(){
    while(this.saxonsArmy.length > 0 && this.vikingsArmy.length > 0) {
        this.saxonAttack();
        this.vikingAttac();
    }
};

War.prototype.showStats = function(){
    if (this.saxonsArmy.length == 0)
        return "Vikings have won the war of the century!";
    else if (this.vikingsArmy.length == 0)
        return "Saxons have won the war of the century!";
};

War.prototype.randomSoldierIndex = function(soldiersArr){
    return Math.floor(Math.random()*soldiersArr.length);
};

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
