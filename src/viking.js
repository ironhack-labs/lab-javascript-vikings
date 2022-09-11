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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength); 
            this.strength = strength;
            this.health = health;
            this.name = name;
        
    } 
    
    
    receiveDamage(damage) {
       this.health =  this.health - damage;
       if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`
       }else {
        return `${this.name} has died in act of combat`;
       }
    }
    
    battleCry() {
        return "Odin Owns You All!";
    }
    
    }
    
    let viking = new Viking ('thor', 5, 10);
    viking.attack();


     // Saxon
class Saxon extends Soldier{
       
        receiveDamage(damage) {
            this.health = this.health - damage;
            if(this.health > 0){
                return `A Saxon has received ${damage} points of damage`;
            }else {
                return `A Saxon has died in combat`;
            }
        }
    }
    
    let saxon = new Saxon (6, 7);
    saxon.attack();
   
    
 // War
 class War {
    constructor (vikingArmy = [], saxonArmy = []){
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;
    }

    addViking(Viking){
    this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
    
    }

    saxonAttack() {
       
            
    }

    showStatus() {}

    
}
   
