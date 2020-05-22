// Soldier
class Soldier { 

    constructor(health,strength){
        this.health= health;
        this.strength=strength;
    }
    attack(){
return this.strength;
 }


    recieveDamage(dmg){      
this.health = this.health - dmg ;

}

}

/*

// Viking
class Viking extends Soldier {

    constructor(name,health,strength){
this.name =name;
this.health = health;
this.strength = strength;

    }



    recieveDamage(dmg){
this.health = this.health - dmg;
if (this.health <=0){
return (`${this.name} has died in combat`);

}else {
    return (`${this.name} has recieved ${dmg} poinst of damage`)
}


    }
battleCry(){

    return ("odin owns youAll");
}

}

// Saxon
class Saxon extends Soldier {

recieveDamage(dmg){

    this.health= this.health - dmg;

    if(this.health <= 0){
        return ("A saxon has died in combat");
        
    }else{
        return (" A saxon has recieved${dmg} points");
    }
}
}

// War
class War {

    constructor(){
this.vikingArmy=[];
this.saxonArmy=[];

    }
    

    addViking(viking1){
this.vikingArmy.push(viking1);

    }
addSaxon(saxon1){
this.saxonArmy.push(saxon1);
}

vikingAttack(){



}
saxonAttack(){


}

showStatus(){


}
}*/