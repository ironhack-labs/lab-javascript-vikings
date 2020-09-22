// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        this.attack = function () {
            return strength
        };
        this.receiveDamage = function (damage){
            this.health = health - damage
        }
  }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        this.receiveDamage = function (damage) {
            this.health = health - damage
            if (health > damage) {
                return `${this.name} has received ${damage} points of damage`
            } else {
                return `${this.name} has died in act of combat`
            }
        };
        this.battleCry = function () {
            return `Odin Owns You All!`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
        this.receiveDamage = function (damage) {
            this.health = health - damage
            if (health > damage) {
                return `A Saxon has received ${damage} points of damage`
            } else {
                return `A Saxon has died in combat`
            }
        };
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.addViking = function (Viking){
            this.vikingArmy.push(Viking)
        };
        this.addSaxon = function (Saxon){
            this.saxonArmy.push(Saxon)
        };

        this.vikingAttack = function (){
            
            let returnz = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
            if(this.saxonArmy[0].health > 0){
                return returnz
            } else {
                this.saxonArmy.shift()
                return returnz
            } 
        };

        this.saxonAttack = function () {
            let returnz = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
            if(this.vikingArmy[0].health > 0){
                return returnz
            } else {
                this.vikingArmy.shift()
                return returnz
            }
        };

        this.showStatus = function () {
            if(this.vikingArmy.length === 0){
                return `Vikings have won the war of the century!`
            } else if (this.saxonArmy.length === 0) {
                return `Saxons have fought for their lives and survived another day...`
            }
        }
       
        
        
    }
    
    

}
