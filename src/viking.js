// Soldier

class Soldier {
    constructor(healthArgument, strengthArgument){
        this.health = healthArgument;
        this.strength = strengthArgument;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theAmountOfDamage){
        // this.health = this.health = theAmountOfDamage;
        this.health -= theAmountOfDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg);
        // when i call super here i am literally calling the constructor of the solider class which needs 2 arguments so i better passs them in 
        this.name = nameArg;
    }
    receiveDamage(amount){
        super.receiveDamage(amount);
        // here im literaly calling the receiveDamage function from the soldier class and passing in amount]
        if(this.health > 0){
            return `${this.name} has received ${amount} points of damage`
        } else {
           return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
        // this version gets hoisted
    }
    battleCry = () => {
        return "Odin Owns You All!"
        // this version preserves the context of this
    }
    battleCry = function(){
        return "Odin Owns You All!"
        // 
    }
    // all the same thing

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(amountOfDmg){
        super.receiveDamage(amountOfDmg);
        if(this.health > 0){
            return `A Saxon has received ${amountOfDmg} points of damage`
        } else {
            return "A Saxon has died in combat"
        }

    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vike){
        this.vikingArmy.push(vike);
    }
    addSaxon(sax){
        this.saxonArmy.push(sax);
    }

    removeDeadBodies = (whichArmy) => {
        whichArmy.forEach((eachSoldier, ind)=>{
            if(eachSoldier.health <= 0){
                whichArmy.splice(ind, 1);
            }
        })
    }

    generateRandomSoldier = (whichArmy) => {
        let randomSoldierNumber = Math.floor(Math.random() * whichArmy.length);
        let randomSoldier = whichArmy[randomSoldierNumber];
        return randomSoldier;
    }

    vikingAttack = () => {
        let randomViking = this.generateRandomSoldier(this.vikingArmy);
        let randomSaxon = this.generateRandomSoldier(this.saxonArmy);
        let result = randomSaxon.receiveDamage(randomViking.attack());
        this.removeDeadBodies(this.saxonArmy);
        return result;
    }

    saxonAttack = () => {
        let randomViking = this.generateRandomSoldier(this.vikingArmy);
        let randomSaxon = this.generateRandomSoldier(this.saxonArmy);
        let result = randomViking.receiveDamage(randomSaxon.attack());
        this.removeDeadBodies(this.vikingArmy);
        return result;
    }

    showStatus = () => {

        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }

}

    let newWar = new War()

    let viking1 = new Viking('Arne', 100, 250);
    let viking2 = new Viking('Bjorn', 100, 75);
    let viking3 = new Viking('Agatha', 100, 350);
    let viking4 = new Viking('Halfdan',100, 175);
    let viking5 = new Viking('Freya', 100, 55);

    newWar.addViking(viking1);
    newWar.addViking(viking2);
    newWar.addViking(viking3);
    newWar.addViking(viking4);
    newWar.addViking(viking5);

    let saxon1 = new Saxon (75, 50);
    let saxon2 = new Saxon (70, 55);
    let saxon3 = new Saxon (65, 110);
    let saxon4 = new Saxon (70, 75);
    let saxon5 = new Saxon (80, 100);

    newWar.addSaxon(saxon1);
    newWar.addSaxon(saxon2);
    newWar.addSaxon(saxon3);
    newWar.addSaxon(saxon4);
    newWar.addSaxon(saxon5);

    // function showStatusOfWar(){
    //     const status = document.querySelector("status span");
    //     //status.innerText = showStatus();
    // }
    // showStatusOfWar();


    let vikingRow = document.querySelectorAll(".viking");
    
    for(let i = 0; i < 5; i++){
    
       let vikingName = document.querySelectorAll(".name span")[i];
       let vikingHealth = document.querySelectorAll(".health span")[i];
       let vikingStrength = document.querySelectorAll(".strength span")[i];
       
       vikingName.innerText = newWar.vikingArmy[i].name
       vikingHealth.innerText = newWar.vikingArmy[i].health
       vikingStrength.innerText = newWar.vikingArmy[i].strength
    }
    
    let saxonRow = document.querySelectorAll(".saxon");

    for(let i = 0; i < 5; i++){

       let saxonHealth = document.querySelectorAll(".health2 span")[i];
       let saxonStrength = document.querySelectorAll(".strength2 span")[i];
       
       saxonHealth.innerText = newWar.saxonArmy[i].health
       saxonStrength.innerText = newWar.saxonArmy[i].strength
    }

    

    

   
   

    