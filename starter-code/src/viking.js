// Soldier
function Soldier (health, strength) {
    this.health = health; 
    this.strength = strength; 
    this.attack =  function attack() {
        return this.strength; 
    }

    this.receiveDamage = function (damage){
        this.health -= damage; 
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// // Viking
function Viking (name,health,strength) {
    Soldier.call(this, name,health,strength);
    this.name = name; 
    this.strength = strength;
    this.health = health;
    this.receiveDamage = function (damage){
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    this.battleCry = function () {
        return 'Odin Owns You All!'
    }
   
    };

    Saxon.prototype = Object.create(Soldier.prototype);

// // Saxon
function Saxon (health,strength) {
    Soldier.call(this,health,strength);
    this.strength = strength; 
    this.health = health;
    
    this.receiveDamage = function (damage){
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return 'A Saxon has died in combat';
        }
    }

}

// // War
function War () {

     this.vikingArmy = [];
     this.saxonArmy = [];

     this.addViking = function (Viking) {
     this.vikingArmy.push(Viking);
     }
     
     this.addSaxon = function (Saxon) {
     this.saxonArmy.push(Saxon);
     }

     //funciones ataque

     function random (army){
         return Math.floor(Math.random() * army.length)
     }

     this.vikingAttack = function () {
         
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        var result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxon, 1)
        };
        return result; 
        
  }

    this.saxonAttack = function () {
         
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        var result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomViking,1)
        };
       return result; 

}


    this.showStatus = function () {
        if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survive another day...';
        } else if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }





}
