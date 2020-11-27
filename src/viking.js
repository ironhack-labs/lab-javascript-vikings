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
    //Adding warriors to army Methods
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    //Methods to get a random warrior
    randomViking(){
        return this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    }

    randomSaxon(){
        return this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    }

    //Basic attack methods. Needed to be uncommented to pass all Jasmine tests
    vikingAttack(){
        let choosenSaxon= this.randomSaxon();
        let damageSaxon= choosenSaxon.receiveDamage(this.randomViking().strength);
            if(choosenSaxon.health<=0){ 
                this.saxonArmy.splice(this.saxonArmy.indexOf(choosenSaxon),1) //Delete dead warriors from the army array
            } 
        return damageSaxon;
    }

    saxonAttack(){
        let choosenViking= this.randomViking();
        let damageViking= choosenViking.receiveDamage(this.randomSaxon().strength);
            if(choosenViking.health<=0){ 
                this.vikingArmy.splice(this.vikingArmy.indexOf(choosenViking),1)
            } 
        return damageViking;
    }

    //superBonus generic attack method
    attack(objetive){
        if(this.vikingArmy.length>=1 && this.saxonArmy.length>=1){
        objetive=objetive.toLowerCase();
            switch(objetive){
                case 'saxon':
                    let choosenSaxon= this.randomSaxon();
                    let damageSaxon= choosenSaxon.receiveDamage(this.randomViking().strength);
                        if(choosenSaxon.health<=0){ this.saxonArmy.splice(this.saxonArmy.indexOf(choosenSaxon),1)} 
                    return damageSaxon; 

                case 'viking':
                    let choosenViking= this.randomViking();
                    let damageViking= choosenViking.receiveDamage(this.randomSaxon().strength);
                        if(choosenViking.health<=0){ this.vikingArmy.splice(this.vikingArmy.indexOf(choosenViking),1)} 
                    return damageViking;

                default:
                    return `The objetive must be a viking or a saxon`

            }
        }
        else{
            return this.showStatus(); //If there are no warriors on the army there will be no attack and it will show the status of the battle.
        }
    }
    
    showStatus(){
        if(this.vikingArmy.length === 0 && this.saxonArmy.length === 0 ){ //In this case any warrior was added to the army
            return `At least one warrior must join to the army`
        }
        else if(this.vikingArmy.length === 0){
          return `Saxons have fought for their lives and survived another day...`
        }else if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
          
    }  
}

//Testing calls 

const viking1= new Viking('Bjorn',100,170);
const viking2= new Viking('Odin',100,120);
const viking3= new Viking('Ragnar',80,150);

const saxon1= new Saxon(100,100);
const saxon2= new Saxon(100,70);
const saxon3= new Saxon(100,50);

const war1= new War();

war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);

/*
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
*/

console.log(war1.attack('viking'));
console.log(war1.attack('saxon'));
console.log(war1.attack('Viking'));
console.log(war1.attack('Saxon'));
console.log(war1.attack('Viking'));
console.log(war1.attack('Saxon'));
console.log(war1.attack('viking'));
console.log(war1.attack('saxon'));








