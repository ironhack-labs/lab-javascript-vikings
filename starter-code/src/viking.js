// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health-=damage;
    }
}

Viking.prototype = Object.create(Soldier.prototype);
// Viking
function Viking(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
    this.receiveDamage = function(damage){
        this.health-=damage;
        return (this.health > 0) ? this.name+" has received "+damage+" points of damage"
        : this.name+" has died in act of combat";
    }
    this.battleCry = function(){
        return "Odin Owns You All!";
    }
}

Saxon.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.receiveDamage = function(damage){
        this.health-=damage;
        return (this.health > 0) ? "A Saxon has received "+damage+" points of damage"
        : "A Saxon has died in combat";
    }
    this.battleCry = function(){
        return "Odin Owns You All!";
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    }
    this.vikingAttack = function(){
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let text = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack());
        (text.includes("died")) && this.saxonArmy.splice(saxonIndex,1);
        return text;
    }
    this.saxonAttack = function(){
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let text = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());
        (text.includes("died")) && this.vikingArmy.splice(vikingIndex,1);
        return text;
    }
    this.showStatus = function(){
        return (!this.saxonArmy.length) ? ("Vikings have won the war of the century!"):
        (!this.vikingArmy.length) ? ("Saxons have fought for their lives and survive another day..."):
        ("Vikings and Saxons are still in the thick of battle.");
    }
}