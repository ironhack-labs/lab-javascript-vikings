// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }

}



// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        return `${this.name} has died in act of combat`;   
        
    }   
    battleCry(){
        return `Odin Owns You All!`
    }
        
        
    
    
    

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        return `A Saxon has died in combat`;
        
    }   

}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }



addViking(Viking){ 
    
    this.vikingArmy.push(Viking);

}
addSaxon(Saxon){
    
    this.saxonArmy.push(Saxon);


}
vikingAttack(){

const attack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

const saxon = this.saxonArmy[0];

if (saxon.health <= 0){
    
    this.saxonArmy.pop(Saxon);
  }






return attack;

}


saxonAttack(){    

const attack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

const viking = this.vikingArmy[0];

if (viking.health <= 0){
  
    this.vikingArmy.pop(Viking);
}



return attack;


}



showStatus(){

    if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!";
}
    if (this.vikingArmy.length === 0) {return "Saxons have fought for their lives and survived another day...";
}
    else {return "Vikings and Saxons are still in the thick of battle.";
}   
    
}
}


