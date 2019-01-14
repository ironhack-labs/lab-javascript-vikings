// Soldier
function Soldier(healthArg,strengthArg) {
    this.health=healthArg;
    this.strength=strengthArg;
    this.attack=function(){
        return strengthArg;
    };
     this.receiveDamage=function(damage){
        this.health=this.health-damage;
     };
}

// Viking
function Viking(name,healthArg,strengthArg) {
    Soldier.call(this,healthArg,strengthArg);
    this.name=name;
    this.attack=function(){
        return this.strength;
    };
    this.receiveDamage=function(damage){
        this.health=this.health-damage;
        if(this.health>0){ return this.name + " has received " + damage + " points of damage";}
        else {return this.name + " has died in act of combat"}
     };
     this.battleCry=function(){
         return "Odin Owns You All!";
     }
    

}
            Viking.prototype = Object.create(Soldier.prototype)
            Viking.prototype.constructor = Viking;
            

// Saxon
function Saxon(healthArg,strengthArg) {
    Soldier.call(this,healthArg,strengthArg);

    this.attack=function(){
        return strengthArg;
    };
    this.receiveDamage=function(damage){
        this.health=this.health-damage;
        if(this.health>0){ return "A Saxon has received " + damage + " points of damage";}
        else {return "A Saxon has died in combat"}
     };
}

            Saxon.prototype = Object.create(Soldier.prototype)
            Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    this.addViking=function(viking){
       this.vikingArmy.push(viking);
    };
    this.addSaxon=function(saxon){
        this.saxonArmy.push(saxon);
     };
    
    
     this.vikingAttack=function(){
        var newSaxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
        var newVikingIndex=Math.floor(Math.random()*this.vikingArmy.length);
        this.saxonArmy[newSaxonIndex].receiveDamage(this.vikingArmy[newVikingIndex].strength);
         };
     
    
    }
    