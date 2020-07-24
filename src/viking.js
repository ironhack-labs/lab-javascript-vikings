// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength ;
    }

    receiveDamage(damage){
        this.health -=  damage;
    }
}

// Viking
class Viking  extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -=  damage;

        if (this.health <= 0 ){
            return  `${this.name} has died in act of combat`; 
        } else {
            return  `${this.name} has received ${damage} points of damage`; 
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(name, health, strength){
        super(name, health, strength);
    }

    receiveDamage = function(damage){
        this.health -=  damage;

        if (this.health <= 0 ){
            return  `A Saxon has died in combat`; 
        } else {
            return  `A Saxon has received ${damage} points of damage`; 
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy  = [];
        this.saxonArmy  = [];
    };

    addViking(Viking){
        this.vikingArmy.push(Viking);
    };

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);

    };

    vikingAttack = function(){
        const min = 0;
        const max = this.saxonArmy.length;        
        let randomSaxon = Math.floor(Math.random() * (max - min)) + min;

        const max2 = this.vikingArmy.length;        
        let randomViking = Math.floor(Math.random() * (max2 - min)) + min;
        
        let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon,1);
        }

        return result;
    };

    saxonAttack(){
        const min = 0;
        const max = this.saxonArmy.length;        
        let randomSaxon = Math.floor(Math.random() * (max - min)) + min;

        const max2 = this.vikingArmy.length;        
        let randomViking = Math.floor(Math.random() * (max2 - min)) + min;
        
        //let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking,1);
        }

        return result;
    };

    showStatus(){
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...';
        }else if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    };
}
