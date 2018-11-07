// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function() {
        return this.strength;
        
    };
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
    }
}


// Viking
function Viking(name,healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
    this.battleCry = function(){
        return "Odin Owns You All!";
    }
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if (health > 0) {
            return this.name + " has received" +damage+" points of damage";
        }
        else{
            return this.name + " has died in combat";
        }
    }
}

Viking.prototype.constructor = Viking;
Viking.prototype = Object.create(Soldier.prototype);
// Saxon
Soldier.call(this, healthArg, strengthArg);
function Saxon(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function() {
        return this.strength;

    }
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if (health > 0) {
            return "A Saxon has received" +damage+" points of damage";
        }
        else{
            return "A Saxon has died in combat";
        }
    }
}
Saxon.prototype.constructor = Saxon;
Saxon.prototype = Object.create(Soldier.prototype);   


// War
function War() {}
//