// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function(){
        return this.strength
    }
   
    this.receiveDamage = function(damage) {
    this.health -= damage 
    }
    
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    this.name = nameArg;
    Soldier.call(this, healthArg, strengthArg);
    this.health = healthArg;
    this.strength = strengthArg;
  
    this.receiveDamage = function(damage){
      
        this.health = this.health - damage
        if (this.health > 0){
        return this.name + " has received " + damage + " points of damage"
        }
        return this.name + " has died in act of combat"
        }   
    
    this.battleCry = function(){
        return ("Odin Owns You All!");
    }

}
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking;   // overwrite Player constructor so all instances come from this function


// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.health = healthArg;
    this.strength = strengthArg;

    this.receiveDamage = function (damage){
        this.health = this.health - damage
        if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage"    
        }
        return "A Saxon has died in combat"
    }
}
Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;   // overwrite Player constructor so all instances come from this function

// War
function War() {

    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(viking){
     
        this.vikingArmy.push(viking);
    }

    this.addSaxon = function(saxon){
        
        this.saxonArmy.push(saxon);

    }

    this.vikingAttack = function(){
        var numSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        var numVik = Math.floor(Math.random() * this.vikingArmy.length)

        var sentence = this.saxonArmy[numSaxon].receiveDamage(this.vikingArmy[numVik].strength)

        for (var i=0; i<this.saxonArmy.length; i++){

            if(this.saxonArmy[i].health <= 0) {
                
                this.saxonArmy.splice(i,1)

            }
        }
    return sentence
    }

    this.saxonAttack = function(){

        var numSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        var numVik = Math.floor(Math.random() * this.vikingArmy.length)

        var sentence = this.vikingArmy[numVik].receiveDamage(this.saxonArmy[numSaxon].strength)
    

        for (var i=0; i<this.vikingArmy.length; i++){

            if(this.vikingArmy[i].health <= 0) {
                
                this.vikingArmy.splice(i,1)

            }
        }

        return sentence

    }

    this.showStatus = function(){
        if(this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } 
        return "Vikings and Saxons are still in the thick of battle."

    }


}


