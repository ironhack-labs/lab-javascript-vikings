// Soldier
function Soldier(health, strength) {
   this.health = health;
   this.strength = strength;
   this.attack = function(){
       return this.strength;
   } 
   this.recieveDamage = function(damage){
       this.health = health - damage;
   }
   
   
}


// Viking
function Viking(name, health, strength) {
    viking =  new Soldier(health, strength);
    viking.name = name;
    this.recieveDamage = function(damage){
        this.health -= damage;
        if(health <= 0){
            saxonArmy[saxonArmy.length -1].splice();
            return this.name +" has died in combat."
        }
        else{
            return this.name+ " recieves "+damage+" points of damage.";
        }
    }
    this.battleCry() = function(){
        return "ODIN CURSE YOU ALL";
    }    
    
}



// Saxon
function Saxon() {
    saxon = new Soldier(health, strength);
    saxon.recieveDamage = function(damage){
        this.health -= damage;
        if(health <= 0){
            "A saxon has died in battle";
        }
        else{
            vikingArmy[vikingArmy.length -1].splice();
            return "A saxon has recieved "+damage+" points of damage.";
        }
    }

}




// War
var vikingArmy = [];
var saxonArmy = [];

function War() {

    addViking = function(name){
        var count = 0;
        vikingArmy[count] = new Viking(name, Math.floor(Math.random()*6), Math.floor(Math.random()*6));
        count++;
    };
    addSaxon = function(name){
        var count = 0;
        saxonArmy[count] = new Saxon(name, Math.floor(Math.random()*6), Math.floor(Math.random()*3));
        count++;
    };

    saxonAttack = function(){
        vikingArmy[Math.floor(Math.random()*vikingArmy.length)].recieveDamag(Math.floor(math.random()*3));
    }
    vikingAttack = function(){
        saxonArmy[Math.floor(Math.random()*saxonArmy.length)].recieveDamag(Math.floor(math.random()*3));
    }
    showStatus = function(){

        console.log(war.vikingArmy);
        console.log(war.saxonArmy);
    
        if(vikingArmy.length > saxonArmy.length && saxonArmy.length == 0){
            return "The vikings win the war";
        }
        else if(vikingArmy.length < saxonArmy && vikingArmy.length == 0){
            return "The saxons win the war";
        }
        else{
            return "The battle is still raging";
        }
    }
    
        

}
var vikingsGame = new War();