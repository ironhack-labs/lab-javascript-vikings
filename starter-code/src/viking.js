Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
       return this.strength;
    }
    this.receiveDamage = function(damage){
        this.receiveDamage;
        this.health -= damage;
    }
}

Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

     this.receiveDamage = function(damage){
         this.receiveDamage;
         this.health -= damage;
         if (this.health > 0){
         return name + " has received " + damage + " points of damage"};
         if (this.health == 0){
         return name + " has died in act of combat"};
     }
     this.battleCry = function(){
         return "Odin Owns You All!";
     }
}
    Viking.prototype = Object.create(Soldier.prototype);
    Viking.prototype.contructor = Viking;

Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage){
        this.receiveDamage;
        this.health -= damage;
        if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage"};
        if (this.health == 0){
        return "A Saxon has died in combat"};
};
};
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.contructor = Saxon;

War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};
War.prototype.addViking = function(viking){
    this.vikingArmy = [viking];
};
War.prototype.addSaxon = function(saxon){
    this.saxonArmy = [saxon];
};
War.prototype.vikingAttack = function(){
    Saxon.receiveDamage(viking.strength) = saxon.health;
}
War.prototype.saxonAttack = function(){

}
War.prototype.showStatus = function(){

}