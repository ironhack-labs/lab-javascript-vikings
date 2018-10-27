// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    
}
Soldier.prototype.attack = function attack(){
    return this.strength; 
}  
Soldier.prototype.receiveDamage= function receiveDamage(damage){
    this.health -= damage;
}
//if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name;
    
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function receiveDamage(damage){
   this.health -= damage
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage"
    }
    else{
        return this.name + " has died in act of combat"
    }
}
Viking.prototype.battleCry = function battleCry(){
    return "Odin Owns You All!"
}


// Saxon

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health,strength) {
Soldier.call(this, health, strength)
    }
Saxon.prototype.receiveDamage = function receiveDamage(damage){
    this.health -= damage
     if (this.health > 0){
         return "A Saxon has received " + damage + " points of damage"
     }
     else{
         return "A Saxon has died in combat"
     }
 }

// War

function War() {
this.vikingArmy = []
this.saxonArmy = []
}

War.prototype.addViking =function addViking(Viking){
    this.vikingArmy.push(Viking)
}
War.prototype.addSaxon = function addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}



War.prototype.vikingAttack= function vikingAttack(){
    var chooseSaxonRandom= Math.floor(Math.random() * this.saxonArmy.length)
    var chooseVikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
    var result= this.saxonArmy[chooseSaxonRandom].receiveDamage(this.vikingArmy[chooseVikingRandom].attack())

        if(this.saxonArmy[chooseSaxonRandom].health < 1) {
            this.saxonArmy.splice(chooseSaxonRandom, 1)
        }
return result
}

War.prototype.saxonAttack= function saxonAttack(){
    var chooseSaxonRandom= Math.floor(Math.random() * this.saxonArmy.length)
    var chooseVikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
    var result = this.vikingArmy[chooseVikingRandom].receiveDamage(this.saxonArmy[chooseSaxonRandom].attack())

        if(this.vikingArmy[chooseVikingRandom].health < 1){
            this.vikingArmy.splice(chooseVikingRandom, 1)
        }
    return result
}
War.prototype.showStatus= function showStatus(){
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day..."
    }
    else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
        return "Vikings and Saxons are still in the thick of battle."
    }
}



