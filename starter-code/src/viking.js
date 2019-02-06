// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    };
    this.receiveDamage = function(damage){
        this.health-=damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    Soldier.attack = function(){
        return this.strength;
    };
    this.receiveDamage = function(damage){
        this.health-=damage;
        var muerto = 0;
        if(Viking.health > 0){
            return this.name + "has received" + this.receiveDamage() + "points of damage";
        }else{
            return this.name + "has died in act of combat"; 
        }
    };
    this.battlecrY = function(){
        return "Odin Owns You All!"
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    Soldier.attack = function(){
        return this.strength;
    };
    this.receiveDamage = function(damage){
        Saxon.health-=damage;
        var muerto = 0;
        if(Saxon.health > 0){
            return "A Saxon has received" + this.receiveDamage() + "points of damage";
        }else{
            return "A Saxon has died in combat"; 
        }
    };
}

// (BONUS) War
/*function War() {
    var vikingArmy = [];
    var saxonArmy = [];
    var oldHealthS = Saxon.health;
    var oldHealthV = Vinking.health;
    this.addViking = function(Viking){
        vikingArmy.push(Viking);
    };
    this.addSaxon = function(Saxon){
        saxonArmy.push(Saxon);
    };
    this.vikingAttack = function(){
        Saxon.receiveDamage () = Viking.strength;
        oldHealthS -= saxonArmy;
        return Saxon.receiveDamage();
    };
    this.saxonAttack = function(){
        Viking.receiveDamage() = Saxon.strength;
        oldHealthV -= vikingArmy;
        return Viking.receiveDamage();
    };
    this.showStatus = function(){
        if(saxonArmy == 0){
            return "Vikings have won the war of the century!";
        }else if(vikingArmy == 0){
            return "Saxons have fought for their lives and survive another day...";
        }else (saxonArmy >= 1 && vikingArmy >= 1){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}*/
