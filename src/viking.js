// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack = function(){
        return this.strength;
    }
    receiveDamage = function(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
   constructor(name, health, strength){
       super(health, strength);
       this.name = name;
   }
   receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;    
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = function(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;    
        }else if(this.health === 0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking = function(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon = function(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack = function(){
        let anyVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let anySaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)

        let theViking = this.vikingArmy[anyVikingIndex]
        let theSaxon = this.saxonArmy[anySaxonIndex]

        let damage = theSaxon.receiveDamage(theViking.strength)
        
        if(damage ="A Saxon has died in combat"){
            this.saxonArmy.splice(anySaxonIndex, 1)
        }
        return damage;
        }

    saxonAttack = function() {
        let anyVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let anySaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)

        let theViking = this.vikingArmy[anyVikingIndex]
        let theSaxon = this.saxonArmy[anySaxonIndex]

        let damage = theViking.receiveDamage(theSaxon.strength)
        if(damage.includes(`has died in act of combat`)){
            this.vikingArmy.splice(anyVikingIndex, 1)
        }
        return `${theViking.name} has received ${theSaxon.strength} points of damage`
    }

    showStatus = function(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}


