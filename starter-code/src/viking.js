// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
    }
    Soldier.prototype.receiveDamage = function(damage){
        this.health -= damage; 
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function(damage){
        this.health -= damage; 
    
        if (this.health > 0) {
            return (this.name + " has received " + damage + " points of damage")
        } else {
            return (this.name + " has died in act of combat")
        }
    }

    this.battleCry = function(){
        return("Odin Owns You All!");
    }

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.health = health;
    this.strength = strength;
    this.receiveDamage = function(damage){
        this.health -= damage; 
    
        if (this.health > 0) {
            return ("A Saxon has received " + damage + " points of damage")
        } else {
            return ("A Saxon has died in combat")
        }
    }

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}


War.prototype.vikingAttack = function(){

    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var fight = randomSaxon.receiveDamage(randomViking.attack());
      
        if (randomSaxon.health <= 0) {
           this.saxonArmy = this.saxonArmy.filter(function (item) {
        return item !== randomSaxon;
           })
       }
       return fight;
     }
    
    War.prototype.saxonAttack = function(){
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var fight = randomViking.receiveDamage(randomSaxon.attack());
      
        if (randomViking.health <= 0) {
           this.vikingArmy = this.vikingArmy.filter(function (item) {
        return item !== randomViking;
           })
       }
       return fight;
    }
    
    War.prototype.showStatus = function (){
        if (this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


