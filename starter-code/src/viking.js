// Soldier
function Soldier(health,strength) {
    this.health=health;
    this.strength=strength;
}
Soldier.prototype.attack = function (){
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
}

// Viking

function Viking(name,health,strength) {
     Soldier.call(this,health,strength);
    // console.log(this)
     this.name= name;
}

Viking.prototype = Object.create (Soldier.prototype);
Viking.prototype.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health>0){
        return this.name+ " has received "+damage+" points of damage"
    }else {
        return this.name+ " has died in act of combat"
    }
};
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
};


// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);
   // console.log(this
}
Saxon.prototype = Object.create (Soldier.prototype);
Saxon.prototype.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health>0){
        return "A Saxon has received " + damage + " points of damage"
    }
    else {
        return "A Saxon has died in combat"
    }
};

// War
function War() {
    this.vikingArmy =[];
    this.saxonArmy = [];
}
War.prototype.addViking = function(viking){
this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
    };
War.prototype.vikingAttack = function(){
    var indS = Math.floor((Math.random()*this.saxonArmy.length));
    var indV = Math.floor((Math.random()*this.vikingArmy.length));
    var s = this.saxonArmy[indS];
    var v = this.vikingArmy[indV];
    var result =s.receiveDamage(v.attack());
    s.receiveDamage(v.attack());
    if (s.health<0){
        this.saxonArmy.splice(indS,1);
    }
    return result;
}

War.prototype.saxonAttack = function(){
    var indS = Math.floor((Math.random()*this.saxonArmy.length));
    var indV = Math.floor((Math.random()*this.vikingArmy.length));
    var s = this.saxonArmy[indS];
    var v = this.vikingArmy[indV];
    var result =v.receiveDamage(s.attack());
    v.receiveDamage(s.attack());
    if (v.health<0){
        this.vikingArmy.splice(indV,1);
    }
    return result;
}

War.prototype.showStatus= function(){
    if (this.saxonArmy=[]){
        return "Vikings have won the war of the century!"
    }else if (this.vikingArmy=[]){
        return "Saxons have fought for their lives and survive another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }  
}


