// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function () {
        return this.strength;
    }   
    this.receiveDamage = function (damage){
        this.health -= damage;
    }
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

    this.battleCry = function(){ 
        return "Odin Owns You All!";
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
        return (this.health>0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat");
    }
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
function Saxon(health, strength) {
    Soldier.call(this,health,strength);
   
    this.receiveDamage = function(damage){
        this.health -= damage;
        return (this.health>0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat");
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
        this.saxonArmy.push(Saxon);
    }
    this.vikingAttack = function(){
        var randomNumS = (Math.floor(Math.random() * this.saxonArmy.length));
        var hurtSaxon = this.saxonArmy[randomNumS];
        
        var randomNumV = (Math.floor(Math.random() * this.vikingArmy.length));
        var attackingViking = this.vikingArmy[randomNumV];
        
        var saxonStrength = hurtSaxon.receiveDamage(attackingViking.strength);

        for (var i=0; i<this.saxonArmy.length; i++) {
        if(this.saxonArmy[i].health === 0) {
            this.saxonArmy.splice(i,1);
        }
        
    }
        return saxonStrength;
    }
    this.saxonAttack = function(){
        var randomNumS = (Math.floor(Math.random() * this.saxonArmy.length));
        var attackingSaxon = this.saxonArmy[randomNumS];
        
        var randomNumV = (Math.floor(Math.random() * this.vikingArmy.length));
        var hurtViking = this.vikingArmy[randomNumV];
        
        var vikingStrength = hurtViking.receiveDamage(attackingSaxon.strength);

        for (var i=0; i<this.vikingArmy.length; i++) {
            if(this.vikingArmy[i].health === 0) {
                this.vikingArmy.splice(i,1);
            }
        }
        return vikingStrength;
    }

    this.showStatus = function(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
        {
            return "Vikings and Saxons are still in the thick of the battle.";
        }
    }
}