// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
    this.health = this.health - theDamage
    }
}

// Viking
class Viking extends Soldier  {
    constructor(name, health, strength,){
        super(health, strength);
        this.name=name;
    }
    //this.attack()
    receiveDamage(theDamage){
       this.health = this.health - theDamage;
        if (this.health>0){
            return `${this.name} has received ${theDamage} points of damage`
        }
        else return `${this.name} has died in act of combat`
    }
       battleCry(){
           return `Odin Owns You All!`
       } 
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength,){
        super(health, strength);
    
    }
//this.attack()
receiveDamage(theDamage){
   this.health = this.health - theDamage;
    if (this.health>0){
        return `A Saxon has received ${theDamage} points of damage`
    }
    else return `A Saxon has died in combat`
  }
}

// War
class War {
    constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
    }

    addViking(Viking){

        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){

        this.saxonArmy.push(Saxon)
 }
    
    vikingAttack(){
        let Sax=this.saxonArmy[0];
        let Vik=this.vikingArmy[0];

        receiveDamage(Vik.health)

        //My Brain stopped working!
    }

}



