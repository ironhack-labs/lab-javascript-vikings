// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else return `${this.name} has died in act of combat`;
    }  
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else return `A Saxon has died in combat`;
    }  
    
}

// War
class War {
    constructor() {
     this.vikingArmy = [];   
     this.saxonArmy = []; 
    }
     
    addViking(newViking){
      this.vikingArmy.push(newViking);
    }
    addSaxon(newSaxon){
      this.saxonArmy.push(newSaxon);
    }
    vikingAttack(){
        let vikX = Math.floor(Math.random()*this.vikingArmy.length);
        let saxX = Math.floor(Math.random()*this.saxonArmy.length);
        
        this.saxonArmy[saxX].receiveDamage(vikX.strength);
        if (this.saxonArmy[saxX].health <= 0){
            this.saxonArmy[saxX].pop();
        }
      
    }
    saxonAttack(){

    }
    showStatus(){

    }
}

// 
// myWar.addViking("marco", 100, 100)
//  vikings = [["marco"],]
// vikings.map(functionn () {war.addViking()})
