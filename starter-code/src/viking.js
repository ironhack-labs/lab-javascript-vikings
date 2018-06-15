// Soldier
function Soldier(health, strength) {
    this.health=health;
    this.strength=strength; 
    this.attack=function(){
        return this.strength;
    }
    this.receiveDamage=function(damage){
        this.health-=damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    console.log(this);
    this.receiveDamage= function(damage){
        this.health-=damage;
        if (this.health>0){
            return this.name+" has received "+damage+" points of damage";
        }
        return this.name+ " has died in act of combat";
    }
    this.battleCry=function(){
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health,strength);
    this.attack=function(){
        return this.strength;
    }
    this.receiveDamage=function(damage){
        this.health-=damage;
        if (this.health>0){
            return "A Saxon has received "+damage+" points of damage";
        }
        return "A Saxon has died in combat";
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    this.addViking=function(vking){
        this.vikingArmy.push(vking);
    }
    this.addSaxon=function(sa){
        this.saxonArmy.push(sa);
    }
    this.vikingAttack=function(){
        var randomnum=Math.floor(Math.random()*this.saxonArmy.length);
        var randomsax=this.saxonArmy[randomnum];
        var randomvik=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var result = randomsax.receiveDamage(randomvik.strength);
        if (randomsax.health<=0){
            this.saxonArmy.splice(randomnum,1);
        }
        return result;
    }
    this.saxonAttack=function(){
        var randomnumero=Math.floor(Math.random()*this.vikingArmy.length);
        var ransax=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        var ranvik=this.vikingArmy[randomnumero];
        var resuelto = ranvik.receiveDamage(ransax.strength);
        if (ranvik.health<=0){
            this.vikingArmy.splice(randomnumero,1);
        }
        return resuelto;
    }
    this.showStatus=function(){
        if (this.saxonArmy.length==0){
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length==0){
            return "Saxons have fought for their lives and survive another day...";
        }
        if (this.vikingArmy.length>=1 && this.saxonArmy.length>=1){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

