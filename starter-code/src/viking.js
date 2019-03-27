// Soldier

class Soldier {

    constructor (health, strength) {
        this.health=health,
        this.strength=strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}



// Viking
class Viking extends Soldier {

    constructor (name, health, strength) {
        super(health, strength);
        this.name=name
        // this.health=health,
        // this.strength=strength
    }

    

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage;
        let answer="";

        if (this.health > 0){
            answer= `${this.name} has received ${damage} points of damage`;
        } else {
            answer= `${this.name} has died in act of combat`;
        }
        return answer
    }

    battleCry(){
        return  "Odin Owns You All!";
    }
}



// Saxon


class Saxon extends Soldier {

    constructor (health, strength) {
        super(health, strength);
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage;
        let answer="";

        if (this.health > 0){
            answer= `A Saxon has received ${damage} points of damage`;
        } else {
            answer= `A Saxon has died in combat`;
        }
        return answer
    }

    battleCry(){
        return  "Odin Owns You All!";
    }
}

// War
class War {

    constructor () {
        this.vikingArmy=[],
        this.saxonArmy=[]
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack(){
        // let soldier1 = new Soldier(3,3)
        // let saxon1 = new Saxon(3,3)
        // let viking1 = new Viking('Odin',3,3);
        // console.log(lel);
        // viking1.receiveDamage(saxon1.strength);
        // this.saxonArmy.pop();
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);

        let randomViking =  this.vikingArmy[randomVikingIndex];
        let randomSaxon = this.saxonArmy[randomSaxonIndex];

        let attack = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0){
            this.saxonArmy.pop();
        }

           return attack
    }

    saxonAttack(){
        // this.vikingArmy.pop();
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);

        let randomViking =  this.vikingArmy[randomVikingIndex];
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        
        let attack = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0){
            this.vikingArmy.pop();
        }

           return attack
    }

    showStatus(){
        
        if (this.saxonArmy.length === 0)
            {return `Vikings have won the war of the century!`;}

        if (this.vikingArmy.length === 0) 
            {return `Saxons have fought for their lives and survive another day...`;}
      
        return "Vikings and Saxons are still in the thick of battle."
    }

    


}

