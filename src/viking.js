// Soldier
function Soldier(health,strength) {
    this.health=health;
    this.strength=strength;

    this.attack=function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
    }
}

// Viking

function Viking(name, health, strength) {
    
    Soldier.call(this, health,strength);
    this.name=name;

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
    }
    else{
        return `${this.name} has died in act of combat`;
    }
    
}
Viking.prototype.battleCry = function(){
    return `Odin Owns you All!!`;
}



// Saxon
function Saxon(health,strength){
    Soldier.call(this,health,strength);  
}


Saxon.prototype.receiveDamage = function (health,strength) {
    this.health -= damage;
    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
    }
    else{
        return `A Saxon has died in combat`;
    }

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon)
}

/*vikingAttack() method
A Saxon (chosen at random) has their receiveDamage() method called with 
the damage equal to the strength of a Viking (also chosen at random). T
his should only perform a single attack and the Saxon doesn't get to attack back.

should be a function
should receive 0 arguments
should make a Saxon receiveDamage() equal to the strength of a Viking
should remove dead saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking*/

War.prototype.vikingAttack= function(){
    let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
    let result = randomSaxon.receiveDamage(randomViking.strength);
    if(randomSaxon.health <= 0){
        this.saxonArmy.splice(this.saxonArmy[randomSaxon],1);
    }
    return result;
}

War.prototype.saxonAttack= function(){
    let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health <= 0){
        this.vikingArmy.splice(this.vikingArmy[randomViking],1);
    }
    return result;
}

War.prototype.showStatus= function(){

    if(this.saxonArmy.length && this.vikingArmy.length === 1){
        return `Vikings and Saxons are still in the thick of battle.`
    }
  else if(this.saxonArmy.length === 0){
      return`Vikings have won the war of the century!`;
  }
  else if(this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day..`
  }
}