// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            console.log(this.name + " has received " + damage + " points of damage")
        }else{
            console.log(this.name + " has died in act of combat");
            
        }
    }

}

function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            console.log("A Saxon has received " + damage + " points of damage")
        }else{
            console.log("A Saxon has died in combat");
        }

    }
}

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(){
        //Viking.call(this, name, health, strength);
        var Hugo = new Viking('Hugo',100,50); 
        this.vikingArmy.push(Hugo);
    }
    this.addSaxon = function(){
      var saxon = new Saxon(100,50); 
        this.saxonArmy.push(saxon);
    } 
    this.vikingAttack =  function(){
        var contaSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randsaxon = this.saxonArmy[contaSaxon];
        var contaViking = Math.floor(Math.random()*this.vikingArmy.length);
        var randviking = this.vikingArmy[contaViking];
        randsaxon.receiveDamage(randviking.strength);
        if(randsaxon.health <= 0){
          this.saxonArmy.splice(contaSaxon,1);
          console.log(this.saxonArmy);
        }
        
    }
    this.saxonAttack = function(){
        var contaSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randsaxon = this.saxonArmy[contaSaxon];
        var contaViking = Math.floor(Math.random()*this.vikingArmy.length);
        var randviking = this.vikingArmy[contaViking];
        randviking.receiveDamage(randsaxon.strength);
        if(randviking.health <= 0){
          this.vikingArmy.splice(contaViking,1);
          console.log(this.vikingArmy);
        } 
    }
    this.showStatus = function(){
      if (this.vikingArmy.length === 0){
        console.log("Saxons have fought for their lives and survive another day...")
      }else if(this.saxonArmy.length === 0){
        console.log("Vikings have won the war of the century!")
      }else if(this.vikingArmy == 1 && this.saxonArmy == 1){
        console.log("Vikings and Saxons are still in the thick of battle.");
      }
    }
}

var juego = new War();

juego.addViking();
juego.addSaxon();
juego.saxonAttack();
juego.saxonAttack();
juego.showStatus();



