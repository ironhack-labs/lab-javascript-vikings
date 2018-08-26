// Soldier
function Soldier(health,strengh) {
    this.health=health;
    this.strengh=strengh;
    }
    Soldier.prototype.attack=function(){
        return this.strengh;
    }
    Soldier.prototype.receiveDamage=function(damage){
        this.health=this.health-damage;
    }
    // Viking
    function Viking(health,strengh,name) {
        Soldier.call(this,health,strengh);
        this.name=name;
    }
    Viking.prototype=Object.create(Soldier.prototype);
    Viking.prototype.battleCry=function(){
        return "Odin Owns You All!";
    }
    
    
    // Saxon
    function Saxon(health,strengh) {
        Soldier.call(this,health,strengh);
    }
    Saxon.prototype=Object.create(Soldier.prototype);
    Saxon.prototype.receiveDamage=function(damage){
        this.damage=damage;
        this.health=this.health-this.damage;
        if(this.health>0){
            return "A Saxon has received " + this.damage + " points of damage";
        }
        else{
            return "A Saxon has died in combat";
        }
    }
    
    
    
    // War
    function War() {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    
    War.prototype.addViking=function(viking){
        this.vikingArmy.push(viking);
    }
    
    War.prototype.addSaxon=function(saxon){
        this.saxonArmy.push(saxon);
    }
    
    War.prototype.vikingAttack=function(){
        if(this.vikingArmy.length==0 || this.saxonArmy.length==0){
          return Army.showStatus();
        }
        var randomNumberViking=Math.floor(Math.random()*(this.vikingArmy.length));
        var randomNumberSaxon=Math.floor(Math.random()*(this.saxonArmy.length));
        var chosenViking=this.vikingArmy[randomNumberViking];
        var chosenSaxon=this.saxonArmy[randomNumberSaxon];
        if(this.saxonArmy.length>0 && this.vikingArmy.length>0){
            chosenSaxon.receiveDamage(chosenViking.strengh);
        if(chosenSaxon.health<=0){
              this.saxonArmy.splice(randomNumberSaxon,1);
              console.log("A saxon has died");
              console.log(Army);
              return Army.showStatus();
            }
        }
        if(this.vikingArmy.length==0 || this.saxonArmy.length==0){
          return Army.showStatus();
        }
    }
    War.prototype.saxonAttack=function(){
        var randomNumberViking=Math.floor(Math.random()*(this.vikingArmy.length));
        var randomNumberSaxon=Math.floor(Math.random()*(this.saxonArmy.length));
        var chosenViking=this.vikingArmy[randomNumberViking];
        var chosenSaxon=this.saxonArmy[randomNumberSaxon];
        if(this.saxonArmy.length>0 && this.vikingArmy.length>0){
            chosenViking.receiveDamage(chosenSaxon.strengh);   
        if(chosenViking.health<=0){
              this.vikingArmy.splice(randomNumberViking,1);
              console.log("A viking has died");
              console.log(Army);
              return Army.showStatus();
            }
        }
        if(this.vikingArmy.length==0 || this.saxonArmy.length==0){
          return Army.showStatus();
        }
    }
    
    War.prototype.showStatus=function(){
        if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
    //Probar juego
    var vikingo1=new Viking(50,25,"1");
    var vikingo2=new Viking(50,25,"2");
    var vikingo3=new Viking(50,25,"3");
    var vikingo4=new Viking(50,25,"4");
    var saxon1=new Saxon(40,20);
    var saxon2=new Saxon(40,20);
    var saxon3=new Saxon(40,20);
    var saxon4=new Saxon(40,20);
    var Army=new War();
    Army.addViking(vikingo1);
    Army.addViking(vikingo2);
    Army.addViking(vikingo3);
    Army.addViking(vikingo4);
    Army.addSaxon(saxon1);
    Army.addSaxon(saxon2);
    Army.addSaxon(saxon3);
    Army.addSaxon(saxon4);
