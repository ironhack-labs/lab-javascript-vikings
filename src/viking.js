// Soldier
class Soldier {

constructor(health, strength){
this.health = health;
this.strength = strength;
}

attack(){
    return this.strength;
}
receiveDamage(damage){
    
}
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
       

       super(name, health, strength);
       this.name = name;
       this.health = health;
       this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
       if(damage =0){
        return `${this.name} has received `
       }

    }

    battleCry(){
        return `${this.name} Owns You All! `
   
    } 
} 
const odin = new Viking('Odin');




// Saxon
class Saxon extends Soldier {
   
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking){
       

       
    } 

    addSaxon(Saxon){
  
    }

    vikingAttack(){
        let dama = (Math.random(Saxon) * this.damage);
        this.strength = dama;
        }

    saxonAttack(){}

    showStatus(){}

}
