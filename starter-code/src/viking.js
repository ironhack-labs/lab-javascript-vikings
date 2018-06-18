// Soldier
function Soldier(healthArg, strengthArg) {

    this.health=healthArg;
    this.strength=strengthArg;

}

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage  = function(damage) {
    this.health -= damage;
    
};

function Viking(name,health,strength) {
    
    Soldier.call(this,health,strength);
    this.name=name;
   
}
    




// Viking



Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage  = function(damage) {
    this.health -= damage;

    if (this.health>0){
        return this.name + " has received " + damage + " points of damage";
    }else {
        return this.name + " has died in act of combat";
    }
    
}

  Viking.prototype.battleCry=function(){
      return "Odin Owns You All!";
 };


// Saxon


Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health,strength) {
    
    Soldier.call(this,health,strength);
}

Saxon.prototype.receiveDamage  = function(damage) {
    this.health -= damage;

    if (this.health>0){
        return "A Saxon has received " + damage + " points of damage";
    }else {
        return "A Saxon has died in combat";
    }
    
}



// War
function War() {

    this.vikingArmy=[];
    this.saxonArmy=[];

}

War.prototype.addViking = function(vik) {
    
    this.vikingArmy.push(vik);

};

War.prototype.addSaxon = function(sax) {
    
    this.saxonArmy.push(sax);

};

War.prototype.vikingAttack = function() {
    
    var randV=Math.floor(Math.random() * (this.vikingArmy.length))  ;
    var randS=Math.floor(Math.random() * (this.saxonArmy.length))  ;
    var vik=this.vikingArmy[randV];
    var sax=this.saxonArmy[randS];
    var mess=sax.receiveDamage(vik.strength);
    if  (sax.health<=0){
        this.saxonArmy.splice(randS,1);

    }
    return mess;
};

War.prototype.saxonAttack = function() {
    
    var randV=Math.floor(Math.random() * (this.vikingArmy.length))  ;
    var randS=Math.floor(Math.random() * (this.saxonArmy.length))  ;
    var vik=this.vikingArmy[randV];
    var sax=this.saxonArmy[randS];
    var mess=vik.receiveDamage(sax.strength);
    if  (vik.health<=0){
        this.vikingArmy.splice(randV,1);

    }
    return mess;
};

War.prototype.showStatus=function(){

if (this.saxonArmy.length==0){
    return "Vikings have won the war of the century!";
}
else if (this.vikingArmy.length==0){
    return "Saxons have fought for their lives and survive another day...";
}

else if ((this.vikingArmy.length==1)&&(this.vikingArmy.length==1)){

    return "Vikings and Saxons are still in the thick of battle.";
}


}