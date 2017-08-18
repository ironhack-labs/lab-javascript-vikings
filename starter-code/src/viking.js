// Soldier
function Soldier (health,strength) {
  this.health=health
  this.strength=strength
  this.attack = function(){
   return this.strength;
  }
  this.receiveDamage = function(damage){
    this.health -= damage


  }
}



// Viking
Viking.prototype=Object.create(Soldier.prototype)
function Viking (name,health,strength) {
  this.name= name 


}

// Saxon
function Saxon () {}

// War
function War () {}
