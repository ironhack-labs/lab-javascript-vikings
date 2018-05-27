// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

    this.attack = function () {
        return this.strength;
    }

    this.receiveDamage = function (damage) {
        this.health = this.health - damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;


    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
        // return (this.health > 0) ? this.name + " has received " + damage + "points of damage" : this.name + " has died in act of combat" ;
        if(this.health > 0){
            return this.name + " has received " + damage + " points of damage"}
        else{
            return this.name + " has died in act of combat"
        }
    }

    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        // return (this.health > 0) ? "A Saxon has received " + damage + "points of damage" : this.name + " has died in act of combat" ;
        if(this.health > 0){
             return "A Saxon has received " + damage + " points of damage"}
             else{
             return "A Saxon has died in combat"
             }
    }
 }
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function (Viking){
        this.vikingArmy.push(Viking)
    }
    this.addSaxon = function (Saxon){
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = function(){
        var randSax = Math.floor(Math.random()*this.saxonArmy.length);
        var randVik = Math.floor(Math.random()*this.vikingArmy.length);
        var whathappen = this.saxonArmy[randSax].receiveDamage(this.vikingArmy[randVik].strength);
        if (this.saxonArmy[randSax].health<=0){
            this.saxonArmy.splice(randSax,1)
        }
        return whathappen
    }
    this.saxonAttack = function(){
        var randSax = Math.floor(Math.random()*this.saxonArmy.length);
        var randVik = Math.floor(Math.random()*this.vikingArmy.length);
        var whathap = this.vikingArmy[randVik].receiveDamage(this.saxonArmy[randSax].strength);
        if (this.vikingArmy[randVik].health<=0){
            this.vikingArmy.splice(randVik,1)
        }
        return whathap
    }
    this.showStatus = function(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survive another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }}
 }
