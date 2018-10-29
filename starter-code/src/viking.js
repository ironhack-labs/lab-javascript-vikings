// Soldier
function Soldier(health,strength) {
    this.health= health;
    this.strength=strength;
    this.attack = function () {
    return this.strength;
    };
    this.receiveDamage = function(damage){
        this.health-=damage;
    };
};


// Viking
Viking.prototype=Object.create(Soldier.prototype);
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    this.attack = function () {
        return this.strength;
        };
    this.receiveDamage= function(damage){
        this.health-=damage;
        if (this.health>0){
            return this.name + " has received " +damage +" points of damage";
        }
        else{
            return this.name + " has died in act of combat";
        }
    };
    this.battleCry = function(){
        return "Odin Owns You All!"
    };
};

//Viking.prototype.constructor = Viking;

// Saxon
Saxon.prototype=Object.create(Soldier.prototype)
function Saxon(health,strength){
    Soldier.call(this,health,strength);
    this.attack = function () {
        return this.strength;
        };
    this.receiveDamage=function(damage){
        this.health-=damage;
        if (this.health>0){
            return "A Saxon has received " + damage + " points of damage";
        }
        else{
            return "A Saxon has died in combat";
        };
    };
};

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    this.addViking=function (viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon=function (saxon){
        this.saxonArmy.push(saxon);
    }
    this.vikingAttack=function(){

        var saxon = this.saxonArmy[[Math.floor(Math.random() *this.saxonArmy.length)]]
        var vikingStrength =this.vikingArmy[[Math.floor(Math.random() *this.vikingArmy.length)]].strength; 
        
       
        return saxon.receiveDamage(vikingStrength);
        }
    this.saxonAttack=function(){

        var saxonStrength= this.saxonArmy[[Math.floor(Math.random() *this.saxonArmy.length)]].strength;
        var viking=this.vikingArmy[[Math.floor(Math.random() *this.vikingArmy.length)]]
          
            
        return viking.receiveDamage(saxon);
    
        }
    

    this.showStatus=function(){
        if (this.saxonArmy.length===0 && this.vikingArmy.length>0){
           return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length===0 && this.saxonArmy.length>0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if (this.vikingArmy.length>0 && this.saxonArmy.length>0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
