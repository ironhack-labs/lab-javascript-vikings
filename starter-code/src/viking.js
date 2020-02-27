// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-= damage;       
    }
    
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-= damage;
        if(this.health<=0){
            return (this.name + " has died in act of combat");     
        }else{
            return (this.name + " has received " + damage + " points of damage");   
        }
    
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{

    constructor(health, strength, name){
        super(health, strength);
        this.name=name;
    }
  
    receiveDamage(damage){
        this.health-= damage;
        if(this.health<=0){     
            return ("A Saxon has died in combat");
        }else{
            return ("A Saxon has received " + damage + " points of damage"); 
        }
    }

}
// War
class War {
   constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);

    }
    vikingAttack(){
        //chose a random saxon
        var randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomSaxonIndex];
        //chose a random Viking
        var randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        var randomViking = this.vikingArmy[randomVikingIndex];
        //Viking attacks saxon
        var resultDamage = randomSaxon.receiveDamage(randomViking.strength);
        //Remove dead Saxons from Array
        for(var i=0; i<this.saxonArmy.length;i++){
            var currentSaxon= this.saxonArmy[i];
            if (currentSaxon.health<=0){
                this.saxonArmy.pop(i);
            }
        }
        return resultDamage;
    }

    saxonAttack(){
        //chose a random Viking
        var randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        var randomViking = this.vikingArmy[randomVikingIndex];
        //chose a random Saxon
        var randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomSaxonIndex];
        //Saxon attacks Viking
        var resultDamage = randomViking.receiveDamage(randomSaxon.strength);
        //Remove dead Vikings from Array
        for(var i=0; i<this.vikingArmy.length;i++){
            var currentViking= this.vikingArmy[i];
            if (currentViking.health<=0){
                this.vikingArmy.pop(i);
            }
        }
        return resultDamage;
    }
    
showStatus(){
    if((this.saxonArmy.length>0) &&(this.vikingArmy.length)>0){
        return "Vikings and Saxons are still in the thick of battle.";
    }else if(this.saxonArmy.length===0){
        return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length===0){
        return "Saxons have fought for their lives and survived another day..";
    }
}
    
}
