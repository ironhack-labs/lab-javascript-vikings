// Soldier
function Soldier(health,strength) {
 this.health=health;
 this.strength=strength;
 this.attack=function(){
   return this.strength;
}
this.receiveDamage=function(damage){
this.health=this.health - damage;


 }
}
// Viking
function Viking(name,health,strength) {

this.name=name;
Soldier.call(this,health,strength);
this.receiveDamage=function(damage){

    this.health=this.health - damage;

    
    if(this.health>0 && damage>0){
        return this.name + " has received "+ damage + " points of damage"
    }else{
        return this.name + " has died in act of combat"
    }
}
 this.battleCry=function(){

    return "Odin Owns You All!";
 }

}

// Saxon
function Saxon(health,strength) {

    Soldier.call(this,health,strength);
 this.receiveDamage=function(damage){
    this.health=this.health - damage;

    if(this.health>0 && damage>0){
        return "A Saxon has received "+ damage + " points of damage"
    }else{
        return "A Saxon has died in combat"
    }
 } 
}
// War
function War() {

    this.vikingArmy=vikingArmy=[];
    this.saxonArmy=saxonArmy=[];

    this.addViking=function(viking){

        this.vikingArmy.push(viking);

    }

    
    this.addSaxon=function(Saxon){

            this.saxonArmy.push(Saxon);
    
    }
  
    this.vikingAttack=function(){
        var choseSaxon=saxonArmy.math.Random
    }
    this.saxonAttack=function(){

    }

    this.showStatus=function(){
        if(saxonArmy.length===0){
            return "Vikings have won the war of the century";
        }else if(vikingArmy.length===0){
            return "Saxons have fougth for their lives and survive another day...";
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    

    }
