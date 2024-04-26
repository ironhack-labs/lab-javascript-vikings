// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health=this.health - damage;
    }
}

/*
let soldier = new Soldier(100,100);

console.log(soldier.attack());

soldier.receiveDamage(50);


console.log(soldier.health);
*/
console.log();
// Viking
class Viking extends Soldier {
    constructor(name, health,strength){
        super(health,strength);
        this.name=name;
    }
    receiveDamage(damage){
        this.health = this.health-damage;
        if(this.health >0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }   

    battleCry(){
        return "Odin Owns You All!";
    }
}

/*
let vik = new Viking("Nomeson", 100,100);

console.log(vik.receiveDamage(50));
console.log(vik.health);
console.log(vik.battleCry());
*/
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return "A Saxon has died in combat";
        }
    }
}
/*
let sax = new Saxon(100,100)
sax.receiveDamage(50);

console.log(sax.health);
console.log(sax.strength);
*/

// War

class War {
    
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];     
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    #Random(max){

        //console.log(max);
        //console.log(Math.random()*max);
        //console.log(Math.floor(Math.random()*max));
        return Math.floor(Math.random()*max);
    }


    vikingAttack(){
        this.genericAttack("Viking");
     }

    saxonAttack(){
        this.genericAttack("Saxon");
    /*
        let VikingPicker = this.#Random(this.vikingArmy.length);
        let SaxonPicker = this.#Random(this.saxonArmy.length);

        let RandomViking = this.vikingArmy[VikingPicker];
        let RandomSaxon = this.saxonArmy[SaxonPicker];

        const damage = RandomViking?.receiveDamage(RandomSaxon.strength)
        this.vikingArmy=this.vikingArmy.filter(Viking => Viking.health>0);
        return damage;//`result of calling ${RandomSaxon.strength} of a ${RandomViking} with the ${RandomSaxon.strength} of a ${RandomSaxon}`;
    */
    }

    genericAttack(soldier){
        let VikingPicker = this.#Random(this.vikingArmy.length);
        let SaxonPicker = this.#Random(this.saxonArmy.length);

        let RandomViking = this.vikingArmy[VikingPicker];
        let RandomSaxon = this.saxonArmy[SaxonPicker];

        if(soldier==="Viking"){
            const damage=RandomSaxon?.receiveDamage(RandomViking.strength)
            this.saxonArmy=this.saxonArmy.filter(Saxon => Saxon.health>0);
        
            return damage;

        }
        else if(soldier === "Saxon"){
            const damage = RandomViking?.receiveDamage(RandomSaxon.strength)
            this.vikingArmy=this.vikingArmy.filter(Viking => Viking.health>0);
            return damage;
        }
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!';
        }
        else if(this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survived another day...';
        }
        else{
            return 'Vikings and Saxons are still in the thick of battle.';
        }

    }
}

/*
let WarOfNortumbria = new War();

for(let i = 0;i<5;i++){
    WarOfNortumbria.addViking(new Viking("Nameson",100,100));

    WarOfNortumbria.addSaxon(new Saxon(100,100));
}
/*
console.log(WarOfNortumbria.vikingArmy);
console.log(WarOfNortumbria.saxonArmy);

console.log(WarOfNortumbria.vikingArmy.length);
console.log(WarOfNortumbria.saxonArmy.length);
*/
/*
const WarOfNortumbria = new War();
console.log(WarOfNortumbria.vikingAttack());
console.log(WarOfNortumbria.saxonAttack());
*/
/*
console.log(WarOfNortumbria.vikingArmy);
console.log(WarOfNortumbria.saxonArmy);

console.log(WarOfNortumbria.vikingArmy.length);
console.log(WarOfNortumbria.saxonArmy.length);
*/

/*
console.log(WarOfNortumbria.showStatus());

console.log(WarOfNortumbria.vikingArmy);
console.log(WarOfNortumbria.saxonArmy);
*/
/*
Random(max){
    return Math.floor(Math.random*max);
}

let War_of_Nortumbria = new War();
const ABC = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']


for(let i=0; i<Random(10);i++){
    const Vik = new Viking(`V`);
    addViking(VikingAurelius = new Viking());
}
*/

/*

console.log


Math.random()
*/