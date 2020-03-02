// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}
// Viking
class Viking extends Soldier{
    constructor (name,health, strength){
        super(health,strength);
        this.name = name;
        
    }
    
    receiveDamage(damage){
        this.health = this.health - damage;
            if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
            } else {
                return `${this.name} has died in act of combat`;
            }
    };

    battleCry () {
            return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
        super(health,strength)

    }
    receiveDamage(damage){
        this.health = this.health - damage;
            if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
            } else {
                return `A Saxon has died in combat`;
            }
    }; 

}

// War
class War {


    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }


    addViking(Viking){ 
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    
    }

    vikingAttack() {
    let saxonRandom = Math.floor(Math.random()*this.saxonArmy.length)
    let vikingRandom = Math.floor(Math.random()*this.vikingArmy.length)
        const resultado = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength) 

        if(this.saxonArmy[saxonRandom].health <= 0){
            this.saxonArmy.splice(saxonRandom,1)
        }
        return resultado;
    }

    saxonAttack(){
        let saxonRandom = Math.floor(Math.random()*this.saxonArmy.length)
        let vikingRandom = Math.floor(Math.random()*this.vikingArmy.length)
        const resultado = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength) 
        
            if(this.vikingArmy[vikingRandom].health <= 0){
                this.vikingArmy.splice(vikingRandom,1)
            }
            return resultado;
        }

    showStatus(){

         if (this.saxonArmy.length===0){
            return `Vikings have won the war of the century!`;
        }else if (this.vikingArmy.length=== 0) { 
            return `Saxons have fought for their lives and survived another day...`;
        } 
            return `Vikings and Saxons are still in the thick of battle.`;
        

    };


};
    