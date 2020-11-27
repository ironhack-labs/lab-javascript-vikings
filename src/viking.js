// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health= this.health - damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }

    attack(){
    return super.attack();
    }

    receiveDamage(damage){
      super.receiveDamage(damage);
        
      if(this.health>0){
        return `${this.name} has received ${damage} points of damage`;
      } 
        return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return `Odin Owns You All!`;
    };
}





// Saxon
class Saxon extends Soldier {

    attack(){
        return super.attack();
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
          } 
            return `A Saxon has died in combat`;
    }

}


// War
class War {

    constructor(){
        this.vikingArmy= [];
        this.saxonArmy=[];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    
    randomViking(){return this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]}
    randomSaxon(){return this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]}

    vikingAttack(){
        let choosenSaxon= this.randomSaxon();
        let damageSaxon= choosenSaxon.receiveDamage(this.randomViking().strength);
        if(choosenSaxon.health<=0){ this.saxonArmy.splice(this.saxonArmy.indexOf(choosenSaxon),1)} 
        return damageSaxon;
    }

    saxonAttack(){
        let choosenViking= this.randomViking();
        let damageViking= choosenViking.receiveDamage(this.randomSaxon().strength);
        if(choosenViking.health<=0){ this.vikingArmy.splice(this.vikingArmy.indexOf(choosenViking),1)} 
        return damageViking;
    }
    

    
}

//testing
const viking1= new Viking('Bjorn',100,80);
const viking2= new Viking('Odin',100,100);
const viking3= new Viking('Ragnar',100,80);

const saxon1= new Saxon(100,100);
const saxon2= new Saxon(100,50);
const saxon3= new Saxon(100,50);

const war1= new War();

war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);


console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());







