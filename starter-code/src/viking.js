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
        
        let result = this.saxonArmy[saxX].receiveDamage(this.vikingArmy[vikX].strength);
        if (this.saxonArmy[saxX].health <= 0){
            this.saxonArmy.splice(saxX,1);
        }
        return result;
    }
    saxonAttack(){
        let saxX = Math.floor(Math.random()*this.saxonArmy.length);
        let vikX = Math.floor(Math.random()*this.vikingArmy.length);
        let result = this.vikingArmy[vikX].receiveDamage(this.saxonArmy[saxX].strength);
        if (this.vikingArmy[vikX].health <= 0){
            this.vikingArmy.splice(vikX,1);
        }
        return result;
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        return 'Vikings and Saxons are still in the thick of battle.';
    }
}

// 
// myWar.addViking("marco", 100, 100)
//  vikings = [["marco"],]
// vikings.map(functionn () {war.addViking()})
