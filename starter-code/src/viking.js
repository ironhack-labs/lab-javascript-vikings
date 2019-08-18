
// Soldier
function Soldier (health, strength) {
    this.health = health
    this.strength = strength
    this.attack = function () {return this.strength}
    this.receiveDamage = function(damage){this.health -= damage}}

 Viking.prototype = Object.create(Soldier.prototype)
 Viking.prototype.constructor = Viking

 Saxon.prototype = Object.create(Soldier.prototype)
 Saxon.prototype.constructor = Saxon

 // Viking
 function Viking (name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name
    this.attack = function() {return this.strength}
    this.receiveDamage =function(damage){
    this.health -= damage
       if (this.health > 0) {return `${this.name} has received ${damage} points of damage`}
       else                 {return `${this.name} has died in act of combat`}}

    this.battleCry = function() {return `Odin Owns You All!`} }

//Saxon
function Saxon (health, strength) {
    this.health = health
    this.strength = strength
    this.attack = function () {return this.strength}
    this.receiveDamage =function(damage){
        this.health -= damage
            if (this.health > 0) {return `A Saxon has received ${damage} points of damage`}
            else                 {return `A Saxon has died in combat`}}
}

function War () {
    this.vikingArmy = []
    this.saxonArmy =  []
    this.addViking = function(viking) {     this.vikingArmy.push(viking) }
    this.addSaxon =  function(saxon ) {     this.saxonArmy.push(saxon  ) }
 
    this.vikingAttack = function(){
        let sax = Math.floor(Math.random() * this.saxonArmy.length)
        let vik = Math.floor(Math.random() * this.vikingArmy.length)
        this.health = this.saxonArmy[sax].receiveDamage(this.vikingArmy[vik].strength)

            if (this.health > 0) {this.saxonArmy.push(sax)} 
            else                 {this.saxonArmy.splice(sax)}
            return this.health}

    this.saxonAttack = function(){
        let sax = Math.floor(Math.random() * this.saxonArmy.length)
        let vik = Math.floor(Math.random() * this.vikingArmy.length)
        this.health = this.vikingArmy[vik].receiveDamage(this.saxonArmy[sax].strength)
        
            if (this.health > 0) {this.vikingArmy.push  (vik)   } 
            else                 {this.vikingArmy.splice(vik)   }
            return this.health}

    this.showStatus = function(){
        if      (this.saxonArmy.length  <= 0)   {return "Vikings have won the war of the century!"} 
        else if (this.vikingArmy.length <= 0)   {return "Saxons have fought for their lives and survive another day..."} 
        else if (this.saxonArmy.length    > 0 
                && this.vikingArmy.length > 0)   {return "Vikings and Saxons are still in the thick of battle."}
                                }
    
}

