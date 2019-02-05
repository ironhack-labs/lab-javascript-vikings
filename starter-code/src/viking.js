// Soldier
function Soldier(health, strength) {
     this.health=health;
     this.strength = strength;
}

Soldier.prototype.attack=function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function (a) {
    this.health=health-a;
}

// Viking
function Viking(name) {
    Soldier.call(this, health, strength);
    this.attack = function(){
        return this.strength;
    }

    this.receiveDamage = function(b){
        this.health = health - b;
        if(this.health>b){
            return this.name + " has received " + this.b + " points of damage"
        }else{
            return this.name + " has died in act of combat"
        }
    }

    this.battleCry = function(){
        return "Odin Owns You All!";
    }
}

//si hago el call, debo declarar las variables, a parte?o debo entender que se heredaran?)
// Saxon
function Saxon() {
    Soldier.call(this, health, strength);

    this.attack = function () {
        return this.strength;
    }

    this.receiveDamage = function (c) {
        this.health = health - b;
        if (this.health > b) {
            return  "A Saxon has received " + this.b + " points of damage"
        } else {
            return  "A Saxon has died in act of combat"
        }
    }


}

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];

    this.addViking=function(viking){
        this.vikingArmy.push(viking);
    }

    this.addSaxon=function(saxon){
        this.saxonArmy.push(saxon);
    }

    this.vikingAttack=function(){
        

    }

    this.saxonAttack=function(){

    }

    this.showStatus=function(){

    }

}
