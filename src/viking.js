// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0)return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;

    }
    battleCry(){
        return "Odin Owns You All!";
    }

    
}
// Saxon
class Saxon extends Soldier{
    constructor( health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0)return `A Saxon has received ${damage} points of damage`;
        else return "A Saxon has died in combat";

    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    constructor() {
    }   

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[indexRandomViking];

        let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[indexRandomSaxon];

        randomSaxon.receiveDamage(randomViking.attack());

        if(randomSaxon.health <= 0){ 
            this.saxonArmy.splice(randomSaxon, 1);
            return 'A Saxon has died in combat';
        }
        return `A Saxon has received ${randomViking.strength} points of damage`

    }

    saxonAttack(){

        let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[indexRandomSaxon];

        let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[indexRandomViking];

        randomViking.receiveDamage(randomSaxon.attack());

        if(randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
            return 'A Viking has died in combat';
        }
        
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;

    }

    showStatus(){
        if(this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
        if(this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...';
        if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) return 'Vikings and Saxons are still in the thick of battle.';
    }
}
let vikingSoldier;
let saxonSoldier;
let startWar = new War();

const vikingNames = ['Knut den mektige','Rollo','Leiv Eiriksson','Harald Hårfagre','Svein Tjugeskjegg','Bjørn Jernside','Eirik Torvaldsson Raude','Ragnar Lodbrok','Gorm den gamle','Harald Blåtann','Thorey','Vidgis','Rannveig','Ragnhildr','Arndís', 'Sigridur', 'Otkatla'];

let nombre;
let health;
let strength;

// Create Viking Army
for(let i = 0; i < 10; i++){
    let randomIndexName = Math.floor(Math.random() * vikingNames.length);    
    nombre = vikingNames[randomIndexName];
    health = Math.floor( Math.random() * (9000 - 3000 + 1) + 3000);
    strength = Math.floor( Math.random() * (1000 - 500 + 1) + 500 );
    if(health % 100 === 0 && strength % 100 === 0){
        vikingSoldier = new Viking(nombre, health, strength);
        startWar.addViking(vikingSoldier);
        console.log(i + 1 , vikingSoldier);
    }else{
        i--;
    }
}
//Create Saxon Army
for(let i = 0; i < 10; i++){
    health = Math.floor( Math.random() * (9000 - 3000 + 1) + 3000);
    strength = Math.floor( Math.random() * (1000 - 500 + 1) + 500 );
    if(health % 100 === 0 && strength % 100 === 0){
    saxonSoldier = new Saxon(health, strength);
    startWar.addSaxon(saxonSoldier);
    console.log(i + 1, saxonSoldier);
    }else{
        i--;
    }
}

let randomNum;
while(startWar.vikingArmy.length > 0 && startWar.saxonArmy.length > 0){
    randomNum = Math.floor(Math.random()*10);
    if(randomNum % 2 === 0) console.log(startWar.saxonAttack());
    else console.log(startWar.vikingAttack());
}

console.log(startWar.showStatus());