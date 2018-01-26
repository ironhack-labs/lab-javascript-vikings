// Soldier
function Soldier(health, strength) {
this.health = health;
this.strength = strength
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
     this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = "Harald";
}

Viking.prototype = Object.create(Soldier.prototype)


Viking.prototype.attack = function(){
    return this.strength;
}
Viking.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
    if (this.health === 0){return this.name + " has died in act of combat"}
    else {
        return this.name + " has received "+ damage+ " points of damage"
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

}
Saxon.prototype = Object.create(Soldier.prototype)

Saxon.prototype.attack = function(){
    return this.strength
}
Saxon.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
    if (this.health === 0){return "A Saxon has died in combat"}
    else {
        return "A Saxon has received "+ damage+ " points of damage"
    }
}

// War
function War() {
   this.vikingArmy=[],
   this.saxonArmy=[]
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
   // console.log(this.saxonArmy[0])
    this.saxonArmy[0].health = this.saxonArmy[0].health - viking.strength;
}