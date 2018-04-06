// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength= strength;
    this.attack= function(){
      return this.strength
    }
    this.receiveDamage= function(damage){
      this.health -= damage;
    }
  }
  
  // Viking
  function Viking(name,health,strength) {
    this.name = name;
    Soldier.call(health,strength);
    this.receiveDamage = function (damage){
      this.health -= damage;
      if(this.health>0){
        console.log(name + " has received " + damage + " points of damage")
      }else{
        console.log(name + " has died in act of combat")
    }
  }
    this.battleCry = function(){
      return "Odin Owns You All!";
    }
  }
  
  // Saxon
  function Saxon(health,strength) {
    Soldier.call(health,strength);
    this.receiveDamage = function(damage){
      this.health -= damage;
      if(this.health>0){
        console.log("A Saxon has received " + damage + " points of damage")
      }else{
        console.log("A Saxon has died in combat")
      }
    }
  }
  
  var soldadito = new Soldier (100,8)
  var vikinguito = new Viking ("vikinguito",100,9)
  var saxonito = new Saxon (100,6)
  
  console.log(soldadito)
  console.log (vikinguito)
  console.log(saxonito)
  