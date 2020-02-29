// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health,
        this.strength=strength
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       this.health=this.health-damage
        }
    }

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name
    }
    receiveDamage(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return(`${this.name} has received ${damage} points of damage`)
        } else {
            return(`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return ("Odin Owns You All!")
    }
}

// Saxon
class Saxon extends Soldier {
     receiveDamage(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return(`A Saxon has received ${damage} points of damage`);
        } else {
            return(`A Saxon has died in combat`)
        }
    }
}
// War
class War {
    vikingArmy=[]
    saxonArmy=[];
addViking(viking){
    this.vikingArmy.push(viking)
}
addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}
vikingAttack(){
let randomViking=Math.floor(Math.random() * this.vikingArmy.length)
let randomSaxon=Math.floor(Math.random() * this.saxonArmy.length)
let result=this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
    if(this.saxonArmy[randomSaxon].health<=0){
        this.saxonArmy.splice(randomSaxon,1)
    }
    return result;
}
saxonAttack(){
let randomViking=Math.floor(Math.random() * this.vikingArmy.length)
let randomSaxon=Math.floor(Math.random() * this.saxonArmy.length)
let result=this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
    if(this.vikingArmy[randomViking].health<=0){
        this.vikingArmy.splice(randomViking,1)
    }
    return result;
}
showStatus(){
    if (this.saxonArmy.length===0){
        return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length===0) return 'Saxons have fought for their lives and survived another day...'
    else if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1) return 'Vikings and Saxons are still in the thick of battle.'
}

showStatus(){
        if (this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length===0) return 'Saxons have fought for their lives and survived another day...'
        else if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1) return 'Vikings and Saxons are still in the thick of battle.'
 }
}

class fight {
    vikingArmy=[]
    saxonArmy=[];
addViking=viking=>this.vikingArmy.push(viking);
addSaxon=Saxon=>this.saxonArmy.push(Saxon);
attacker(team){
        if(team==='Saxons'){
         battleresult=this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
         if(this.vikingArmy[randomViking].health<=0){
            this.vikingArmy.splice(randomViking,1)
        }
        } else {
        battleresult=this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if(this.saxonArmy[randomSaxon].health<=0){
            this.vikingArmy.splice(randomViking,1)
        }
        }
        return battleresult
    }
}

let viking, saxon, fight;

function generateViking() {
   const name = 'Harald';
   const strength = 150;
   const health = 300;
   return new Viking(name, health, strength);
}

function generateSaxon() {
   const health = 60;
   const strength = 25;
   return new Saxon(health, strength);
}

viking = generateViking();
saxon = generateSaxon();
fight = new Fight();

fight.addSaxon(saxon);
fight.addViking(viking);
fight.addSaxon(saxon);
fight.addViking(viking);
fight.addSaxon(saxon);
fight.addViking(viking);
fight.addSaxon(saxon);
fight.addViking(viking);

console.log(fight.attack("vikings"));
console.log(fight.showStatus());
console.log(fight.attack("saxons"));
console.log(fight.showStatus());
console.log(fight.attack("vikings"));
console.log(fight.showStatus());
console.log(fight.attack("saxons"));
console.log(fight.showStatus());
console.log(fight.attack("vikings"));
console.log(fight.showStatus());
console.log(fight.attack("saxons"));
console.log(fight.showStatus());
console.log(fight.attack("vikings"));
console.log(fight.showStatus());
