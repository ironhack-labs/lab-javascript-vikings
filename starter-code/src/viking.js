// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function(){
        return this.strength;
    };
    this.receiveDamage = function (damage) { 
        this.health -= damage;
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage"
        }
        else {
            return this.name + " has died in act of combat"
        }

    };
}

// Viking

Viking.prototype = Soldier.prototype;

function Viking(nameArg, healthArg , strengthArg) {
    Soldier.call(this, healthArg,strengthArg);
    this.name= nameArg;
    
    this.battleCry = function(){ return "Odin Owns You All!"};
    
    }
   
   
// Saxon
Saxon.prototype = Soldier.prototype;

function Saxon (healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage"
    }
    else {
        return "A Saxon has died in combat"
    }
}
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(Viking){
       this.vikingArmy.push(Viking);
    }
    this.addSaxon = function(Saxon){
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = function(){
        var randomViking = Math.floor(Math.random() * this.vikingArmy.lenght);
        var randomSaxon = Math.floor(Math.random()* this.vikingArmy.lenght);
        saxonArmay[randomSaxon].receiveDamage(vikingArmy[randomViking].strength);
        
    }
    this.saxonAttack = function(){}
    
}
