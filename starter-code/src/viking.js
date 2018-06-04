// Soldier
function Soldier (health, strength ) {
    this.health = health;
    this.strength = strength;
     };
Soldier.prototype.attack= function(){
    return this.strength;
}
Soldier.prototype.receiveDamage= function(damage){

    this.health -= damage;
}
// Viking
Viking.prototype=Object.create(Soldier.prototype);
function Viking ( name, strenght, health) {
    this.name  = "Harald";
    Soldier.call(this, strenght, health);
}

Viking.prototype.receiveDamage= function(damage){
this.health -= damage;
if (this.health <= 0){
    return this.name + " has died in act of combat";
}
else {
    return this.name + " has received " + damage + " points of damage";
}
}

Viking.prototype.battleCry= function(){
    return "Odin Owns You All!"
}
// Saxon
Saxon.prototype=Object.create(Soldier.prototype)
function Saxon (health, strength) {
    Soldier.call(this, health, strength);   
}
Saxon.prototype.receiveDamage= function(damage){
    this.health -= damage;
    if (this.health <= 0){
        return "A Saxon has died in combat";
    }
    else {
        return "A Saxon has received " + damage + " points of damage";
    }
    }

// War
function War() {
     this.vikingArmy= [ ];
     this.saxonArmy= [ ];
};

War.prototype.addViking= function(vicking){
    this.vikingArmy.push(vicking);
}

War.prototype.addSaxon= function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack= function(){
    var oldHealth = saxon.health;
    

}