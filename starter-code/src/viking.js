// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () {
        return this.strength;
      }
      this.receiveDamage = function(damage){
          this.health -= damage;
      }
}

// Viking
// var Viking = new Soldier(health,strength);
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name = name;
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        } else if (this.health <= 0){
            return this.name + " has died in act of combat";
        }
    }
    this.battleCry = function(){
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        } else if (this.health <= 0){
            return "A Saxon has died in combat";
        }
    }
}
Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (viking){
        this.vikingArmy.push(viking);
    };
    this.addSaxon = function (saxon){
        this.saxonArmy.push(saxon);
    };
    this.vikingAttack = function(){
        ranSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        ranViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));

        result = this.saxonArmy[ranSaxon].receiveDamage(this.vikingArmy[ranViking].strength);

        if(this.saxonArmy[ranSaxon].health <= 0){
            this.saxonArmy.splice(ranSaxon,1);
        }
        return result;
    };
    this.saxonAttack = function(){
        ranSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        ranViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));

        result = this.vikingArmy[ranViking].receiveDamage(this.saxonArmy[ranSaxon].strength);

        if(this.vikingArmy[ranViking].health <= 0){
            this.vikingArmy.splice(ranViking,1);
        }
        return result;
    };
    this.showStatus = function(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        };
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        };
        if(this.saxonArmy.length === this.vikingArmy.length){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
}
