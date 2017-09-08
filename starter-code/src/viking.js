// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health=this.health-damage;
  };
}


// Viking
function Viking (name,health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health=this.health-damage;
    if (this.health>0) {
      console.log(this.name + " has received " + damage + " points of damage");}
      else {
        console.log(this.name + " has died in act of combat");}
      };
      this.battleCry = function(){
        console.log("Odin Own You All !");
      };
    }
    Viking.prototype = Object.create(Soldier.prototype);



    function Saxon (health,strength) {
      Soldier.call(this, health, strength);
      this.receiveDamage = function(damage){
        this.health=this.health-damage;
        if (this.health>0) {
          console.log(" A saxon has received " + damage + " points of damage");}
          else {
            console.log(" A saxon has died in act of combat");}
          };
        }
        Saxon.prototype = Object.create(Soldier.prototype);


        // War
        function War () {
        var nbvikingarmy = vikingArmy ();
        var nbsaxonarmy = saxonArmy ();

        this.addViking = addViking(Viking);
        this.addSaxon = addSaxon();
        this.vikingAttack = vikingAttack();
        this.saxonAttack = saxonAttack();
        this.showStatus = showStatus();
        }



        var mySaxon = new Saxon(150, 56);
        var mySoldier = new Soldier(100, 42);
        var myViking = new Viking("Thor", 200, 30);
