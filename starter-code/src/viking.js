// Soldier
class Soldier{
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        let status = parseInt(this.health -= damage);
    }    
}

// Viking
class Viking extends Soldier{
    constructor(name, healthArg, strengthArg) {
        super (healthArg, strengthArg);
        this.name = name; 
    }

    receiveDamage(damage){
        let status = parseInt(this.health -= damage);
        if (status > 0){
            return (this.name + " has received " + damage + " points of damage");   
        }else{
            return (this.name +" has died in act of combat");
        }
        return status;
    }

    battleCry(){
        return ("Odin Owns You All!");
    }

}


// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super (healthArg, strengthArg);
    }
     
    receiveDamage(damage){
        let status = parseInt(this.health -= damage);
        if (status > 0){
            return ("A Saxon has received " + damage + " points of damage");   
        }else{
            return ("A Saxon has died in combat");
        }
        return status;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
        // this.Saxon.receiveDamage = this.Viking.strength;
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        // this.vikingArmy = [];


    }
    saxonAttack(){
        // this.saxonArmy = [];

    }
    showStatus(){

    }
}
