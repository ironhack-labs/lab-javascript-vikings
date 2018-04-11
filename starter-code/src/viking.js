// Soldier
function Soldier (health, strength) {
    this.strength = strength;
    this.health = health;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(dmg){
        this.health = this.health - dmg;
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    Soldier.call(this, health, strength);
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(dmg){

        this.health = this.health - dmg;

        if(this.health <= 0){
            return this.name+" has died in act of combat";
        }else{
            return this.name+" has received "+dmg+" points of damage";
        }

    }
    this.battleCry = function(){
        return "Odin Owns You All!";
    }

}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon( health, strength) {
    this.strength = strength;
    this.health = health; 
    Soldier.call(this, health, strength);
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(dmg){

        this.health = this.health - dmg;

        if(this.health <= 0){
            return "A Saxon has died in combat";
        }else{
            return "A Saxon has received "+dmg+" points of damage";
        }
        
    }

}
Saxon.prototype = Object.create(Soldier.prototype);
// War
function War() {
    this.vikingArmy = [];
    this.soldierArmy = [];
    this.saxonArmy = [];
    this.addViking = function(viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    }
    this.vikingAttack = function(){

        let SaxonRandom = this.randomizer(this.saxonArmy);
        let VikingRandom = this.randomizer(this.vikingArmy);

        let Viking = this.vikingArmy[VikingRandom];

        //this.saxonArmy[SaxonRandom].receiveDamage(Viking.strength);
        let totalDamage = this.saxonArmy[SaxonRandom].health - Viking.strength;
        let res = this.saxonArmy[SaxonRandom].receiveDamage(Viking.strength);
        if(totalDamage <= 0){
           this.saxonArmy.splice(SaxonRandom,1);
        }

        return res;
    }
    this.saxonAttack = function(){

        let SaxonRandom = this.randomizer(this.saxonArmy);
        let VikingRandom = this.randomizer(this.vikingArmy);

        let Saxon = this.saxonArmy[SaxonRandom];

        let totalDamage = this.vikingArmy[VikingRandom].health - Saxon.strength;

        let res = this.vikingArmy[VikingRandom].receiveDamage(Saxon.strength);

        if(totalDamage <= 0){
            this.vikingArmy.splice(VikingRandom,1);
        }

        return res;
    }
    this.showStatus = function(){
      
        if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survive another day...";
        }else if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        }else if(this.saxonArmy.length >= 1 ){
            if(this.vikingArmy.length >= 1){
                return "Vikings and Saxons are still in the thick of battle.";
            }
        }

    }
    this.randomizer = function(obj){
        return Math.floor((Math.random()*obj.length)*obj.length);
    }
}
