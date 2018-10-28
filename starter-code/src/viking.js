// Soldier
class Soldier{
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){return this.strength}
    receiveDamage(damage) {this.health = this.health - damage}   
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        }
        else {return this.name + " has died in act of combat"}
        }
    battleCry() {return "Odin Owns You All!"}
    }
 


// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super (health, strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage"
        }
        else {return "A Saxon has died in combat"}
    }

}

// War
class War {
    constructor (){
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
        var randomSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        var randomViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        var result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        
        this.saxonArmy = this.saxonArmy.filter(function(Saxon){
            return Saxon.health > 0;
        })
        return result;
        }

    saxonAttack(){
        var randomSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        var randomViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        var result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        
        this.vikingArmy = this.vikingArmy.filter(function(Viking){
            return Viking.health > 0;
        })
        return result;
        }
    
    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        };
    }
}
