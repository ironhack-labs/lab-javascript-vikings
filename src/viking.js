// Soldier-------------------------------------------------------------

class Soldier {

    constructor(health,strength){

        this.health = health;
        this.strength = strength;
    }
    
    attack(){

        return this.strength;
    }

    receiveDamage(damage) {

        this.damage = damage
        this.health-=this.damage
        this.health
        
    }

}

// Viking---------------------------------------------------------------

class Viking extends Soldier {

    constructor(name,health,strength){
    
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {

        this.damage = damage
        this.health-=this.damage
        this.health
        if(this.health>0){
        return `${this.name} has received ${this.damage} points of damage`
        }
        else {
           return `${this.name} has died in act of combat`
        }

    }

    battleCry(){

        return "Odin Owns You All!"

    }

}


// Saxon--------------------------------------------------------------------

class Saxon extends Soldier {

    receiveDamage(damage) {

        this.damage = damage
        this.health-=this.damage
        this.health
        if(this.health>0){
        return `A Saxon has received ${this.damage} points of damage`
        }
        else {
        return `A Saxon has died in combat`
        }

    }

}

// War-------------------------------------------------------------------------

class War {

    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){

        this.vikingArmy.push(viking)

    }

    addSaxon(saxon){

        this.saxonArmy.push(saxon)

    }

    vikingAttack(){
        
        let randomVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        console.log(randomVik)
        let randomSax = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let saxStatus = randomSax.receiveDamage(randomVik.strength)
        console.log(saxStatus);
        if(randomSax.health<=0){
            if (this.saxonArmy.includes(randomSax)){
                this.saxonArmy.splice(this.saxonArmy.indexOf(randomSax),1)
            }
        }
        console.log(this.saxonArmy)
        return saxStatus

    }

    saxonAttack(){
       
        let randomSax = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        console.log(randomSax)
        let randomVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let vikStatus = randomVik.receiveDamage(randomSax.strength)
        console.log(vikStatus);
        if(randomVik.health<=0){
            if (this.vikingArmy.includes(randomVik)){
                this.vikingArmy.splice(this.vikingArmy.indexOf(randomVik),1)
            }
        }
        return vikStatus
        
    }

   showStatus(){
        
        if (this.saxonArmy.length === 0 ){
            return 'Vikings have won the war of the century!'
        }
        else if (this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length >0){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
const viking1 = new Viking('Shubee', 100, 100);
console.log(viking1);
const viking2 = new Viking('Barath', 100, 100);
console.log(viking2);
const viking3 = new Viking('Melody', 100, 100);
console.log(viking3);

const saxon1 = new Saxon(100, 200);
console.log(saxon1);
const saxon2 = new Saxon(100, 200);
console.log(saxon2);
const saxon3 = new Saxon(100, 200);
console.log(saxon3);

const war1 = new War();
war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);
console.log(JSON.stringify(war1.vikingArmy));
war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);
console.log(JSON.stringify(war1.saxonArmy));

war1.vikingAttack()
war1.saxonAttack()