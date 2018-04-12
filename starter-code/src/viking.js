// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health-damage;
}

// Viking
function Viking (name, health, strength, damage) {
    this.name = name;
    Soldier.call(this, health, strength);
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength, damage) {
    Soldier.call(this, health, strength);
    function attack(){
        return this.strength
    }
    function receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return "A Saxon has received", damage, "points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype = Object.create(Saxon.prototype)
War.prototype.constructor = War;
War.prototype = Object.create(Viking.prototype)
War.prototype.constructor = War;

War.prototype.addViking = function (viking){
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    let saxInd = Math.floor(Math.random()*this.saxonArmy.length);
    let randomSax = this.saxonArmy[saxInd];
    let randomVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let fight = randomSax.receiveDamage(randomVik.attack());

   if (randomSax.health <= 0) {
       this.saxonArmy.splice(saxInd);
   }
   return fight;
 }

 War.prototype.saxonAttack = function(){
    let saxInd = Math.floor(Math.random()*this.saxonArmy.length);
    let randomSax = this.saxonArmy[saxInd];
    let vikInd = Math.floor(Math.random()*this.vikingArmy.length)
    let randomVik = this.vikingArmy[vikInd];
    let fight = randomVik.receiveDamage(randomSax.attack());

   if (randomVik.health <= 0) {
       this.vikingArmy.splice(vikInd);
   }
   return fight;
 }

 War.prototype.showStatus = function(){
     if (this.vikingArmy.length > 0 && this.saxonArmy.length <= 0){
        return "Vikings have won the war of the century!";
     } else if (this.saxonArmy.length > 0 && this.vikingArmy.length <= 0){
         return "Saxons have fought for their lives and survive another day...";
     } else {
         return "Vikings and Saxons are still in the thick of battle.";
     }
 }