// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength
    };
    attack(){
        return this.strength
    };
    receiveDamage(damage){
        this.health = this.health - damage
        return
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    };
    receiveDamage(damage){
        this.health =  this.health - damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    };
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    };
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    randomViking = Math.round(Math.random() * this.vikingArmy.length);
    randomSaxon = Math.round(Math.random() * this.saxonArmy.length);

    addViking(Viking){
        this.vikingArmy.push(Viking)
        return
    };
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
        return
    };
    vikingAttack(){
        let result = this.saxonArmy[this.randomSaxon].receiveDamage(this.vikingArmy[this.randomViking].strength)
        if (this.saxonArmy[this.randomSaxon].health <= 0){
            this.saxonArmy.splice(this.randomSaxon,1)
        }
        return result
    };
    saxonAttack(){
        let result = this.vikingArmy[this.randomViking].receiveDamage(this.saxonArmy[this.randomSaxon].strength)
        if (this.vikingArmy[this.randomViking].health <= 0){
            this.vikingArmy.splice(this.randomViking, 1)
        }
        return result
    };
    showStatus(){

        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } 
        
        return "Vikings and Saxons are still in the thick of battle." 
    }
}
