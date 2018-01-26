// Soldier
function Soldier(health,strength) {
    this.health=health;
    this.strength=strength;
}
Soldier.prototype.attack=function(){
    return this.strength;
}
Soldier.prototype.receiveDamage=function(theDamage){
    this.health=this.health-theDamage;
    return
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) { 
    this.name = name; 
    this.health = health;
    this.strength = strength;  
}
Viking.prototype.attack=function(){
    return this.strength;
}
Viking.prototype.receiveDamage=function(theDamage){
    this.health=this.health-theDamage;
    if (this.health > 0) {
        return this.name + " has received " + theDamage + " points of damage";
    }
    return this.name + " has died in act of combat"; 
}
Viking.prototype.battleCry=function() {
    return "Odin Owns You All!"

}
// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health,strength){
    this.strength=strength
    this.health=health
}

Saxon.prototype.attack=function(){
    return this.strength;
}
Saxon.prototype.receiveDamage=function(theDamage){
    this.health=this.health-theDamage;
    if (this.health > 0) {
        return  "A Saxon has received " + theDamage + " points of damage";
    }
    return  "A Saxon has died in combat"; 
}

// War
function randomSelector(array){
    return array[Math.floor(Math.random()*array.length)];
     }

function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    this.addViking=function(Viking){
        this.vikingArmy.push(Viking);
        return;
    }
    this.addSaxon=function(Saxon){
        this.saxonArmy.push(Saxon);
        return;
    }
    this.vikingAttack=function() {
        this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        if(this.saxonArmy[0].health<1){
            this.saxonArmy.splice(0,1)
            return "A Saxon has died in combat"
        }
         
    }

    this.saxonAttack=function() {
        this.panchito=randomSelector(this.vikingArmy);
        this.pepito=randomSelector(this.saxonArmy);
        this.vikingArmy[this.panchito].receiveDamage(this.saxonArmy[this.pepito].strength);

        if(this.vikingArmy[this.panchito].health1){
          this.nombre = [];
          this.nombre.push(this.vikingArmy[panchito].name); 
          this.vikingArmy.splice(this.panchito,1);
          return nombre[0] + " has died in act of combat";
        } else { return this.vikingArmy[this.panchito].name + " has received " + this.saxonArmy[this.pepito].strength + " points of damage";
               
        }  
    }
    }