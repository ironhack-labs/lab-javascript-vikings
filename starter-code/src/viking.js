// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength;
  };

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking(name,health,strength) {
    this.name = name;

    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.costructor = Viking;

Viking.prototype.attack = function(){
    return this.strength;
}

Viking.prototype.receiveDamage =  function(damage){

    this.health -= damage;

    if(this.health != 0){
        return this.name + ' has received ' + damage + ' points of damage';
    }else{
        return this.name + ' has died in act of combat'
    }
}

Viking.prototype.battleCry = function(){
    return 'Odin Owns You All!'
}



// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health,strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.costructor = Saxon;

Saxon.prototype.attack = function(){
    return this.strength;
}
Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;

    if(this.health != 0){
        return 'A Saxon has received ' + damage + ' points of damage';
    }else{
        return 'A Saxon has died in combat'
    }
}

// War
function War() {

    this.vikingArmy = [];
    this.saxonArmy = []; 

    this.addViking = function(vikingObject){
        this.vikingArmy.push(vikingObject);
    };
    this.addSaxon = function(saxonObject){
        this.saxonArmy.push(saxonObject);
    };
    this.vikingAttack = function(){
        var myViking = this.vikingArmy[0];
        var mySaxon = this.saxonArmy[0];

        mySaxon.receiveDamage(myViking.strength);

        if(mySaxon.health <= 0){
            this.saxonArmy.pop();
            return 'A Saxon has died in combat';
        }
    };
    this.saxonAttack = function(){
        var myViking = this.vikingArmy[0];
        var mySaxon = this.saxonArmy[0];

        myViking.receiveDamage(mySaxon.strength);

        if(myViking.health <= 0){

            this.vikingArmy.pop();
        }
        return  myViking.name + " has received " + mySaxon.strength + " points of damage";
    };
    this.showStatus = function (){
        
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survive another day...";
        }else if(this.saxonArmy.length != 0 && this.saxonArmy.length!=0){
            return "Vikings and Saxons are still in the thick of battle.";
        }

    };  
    
}