// Soldier
function Soldier(health,strength) {
    this.strength=strength;
    this.health=health;
    this.attack=function(){
        return strength;
    };
    this.receiveDamage=function(damage){
        health=health-damage;
    };
}

// Viking
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    Soldier.prototype.receiveDamage=function(damage){
        health=health-damage;
        if(health>0){console.log(name+"has received DAMAGE points of damage")}
        else{console.log("NAME has died in act of combat")};
        return health;
    };
    this.battleCry=function(){console.log("Odin Owns You All!")};
}

// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);
    Soldier.prototype.receiveDamage=function(damage){
        health=health-damage;
        if(health>0){console.log("A Saxon has received DAMAGE points of damage")}
        else{console.log("A Saxon has died in combat")};
        return health;
    };

}
var luis=new Viking("luis",100,50);
console.log(luis);



// War
function War() {}
