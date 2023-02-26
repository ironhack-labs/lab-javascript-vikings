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
        this.health -= damage;
    }   
};
  

    
  


// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name;
    }
    receiveDamage(damage){
       this.health -= damage;
        if(this.health <=0){
            return `${this.name} has died in act of combat`; 
        }else{
            return `${this.name} has received ${damage} points of damage`;
        }
    }
    
    battleCry(){
        return "Odin Owns You All!";
    }
};
    

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health -= damage;
        if(this.health <=0){
            return `A Saxon has died in combat`; 
        }else{
            return `A Saxon has received ${damage} points of damage`;
        }   
    }
};

// War
class War{
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking){
    this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
     let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
     let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
     this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

     if(this.vikingArmy[randomViking].health <=0){
        this.vikingArmy.splice(randomViking)     
    }else{
        return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`;
    }
    }
    saxonAttack(){
    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

    if(this.saxonArmy[randomSaxon].health <=0){
        this.saxonArmy.splice(randomSaxon)    
    }else{
        return `${this.saxonArmy[randomSaxon].name} has received ${this.vikingArmy[randomViking].strength} points of damage`;
    }





    }
    showStatus(){

    }
};
