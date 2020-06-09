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

//can't remove te dead soldiers on each side

addViking(Viking){ 
    
    this.vikingArmy = [Viking];

}
addSaxon(Saxon){
    
    this.saxonArmy=[Saxon];


}
vikingAttack(){

let attack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);


return attack;

}


saxonAttack(){    

let attack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);


return attack;


}

// somehow the showstatus doesn't pass the test, i think it has to do with the way i add saxon and viking to the armies but i can't find the problem

showStatus(){

    if (Saxon.length === 0) {return "Vikings have won the war of the century!";
}
    if (Viking.length === 0) {return "Saxons have fought for their lives and survived another day...";
}
    if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {return "Vikings and Saxons are still in the thick of battle.";
}   
    
}
}
