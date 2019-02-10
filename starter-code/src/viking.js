// Soldier
function Soldier(health,strength){
    this.health=health;
    this.strength=strength;
    this.attack= function attack(){
        return this.strength
    }
    this.receiveDamage= function receiveDamage(damage){
        this.health= health-damage
    }
}





// Viking
    Viking.prototype=new Soldier ();

function Viking(name, health, strength ) {
    this.name=name;
    this.health=health;
    this.strength=strength;

    this.attack= function attack(){
        return this.strength
    }
    this.receiveDamage = function receiveDamage(damage){
        this.health= health-damage
        Viking.call(this, health, damage);
        this.checkLife= function(){
            if (this.health>0){
                console.log(this.name+"has received "+this.damage+"points of damage");
            }else{
                console.log(this.name+" has died in act of combat")
            }
        }
    }

    this.battleCry= function battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon

Saxon.prototype=new Soldier ();

function Saxon(health, strength) {
        this.health=health;
        this.strength=strength;
        this.attack= function attack(){
            return this.strength
        }
        this.receiveDamage= function receiveDamage(damage){
            this.health= health-damage
        }
}


// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    this.addViking= function addViking(viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon= function addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    this.vikingAttack=function vikingAttack(){
       Saxon.receiveDamage == Viking.strength;
    }
    
}