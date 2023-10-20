// Soldier
class Soldier {
    constructor (health,strength){
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
       this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health, strength);
        this.name=name;
    }
    receiveDamage(damage) {
        let message =""
        this.health = this.health - damage
         if(this.health>0){
            message =`${this.name} has received ${damage} points of damage` 
         }else{
            message= `${this.name} has died in act of combat`
         }

    return message
    }
    battleCry(){
        return "Odin Owns You All!"
    }
   
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        let message =""
        this.health = this.health - damage
         if(this.health>0){
            message =`A Saxon has received ${damage} points of damage`
         }else {
            message= `A Saxon has died in combat`
         }

    return message

    }
}

// War
class War {
    vikingArmy =[];
    saxonArmy =[];

    //Viking1 = new.Viking("Gizem")
//     should be a declared
// should receive 0 arguments
// should make Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }v
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)

    }

    vikingAttack(){
       receiveDamage(this.vikingArmy.damage) = this.saxonArmy.strength 
        
        
    }






// vikingAttack(){}
// saxonAttack(){}
// showStatus(){}

}




