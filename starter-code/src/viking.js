// Soldier
const Soldier = function(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function (){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking

class Viking extends Soldier {
    constructor(name,health,strengh){
        super(health,strengh);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0 ){
           return  `${this.name} has received ${damage} points of damage`
        } else{
           return  `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon

class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0 ){
        return `A Saxon has received ${damage} points of damage` ;
        } else {
           return `A Saxon has died in combat`;
        } 
    }
}

// War
class War{
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy =[];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
       let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       let randomViking = Math.floor(Math.random()* this.vikingArmy.length);
       this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
       if (this.saxonArmy[randomSaxon].health <= 0){
           this.saxonArmy.splice(randomSaxon,1);
           return 'A Saxon has died in combat';
       }
    }
    saxonAttack(){
        let aSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let aViking = Math.floor(Math.random()* this.vikingArmy.length);
        this.vikingArmy[aViking].receiveDamage(this.saxonArmy[aSaxon].strength);
        if (this.vikingArmy[aViking].health <= 0){
           this.vikingArmy.splice(randomViking,1);
           return `A Viking has died in act of combat`;
     }
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}


