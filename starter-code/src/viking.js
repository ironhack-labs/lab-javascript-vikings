// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength;
    };
    receiveDamage(damage){
        this.damage = damage;
      this.health = this.health - this.damage;
    }
  };
  

  class Viking extends Soldier {
    constructor(name,health,strength){
            super(health,strength);
            this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage=damage;
        this.health=this.health - this.damage;
         if(this.health>0 && this.damage === 75){
            return(this.name + " has received 75 points of damage");
         }else if(this.health>0 && this.damage ===50){
            return(this.name + " has received 50 points of damage");
         }else{
             return(this.name + " has died in act of combat");
         }
    }
    battleCry(){
        return("Odin Owns You All!");
    }
  };
  
  
  // Saxon
  class Saxon extends Soldier{
    constructor(health, strength) {
            super(health,strength)
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage=damage;
        this.health=this.health - this.damage;
         if(this.health>0 && this.damage === 45){
            return"A Saxon has received 45 points of damage";
         }else if(this.health>0 && this.damage ===10){
            return"A Saxon has received 10 points of damage";
         }else{
             return"A Saxon has died in combat";
             
         }
    }
  };
  
  // War
  class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack(){    

      let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
      let randomS = this.saxonArmy[saxonIndex];
      let randomV = this.vikingArmy[(Math.floor(Math.random()* this.vikingArmy.length))].strength;
      let damageS = randomS.receiveDamage(randomV);  
     
      if(randomS.health <=0){
        this.saxonArmy.splice(saxonIndex,1);
      }
      return damageS;
     
   }
    saxonAttack(){

      let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
      let randomV = this.vikingArmy[vikingIndex];
      let randomS = this.saxonArmy[(Math.floor(Math.random()* this.saxonArmy.length))].strength;
      let damageV = randomV.receiveDamage(randomS);  
     
      if(randomV.health <=0){
        this.vikingArmy.splice(vikingIndex,1);
      }
      return damageV;
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return"Vikings have won the war of the century!";

        }else if(this.vikingArmy.length === 0){
            return("Saxons have fought for their lives and survive another day...");
        }else if(this.saxonArmy.length ===1 && this.vikingArmy.length ===1){
            return("Vikings and Saxons are still in the thick of battle.");
        }
    }
  };

  