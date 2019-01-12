// Soldier
function Soldier (healthArg, strengthArg) {

    this.health = healthArg
    this.strength = strengthArg
    
    this.attack = function (){
        return this.strength;
    }

    this.receiveDamage = function(damage) {
        this.health -= damage;
    }

}


// Viking
function Viking(nameArg, healthArg, strengthArg) {
    
    Soldier.call(this, healthArg, strengthArg)

    this.name = nameArg;
    this.receiveDamage = function (damage){

        this.health -= damage; 
            if (this.health > 0) {
                return this.name+" has received " +damage+" points of damage"
                
            } else {
                console.log(this.name+" has died in act of combat")
                return this.name+" has died in act of combat"
                
            }

    }   
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon(healthArg, strengthArg) {

    Soldier.call(this, healthArg, strengthArg)

    this.receiveDamage = function (damage){

        this.health -= damage; 
            if (this.health > 0) {
                return "A Saxon has received " +damage+ " points of damage"
                
            } else {
                console.log(this.name+" has died in act of combat")
                return "A Saxon has died in combat"
                
            }

    }   
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {

    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = function(viking){

        this.vikingArmy.push(viking)
    }
    this.addSaxon = function(saxon){

        this.saxonArmy.push(saxon)
    }
    this.vikingAttack = function() {

        indexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        var saxonRandom = this.saxonArmy[indexSaxon]
        
        indexViking = Math.floor(Math.random()*this.vikingArmy.length)
        var vikingRandom = this.vikingArmy[indexViking]

        var mensaje = saxonRandom.receiveDamage(vikingRandom.strength)

        if (saxonRandom.health<=0) {

            this.saxonArmy.splice(indexSaxon, 1)

        } 

        return mensaje;
        
    }

    this.saxonAttack = function() {

        indexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        var saxonRandom = this.saxonArmy[indexSaxon]
        
        indexViking = Math.floor(Math.random()*this.vikingArmy.length)
        var vikingRandom = this.vikingArmy[indexViking]

        var mensaje = vikingRandom.receiveDamage(saxonRandom.strength)
        
        if (vikingRandom.health<=0) {

            this.vikingArmy.splice(indexSaxon, 1)

        } 

        return mensaje;
    }

    this.showStatus = function(){

        if (this.vikingArmy.length === 0){

            return "Saxons have fought for their lives and survive another day..."

        } 

        if (this.saxonArmy.length === 0) {

            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 1 && this.saxonArmy.length ===1) {

            return "Vikings and Saxons are still in the thick of battle."

        }
       

    }





}

