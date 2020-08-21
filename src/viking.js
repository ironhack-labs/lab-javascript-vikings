

// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        this.attack.length 
        return this.strength

    }   
    receiveDamage(damage){
        this.health -= damage

    } 
    
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength)
        this.name = name
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
        
        if(this.health > 0){
            switch(damage){
                case 50:
                    return (`${this.name} has received 50 points of damage`);
                case 75:
                    return (`${this.name} has received 75 points of damage`);
            }
            
        }else {
            return (`${this.name} has died in act of combat`);
        }        
    }
    battleCry(){
        return "Odin Owns You All!"
    }
    
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            switch(damage){
                case 10:
                    return ('A Saxon has received 10 points of damage');
                case 45:
                    return ('A Saxon has received 45 points of damage');
            }
            
        }else {
            return ('A Saxon has died in combat');
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
         

    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
        
    }

    vikingAttack(){
        const randomViking= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];    
//RANDOMSAXON
        const damage =randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <=0) { 
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
        }
            return damage;
        
    }

    saxonAttack(){
        const randomViking= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]; 

        const damage = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
        }
        return damage;

    }


    showStatus(){
        let totalSaxon = this.saxonArmy.length
        let totalViking = this.vikingArmy.length



        if ( totalSaxon === 0){
            console.log("Vikings have won the war of the century!")
        }else if ( totalViking === 0){
            console.log("Saxons have fought for their lives and survived another day...")
        }else {
            if (totalSaxon != 0 && totalViking != 0){
                console.log("Vikings and Saxons are still in the thick of battle.")
            }
            
        }
    }





}
