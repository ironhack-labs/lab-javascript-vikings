// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength= strength;
    }

    attack(){
       return this.strength 
    }
    receiveDamage(theDamage){
        this.health -= theDamage
    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
    super (health, strength)
    this.name= name;
}
receiveDamage(theDamage){
 this.health -= theDamage;
 if(this.health > 0){
     return `${this.name} has received ${theDamage} points of damage`
 }else if (this.health <= 0){
     return `${this.name} has died in act of combat`
 }
}
battleCry(){
    return "Odin Owns You All!"
}
};

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super (health, strength)
    }
 receiveDamage(theDamage){
     this.health -= theDamage;
     if (this.health>0){
         return `A Saxon has received ${theDamage} points of damage`
     }else{
         return "A Saxon has died in combat"
     }
 } 
};

// War
class War {
    constructor(){
      this.vikingArmy= []; 
      this.saxonArmy= [] 
    }
    addViking(vikingObject){
      this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject){
      this.saxonArmy.push(saxonObject)
    }
    vikingAttack(){
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var saxonSoldier = this.saxonArmy[randomSaxon];
    
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        var vikingSoldier = this.vikingArmy[randomViking];
    
        var result = saxonSoldier.receiveDamage(vikingSoldier.attack());  

        if(saxonSoldier.health <= 0){
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return result
    }
    saxonAttack(){
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        var vikingSoldier = this.vikingArmy[randomViking];
        
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var saxonSoldier = this.saxonArmy[randomSaxon];

        var result = vikingSoldier.receiveDamage(saxonSoldier.attack());

        if(vikingSoldier.health <= 0){
            this.vikingArmy.splice(randomViking, 1);
        }
        return result
    }
    showStatus(){
       if(this.saxonArmy.length === 0){
           return "Vikings have won the war of the century!"
       } else if (this.vikingArmy.length === 0){
           return "Saxons have fought for their lives and survived another day..."
       }else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
           return "Vikings and Saxons are still in the thick of battle."
       }
    }
}


