// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    attack (){
        return this.strength;
    }
    receiveDamage (theDamage){
        this.heath -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        if(this.health > 0){
            this.health -= theDamage;
            return `${this.name} has received ${theDamage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;
        } 
    }
   
    battleCry(){
        return 'Odin owns you all!'

    }

}


// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage){
        if(this.health < 0){
            this.health -= theDamage;
            return `A Saxon has received ${theDamage} points of damage`;
        }else{
            return `A saxon has died in combat`;
        }
    }
}

// bonus War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        if (this.saxonArmy[0].health <= 0){
            this.saxonArmy.shift();
            return `A Saxon receive damage because the strength of a Viking`;
        }
    }
    saxonAttack(){
        this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        if (this.vikingArmy[0].health <= 0){
            this.vikingArmy.shift();
        }
        return `A Viking receive damage because the strength of a Saxon`;
}

//superBONUS
showStatus(){ 

    if (this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`;

    }
    else if (this.vikingArmy.length ===0) {
        return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
        return `Vikings and Saxons are still in the thick of battle`;
    }

}