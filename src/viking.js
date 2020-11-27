// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength

    }
    receiveDamage(damage){
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name;

    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return ` ${this.name} has recived ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    

    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
       
        this.health -= damage
        if(this.health>0){
            return `"A Saxon has received ${damage} points of damage"`
        }
        
            return  "A Saxon has died in combat"
        

}
}
// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy  = [];
    }
addViking(Viking){

    this.vikingArmy.push(Viking)
}


addSaxon(Saxon){
    this.Saxon.push(saxonArmy);
}

vikingAttack(){
  const result= Saxon.receiveDamage(this.vikingAttack());
   if(Saxon.health<=0){
       this.saxonArmy.pop();
   }
   return result;

}
saxonAttack(){
    const result= Viking.receiveDamage(this.saxonAttack());
   if(Viking.health<=0){
       this.vikingArmy.pop();

}
return result;
//showStatus()

}
}