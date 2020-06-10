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

//struggling with removing te dead soldiers on each side, I know I have to use pop() on the armies to remove an element of their arrays

addViking(Viking){ 
    
    this.vikingArmy.push(Viking);

}
addSaxon(Saxon){
    
    this.saxonArmy.push(Saxon);


}
vikingAttack(){

let attack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);




return attack;

}


saxonAttack(){    

let attack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);


return attack;


}



showStatus(){

    if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!";
}
    if (this.vikingArmy.length === 0) {return "Saxons have fought for their lives and survived another day...";
}
    if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {return "Vikings and Saxons are still in the thick of battle.";
}   
    
}
}
