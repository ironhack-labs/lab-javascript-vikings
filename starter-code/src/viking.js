// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function(){
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
    return this.receiveDamage = undefined;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype.attack = function(){
    return this.strength;
}
Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage`;
        } else {
          return `${this.name} has died in act of combat`;
        }
        return this.receiveDamage;
};
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
};
// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype.attack = function(){
        return this.strength;
}
Saxon.prototype.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(viking){
        //should add the received Viking to the army
        this.vikingArmy.push(viking);
        //shouldn't return anything
        return addViking = undefined;
    };
    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
        return addSaxon = undefined;
    };
    this.vikingAttack = function(){
        //get a random sanxon from saxon army array
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let attackOfViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].attack();
        //should make Saxon receiveDamage() equal to the strength of a Viking
        let result = this.saxonArmy[randomSaxon].receiveDamage(attackOfViking); 
         //should remove dead saxons from the army
        if (this.saxonArmy[randomSaxon].health <= 0) {
          this.saxonArmy.splice(randomSaxon, 1); 
        }
        return result;
    }
    this.saxonAttack = function(){
        //get a random sanxon from saxon army array
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let attackOfSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].attack();
        //should make Saxon receiveDamage() equal to the strength of a Viking
        let result = this.vikingArmy[randomViking].receiveDamage(attackOfSaxon); 
         //should remove dead saxons from the army
        if (this.vikingArmy[randomViking].health <= 0) {
          this.vikingArmy.splice(randomViking, 1);
        }
        return result;
    }
    this.showStatus = function (){
        if( this.saxonArmy <= 0){
            return `Vikings have won the war of the century!`
        }else if (this.vikingArmy <= 0){
            return `Saxons have fought for their lives and survive another day...`
        }else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
};
