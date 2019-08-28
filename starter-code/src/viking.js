// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health= healthArg;
        this.strength= strengthArg;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damageArg) {
        this.health -= damageArg;
    
    }
}
 

// Viking
class Viking extends Soldier{
    constructor(nameArg,healthArg, strengthArg) {
        super(healthArg,strengthArg)
        this.name = nameArg;
    }
       receiveDamage(damage){
           this.health -= damage;
            if(this.health>0){
       return `${this.name} has received ${damage} points of damage`
            }else {
            return `${this.name} has died in act of combat`
        }
        
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg,strengthArg){
    super(healthArg,strengthArg)
    }
    receiveDamage(damage){
        this.health -= damage;
            if(this.health>0){
       return `A Saxon has received ${damage} points of damage`
            }else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
    this.vikingArmy= [];
    this.saxonArmy=[];
    }
    addViking(vikingObj){
       this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
     }

     vikingAttack(){
        let saxonPlayer= this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength)
        this.saxonArmy.pop(saxonPlayer);
        return saxonPlayer;
     }
        saxonAttack(){
            let random= Math.floor(Math.random()* this.vikingArmy.length)
            let vikingPlayer= this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength)
        if(this.vikingArmy[random].health <= 0){
            this.vikingArmy.splice(random,1)
        }
        return vikingPlayer
        }
        showStatus(){
            if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
            }
            else if (this.vikingArmy.length === 0){
                return "Saxons have fought for their lives and survive another day..."
            }
            else {
                return "Vikings and Saxons are still in the thick of battle."
            }
            }
        }
     

