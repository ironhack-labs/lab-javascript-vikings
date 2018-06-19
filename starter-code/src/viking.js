// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

}

// Viking
function Viking (nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


// Saxon
function Saxon(healthArg, strengthArg) { 
    Soldier.call(this, healthArg, strengthArg);

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



Soldier.prototype.attack = function() {
    return this.strength;

}


Soldier.prototype.receiveDamage = function(theDamage) {
    this.health = this.health-theDamage;

}


Viking.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;
    if (this.health<=0) {
        return (this.name + " has died in act of combat");
    }
    else
    {
        return (this.name + " has received " + Number(theDamage) + " points of damage")
    }

}


Viking.prototype.battleCry = function() {
    return ("Odin Owns You All!");

} 


Saxon.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;
    if (this.health<=0) {
        return ("A Saxon has died in combat");
    }
    else
    {
        return ("A Saxon has received " + Number(theDamage) + " points of damage")
    }

}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}


War.prototype.addViking = function (oneViking) {
    this.vikingArmy.push(oneViking);
}

War.prototype.addSaxon = function (oneSaxon) {
    this.saxonArmy.push(oneSaxon);
}


War.prototype.vikingAttack = function () {
    
    var vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    var saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    var someViking = this.vikingArmy[vikingIndex];
    var someSaxon = this.saxonArmy[saxonIndex];
    

    var result = someSaxon.receiveDamage(someViking.attack());
    if (someSaxon.health <=0) {
        this.saxonArmy.splice(saxonIndex,1);
    }
    else { 
        return result;

    }
    
}  


War.prototype.saxonAttack = function () {
    
    var vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    var saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    var someViking = this.vikingArmy[vikingIndex];
    var someSaxon = this.saxonArmy[saxonIndex];

    var result = someViking.receiveDamage(someSaxon.attack());
    if (someViking.health <=0) {
        this.vikingArmy.splice(vikingIndex,1);
    }
    else { 
        return result;

    }
    
}  


   

War.prototype.showStatus = function () {
    if (this.vikingArmy.length === 0 ) {
        return ("Saxons have fought for their lives and survive another day...");
    }
    if (this.saxonArmy.length  === 0) {
        return ("Vikings have won the war of the century!");
    }
    else {
        return ("Vikings and Saxons are still in the thick of battle.");
    }
       
  

}



    // switch (this.War) {
    //     case this.vikingArmy.length !==0 && this.saxonArmy.length !==0 :
    //       return ("Vikings and Saxons are still in the thick of battle.");
    //       break;
    //     case this.vikingArmy.length == 0:
    //      return ("Saxons have fought for their lives and survive another day...");
    //      break;
    //     case this.saxonArmy.length == 0 :    
    //         return ("Vikings have won the war of the century!");  
    //   }






