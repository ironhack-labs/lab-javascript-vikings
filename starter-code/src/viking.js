// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
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
        super(health, strength);
        this.name = name;
        
    }

    receiveDamage(damage){
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}   

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
        
    }

    receiveDamage(damage){
        this.health -= damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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
    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        if(randomSaxon.health <= randomViking.strength){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return randomSaxon.receiveDamage(randomViking.strength);
    }

    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        if(randomViking.health <= randomSaxon.strength){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return randomViking.receiveDamage(randomSaxon.strength);
    }

    showStatus(){
        if(this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survive another day...';
        if(this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
        if(this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) return 'Vikings and Saxons are still in the thick of battle.';
    } 
}
