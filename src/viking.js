// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage
    }

};


// Viking

class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength)
        this.name=name;
    }

    // que quiere decir re-implementar la funcion de receivedDamage?
    receiveDamage(damage) {
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
};


// Saxon

class Saxon extends Soldier {


attack(){
    return this.strength;
}

receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    } else {
        return "A Saxon has died in combat" 
    }
}

};

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
 
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);

    }

    vikingAttack(){
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomNum];
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNum];
      
        //randomSaxon es don agafarem la funció,i com a argument li donare, una altra funcio agafada de randomVikings, la funcio s'anomena attack. Aixi li diem qui fara el mal i qui el rebra
        randomSaxon.recieveDamage(randomViking.attack())
     }
         
    
    saxonAttack(){

    }
    showStatus(){
    
    }
};