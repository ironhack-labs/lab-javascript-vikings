// Soldier
class Soldier {
    constructor (healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super();
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
          return `${this.name} has received ${damage} points of damage`
        }else{
          return `${this.name} has died in act of combat`
        } 

    }
    battleCry(){
        return "Odin Owns You All!";

    }

}
// Saxon
class Saxon  extends Soldier{
    constructor(health, strength){
        super();
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
          return `A Saxon has received ${damage} points of damage`
        }else{
          return `A Saxon has died in combat`
        } 

    }
    battleCry(){
        return "Odin Owns You All!";

    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        
        let saxonAttacked = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let vikingAttacks = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];        
                
        saxonAttacked.receiveDamage(vikingAttacks.strength);
        
        if(saxonAttacked.health < 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonAttacked), 1)
            return `A Saxon has died in combat`
        }

        
    }
    saxonAttack(){

        let saxonAttacks = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        let vikingAttacked = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
                     
        vikingAttacked.receiveDamage(saxonAttacks.strength);
        
        if(vikingAttacked.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingAttacked), 1)
            
        }


    }
    showStatus(){
        if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
        return "Vikings and Saxons are still in the thick of battle."
    }

        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }

    }


}
