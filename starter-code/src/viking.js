// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
    //Two prototypes methods for soldier
    Soldier.prototype.attack = function(){
        return this.strength;
    }
    Soldier.prototype.receiveDamage = function (damage){
        this.health -= damage;
    }

// Viking
function Viking(name, health, strength) {
    Soldier.call(this,health,strength);
    this.name = name;
}
//Inherits prototypes from Soldier Object
Viking.prototype = Object.create(Soldier.prototype);

    Viking.prototype.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        }
        else{
            return this.name + " has died in act of combat"
        }
    }
    Viking.prototype.battleCry = function(){
        return "Odin Owns You All!"        
    }
    

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    this.health -=damage;
    if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    }
    else{
        return "A Saxon has died in combat";
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
    //pick Saxon at random
    this.ranSaxonElement = Math.floor(Math.random()*this.saxonArmy.length);
    this.xSaxon = this.saxonArmy[this.ranSaxonElement];
    //pick viking at random
    this.ranVikingElement = Math.floor(Math.random()*this.vikingArmy.length);
    this.xViking = this.vikingArmy[this.ranVikingElement];
    //Saxon receives damage
    this.damageToSaxon = this.xSaxon.receiveDamage(this.xViking.strength);
    //remove dead Saxon from army
    if (this.xSaxon.health< 1){
        this.saxonArmy.splice(this.ranSaxonElement,1);
    }    
    //call for receiveDamage of Saxon object with strength of a Viking;
    return this.damageToSaxon;
}

War.prototype.saxonAttack = function(){
     //pick Saxon at random
     this.ranSaxonElement = Math.floor(Math.random()*this.saxonArmy.length);
     this.xSaxon = this.saxonArmy[this.ranSaxonElement];
     //pick viking at random
     this.ranVikingElement = Math.floor(Math.random()*this.vikingArmy.length);
     this.xViking = this.vikingArmy[this.ranVikingElement];
     //Viking receives damage
    this.damageToViking = this.xViking.receiveDamage(this.xSaxon.strength);
    //remove dead Saxon from army
    if (this.xViking.health < 1){
        this.vikingArmy.splice(this.ranVikingElement,1);
    }    
    //call for receiveDamage of Saxon object with strength of a Viking;
    return this.damageToViking;
}

War.prototype.showStatus = function(){
    if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    }
    else if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    }
    else if((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0)){
        return "Vikings and Saxons are still in the thick of battle."
    }
}





