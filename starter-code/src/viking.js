// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    
    this.attack = function (){
        return this.strength;
    }
    
    //should remove the received damage from the health property
    this.receiveDamage = function (damage) {
    this.health -= damage;
    }
    }
    
    // Viking
    
    Viking.prototype = Object.create(Soldier.prototype);
    Viking.prototype.constructor = Viking;
    
    
    function Viking(name, healthArg, strengthArg) {
        this.name = name;
        
        //repetir this.health e strength não é enganar o Jasmine?
        this.health = healthArg;
        this.strength = strengthArg;
        
        //Qual a necessidade? pq se retirar roda.
        Soldier.call (healthArg, strengthArg);
        
        
        this.battleCry = function battleCry () {
            return 'Odin Owns You All!'
        }
        
        this.attack = function (){
            return this.strength;
        }
        
        this.receiveDamage = function (damage) {
            this.health -= damage;
            if (this.health > 0) {
                return `${name} has received ${damage} points of damage`;
            } else {
                return `${name} has died in act of combat`
            }
    
        }
    
    }
    
    // Saxon
    
    Saxon.prototype = Object.create (Soldier.prototype);
    Saxon.prototype.constructor = Saxon;
    
    
    function Saxon (healthArg, strengthArg) {
        
        //repetir this.health e strength não é enganar o Jasmine?
        this.health = healthArg;
        this.strength = strengthArg;
    
        //Qual a necessidade? pq se retirar roda.
        Soldier.call (healthArg, strengthArg);
    
    
        this.battleCry = function battleCry () {
            return 'Odin Owns You All!'
        }
    
        this.attack = function (){
            return this.strength;
        }
    
        this.receiveDamage = function (damage) {
            this.health -= damage;
            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`;
            } else {
                return 'A Saxon has died in combat';
            }
    
        }
    
    }
    
    
    // War
    function War() {
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.addViking = function (Viking) {
            this.vikingArmy.push(Viking);
            //mais de um Viking ?
            //for (let i = 0; i < 10; i++) {
               // Viking[i].push();
        };
        
        this.addSaxon = function (Saxon) {
            this.saxonArmy.push(Saxon);
            //for (let i = 0; i < 5; i++) {
            //Saxon[i].push();
        };
        
        this.vikingAttack = function() {
            var saxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))];
            var viking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))];
       
             var totalDamage = saxon.receiveDamage(viking.strength);
       
             if(saxon.health <= 0) {
                var index = this.saxonArmy.indexOf(saxon);
                this.saxonArmy.splice(index,1);
            }
            return totalDamage;
        }
        this.saxonAttack = function() {
            var saxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))];
            var viking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))];
       
             var totalDamage = viking.receiveDamage(saxon.strength);
       
             if(viking.health <= 0) {
                var index = this.vikingArmy.indexOf(viking);
                this.vikingArmy.splice(index,1);
            }
            return totalDamage;
        }
        
        this.showStatus = function () {
        
            if(this.saxonArmy.length === 0 && this.vikingArmy.length > 0){
                return 'Vikings have won the war of the century!' 
            }
            if(this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
                return 'Saxons have fought for their lives and survive another day...'
            } else {
                return 'Vikings and Saxons are still in the thick of battle.'
            }
    
    
        };
    }
    