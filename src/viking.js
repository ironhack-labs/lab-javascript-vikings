// Soldier
class Soldier {
    constructor (health, strength){
        this.health= health;
        this.strength= strength;
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
    constructor (name,health, strength){
    super (health,strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        } 
        else {
            return `${this.name} has died in act of combat`;
        }    
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
    super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health>0){
        return `A Saxon has received ${damage} points of damage`;
        } 
        else {
        return `A Saxon has died in combat`;
        }    
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []; 
    } 

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

//Attack
/*


    }

}

*/

    vikingAttack(){
        let resultWar;
        if(this.saxonArmy.length > 0 && this.vikingArmy.length >0){
            let i = Math.floor(Math.random()*this.vikingArmy.length);
            let randomSaxon = this.saxonArmy[i];
            let randomViking = this.vikingArmy [Math.floor(Math.random()*this.saxonArmy.length)];
            resultWar = randomSaxon.receiveDamage(randomViking.strength);
            if (randomSaxon.health<=0){
                this.randomViking.splice(i);
            }
        }
        return resultWar;
    }


    saxonAttack(){
        let resultWar;
        if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            let i = Math.floor(Math.random()*this.vikingArmy.length);
            let randomViking = this.vikingArmy[i];
            let randomSaxon = this.saxonArmy [Math.floor(Math.random()*this.saxonArmy.length)];
            resultWar = randomViking.receiveDamage(randomSaxon.strength);
            if(randomViking.health<=0){
                this.vikingArmy.splice(i);
            }
        }
        return resultWar;
        }
}

    showstatus(){

    }
