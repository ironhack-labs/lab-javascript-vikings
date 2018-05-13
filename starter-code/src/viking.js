// Soldier
function Soldier(healthArg, strengthArg) {
    this.health=healthArg;
    this.strength=strengthArg;
    this.attack=function(){
        return this.strength;
    };
    this.receiveDamage=function(damage){
        this.health-=damage;
    };
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name=name;
    this.attack=function(){
        return this.strength;
    };
    this.receiveDamage=function(damage){
        this.health-=damage;
        if(this.health>0){
            return name+" has received "+ damage +" points of damage";
        }else{
            return name+" has died in act of combat";
        }
    };
    this.battleCry=function(){
        return "Odin Owns You All!";
    };

}
Viking.prototype=Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.attack=function(){
        return this.strength;
    };
    this.receiveDamage=function(damage){
        this.health-=damage;
        if(this.health<=0){
            return "A Saxon has died in combat";
        }else{
            return "A Saxon has received "+ damage +" points of damage";
        }
    }

}
Saxon.prototype=Object.create(Soldier.prototype);
// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    this.addViking=function(viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon=function(Saxon){
        this.saxonArmy.push(Saxon);
    }
    this.vikingAttack=function(){
        let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length);
        let randomViking=Math.floor(Math.random()*this.vikingArmy.length);
        let result=this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
        if(result=="A Saxon has died in combat"){
            this.saxonArmy.splice(randomSaxon,1);}
        return result;
    }
    this.saxonAttack=function(){
        let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length);
        let randomViking=Math.floor(Math.random()*this.vikingArmy.length);
        let result=this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
        console.log(this.vikingArmy.length);
        if(result.includes("died")){
            console.log(result);
            this.vikingArmy.splice(randomViking,1);}
        return result;
    }
    
    this.showStatus=function(){
        if(this.saxonArmy.length==0){
            return "Vikings have won the war of the century!";
        }
        if(this.vikingArmy.length==0){
            return "Saxons have fought for their lives and survive another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
    }


}