// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength; 
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }

    receiveDamage(damage){

        this.health-=damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
        
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        
        this.health-=damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
        
    }
    
    

}

// War
class War {
    constructor(){
        this.vikingArmy =[];
        this.saxonArmy =[];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        //we need a random number from 0 to saxonArmy.lenght = indexSaxRan
        let indexSaxRan = Math.floor(Math.random()*this.saxonArmy.length)
        // we need a random number from 0 to vikingArmy.lenght = indexVikRan
        let indexVikRan = Math.floor(Math.random()*this.vikingArmy.length)

        //  the attack begin
        let attack = this.saxonArmy[indexSaxRan].receiveDamage(this.vikingArmy[indexVikRan].strength);

        //cheaking for deads
        if (this.saxonArmy[indexSaxRan].health <= 0){
            this.saxonArmy.splice(indexSaxRan,1)
        }
        return attack
               
    }
    saxonAttack(){

        //we need a random number from 0 to saxonArmy.lenght = indexSaxRan
        let indexSaxRan = Math.floor(Math.random()*this.saxonArmy.length)
        // we need a random number from 0 to vikingArmy.lenght = indexVikRan
        let indexVikRan = Math.floor(Math.random()*this.vikingArmy.length)
        //  the attack begin
        let attack = this.vikingArmy[indexVikRan].receiveDamage(this.saxonArmy[indexSaxRan].strength); 
        
        if (this.vikingArmy[indexVikRan].health<=0){
            this.vikingArmy.splice(indexVikRan,1)
        }

        return attack;
    }
    showStatus(){}
}
