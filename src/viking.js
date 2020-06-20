// Soldier
class Soldier {
    constructor(health,strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
        return this.strength;
       
}
receiveDamage(damage){
    this.health -= damage;
}
} 
  
// Viking
class Viking extends soldier {
constructor(name, health, strength){
super(health,strength);
this.name= name;

}
receiveDamage(damage){
    this.health -= damage;
    if(Viking > 1){
        return"NAME has received DAMAGE points of damage"
    }else{
        return "NAME has died in act of combat"
    }
} 
battleCry(){
   return "Odin Owns You All!"
} 
}
// Saxon
class Saxon extends soldier {

receiveDamage(damage){
    if(saxon >0){
        return "A Saxon has received DAMAGE points of damage"
    }else{
        return "A Saxon has died in combat"
    }
}
} 
class War {
    constructor(){
        this.vikingArmy= [];
        this.saxonArmy = [];
    }
    addViking(viking){
      this.vikingArmy.push(viking)  
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);  
    }
    vikingAttack(){
     var ramdomSaxon = Math.floor(Math.ramdom * this.saxonArmy.length); 
     var ramdomViking = Math.floor(Math.ramdom * this.vikingArmy.length); 
     //this.saxonArmy[ramdomSaxon].receiveDamage(this.vikingArmy[ramdomViking].attack())
    var saxon = this.saxonArmy[ramdomSaxon]; 
    var viking = this.vikingArmy[ramdomViking];
    saxon.receiveDamage(viking.attack())
    if(saxon.health < 1){
        this.saxonArmy.splice(ramdomSaxon)
    }
    }
    saxonAttack(){
        var ramdomSaxon = Math.floor(Math.ramdom * this.saxonArmy.length); 
        var ramdomViking = Math.floor(Math.ramdom * this.vikingArmy.length); 
        var saxon = this.saxonArmy[ramdomSaxon]; 
        var viking = this.vikingArmy[ramdomViking];
        viking.receiveDamage(saxon.attack())
        if(viking.health < 1){
this.vikingArmy.splice(ramdomViking)
        }
    }
    showStatus(){
      if(this.saxonArmy.length == 0){
return "Vikings have won the war of the century!"
      }if(this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survived another day..."        
      }else if(this.saxonArmy.length >= 1 ){
        return "Vikings have won the war of the century!"     
      }else if(this.vikingArmy.length >= 1){
        return "Vikings and Saxons are still in the thick of battle."  
      } 
    }

}
