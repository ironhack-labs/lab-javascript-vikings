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
  this.health-=damage;
    }
}

// Viking
class Viking extends Soldier {
   
    constructor(name,health,strength){
    super(health,strength);
    this.name=name;
}
      
    receiveDamage(damage){
     
    this.health -=damage;

     if(this.health>0){
         return (`${this.name} has received ${damage} points of damage`);
     }
     else {
        return (`${this.name} has died in act of combat`);
    }
     }


    battleCry(){
    return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health -=damage;

        if(this.health>0){
            return (`A Saxon has received ${damage} points of damage`);
        }
        else {
           return (`A Saxon has died in combat`);
       }
        }
    } 


// War
class War {
constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
}
addViking(Viking){
 this.vikingArmy.push(Viking);
}
    addSaxon(Saxon){
     this.saxonArmy.push(Saxon);
}
    vikingAttack(){
        let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxIndex];
        let randomViking = this.vikingArmy[vikIndex];
        randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(saxIndex,1);
            return 'A Saxon has died in combat'
        }
}
   saxonAttack(){
    let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[saxIndex];
    let randomViking = this.vikingArmy[vikIndex];
    
    randomViking.receiveDamage(randomSaxon.strength);

if(randomViking.health <= 0){
        this.vikingArmy.splice(vikIndex,1);
        return 'A Viking has died in combat'
    }
return randomViking.name + ' has received '+randomSaxon.strength+ ' points of damage'

}

showStatus(){
if (this.saxonArmy.length === 0){
return 'Vikings have won the war of the century!'
}
if (this.vikingArmy.length === 0){
    return 'Saxons have fought for their lives and survived another day...'
}
return 'Vikings and Saxons are still in the thick of battle.'
}


}