
class Soldier {

    constructor (healthInt, strengthInt){
  
      this.health = healthInt;
      this.strength = strengthInt;
    }
  
    attack() {
      return this.strength;
    }
  
    receiveDamage(damageReceivedInt) {
      this.health -= damageReceivedInt;
    }
}
  
class Viking extends Soldier{
  
    constructor(nameInt, healthInt, strengthInt) {
      
      super(healthInt, strengthInt);
      this.name = nameInt;
    }
  
    receiveDamage(damageReceivedInt) {
  
      this.health -= damageReceivedInt;
  
      if (this.health > 0) {
          return this.name + ' has received ' + damageReceivedInt + ' points of damage';
      } else if (this.health <= 0) {
            return this.name + ' has died in act of combat';
      }
    }
  
    battleCry() {
      return 'Odin Owns You All!';
    }
}
  
class Saxon extends Soldier{
  
    constructor(healthInt, strengthInt){
      super(healthInt, strengthInt);
    }
  
    receiveDamage(damageReceivedInt) {
      
      this.health -= damageReceivedInt;
  
      if(this.health > 0) {
        return 'a Saxon has received ' + damageReceivedInt + ' points of damage';
      } else if(this.health <= 0){
        return 'A saxon has died in combat';
      }
    }
}

class War {

  constructor(){

    this.vikingArmy = Array();
    this.saxonArmy = Array();
  }

  addViking(vikingSoldierInt){
    this.vikingArmy.push(vikingSoldierInt);
  }

  addSaxon(saxonSoldierInt){
    this.saxonArmy.push(saxonSoldierInt);
  }

  vikingAttack(){
  
    let saxonAttacked = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    if(saxonAttacked == undefined){
      return;
    }

    let vikingAttacking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

    if(vikingAttacking == undefined){
      return;
    }

    let vikingAttackingStrength = vikingAttacking.strength;

    

    let resultOfTheAttack = saxonAttacked.receiveDamage(vikingAttackingStrength);

    if (saxonAttacked.health <= 0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxonAttacked),1);
      return resultOfTheAttack;
    } else if (saxonAttacked.health > 0){
      return resultOfTheAttack;
    }
  }

  saxonAttack(){

    let vikingAttacked = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    if(vikingAttacked == undefined){
      return;
    }

    let saxonAttacking = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

    if(saxonAttacking == undefined){
      return;
    }

    let saxonAttackingStrength = saxonAttacking.strength;

    let resultOfTheAttack = vikingAttacked.receiveDamage(saxonAttackingStrength);

    if (vikingAttacked.health <= 0){
        this.vikingArmy.splice(this.vikingArmy.indexOf(vikingAttacked),1);
    } else if (vikingAttacked.health > 0){
          return resultOfTheAttack;
    }
  }

  bothAttack(){
    this.saxonAttack();
    this.vikingAttack();
  }

  showStatus(){
    if(this.saxonArmy.length < 1){
      return 'VIKINGS HAVE WON! Odin will forever be the God of the North!';
    } else if(this.vikingArmy.length < 1){
      return 'SAXONS HAVE WON! They have fought for their lives and survive another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }

  }

  calculateWhoHasMoreProbOfWinning(){

    let sumOfVikingsStrength = 0;
    let sumOfSaxonsStrength = 0;

    for(let i = 0; i < this.vikingArmy.length; i++) {
      sumOfVikingsStrength += this.vikingArmy[i].strength;
    }

    for(let i = 0; i < this.saxonArmy.length; i++) {
      sumOfSaxonsStrength += this.saxonArmy[i].strength;
    }
  
   if(this.vikingArmy.length === this.saxonArmy.length && sumOfVikingsStrength > sumOfSaxonsStrength){
     return "Vikings have more probability of winning this war, because the sum of their strength (" + sumOfVikingsStrength + ") is greater than Saxon's (" + sumOfSaxonsStrength + ").";
   } else if(this.vikingArmy.length === this.saxonArmy.length && sumOfVikingsStrength < sumOfSaxonsStrength){
     return "Saxons have more probability of winning this war, because the sum of their strength (" + sumOfSaxonsStrength + ") is greater than Vikings' (" + sumOfVikingsStrength + ").";
    } else {
      return 'For now, we are not calculating probabilities of winning when both teams do not have same amount of soldiers. We apologize.';
    }
  }
}

createGame = function(numberOfVikingsInt, numberOfSaxonsInt){

  warOfTheNorth = new War;


  for(let i = 0; i < numberOfVikingsInt; i++){

    let nameForThisConcreteViking = listOfVikingsNames[Math.floor(Math.random()*listOfVikingsNames.length)];

    let strengthForThisConcreteViking = listOfDifferentVikingsStrength[Math.floor(Math.random()*listOfDifferentVikingsStrength.length)];

    let getRandomName = new Viking(nameForThisConcreteViking, 100, Number(strengthForThisConcreteViking));


     warOfTheNorth.vikingArmy.push(getRandomName);
      
  }

  for(let i = 0; i < numberOfSaxonsInt; i++){

    let nameForThisConcreteSaxon = listOfVikingsNames[Math.floor(Math.random()*listOfVikingsNames.length)];

    let strengthForThisConcreteSaxon = listOfDifferentSaxonStrength[Math.floor(Math.random()*listOfDifferentSaxonStrength.length)];

    let getRandomName = new Saxon(100, Number(strengthForThisConcreteSaxon));


    warOfTheNorth.saxonArmy.push(getRandomName);
      
  }
}




let listOfVikingsNames = ["Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Ashe", "Blitzcrank", "Brand","Caitlyn", "Cassiopeia", "Chogath", "Corki", "Dr. Mundo", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jax", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "KogMaw", "Leona", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Talon", "Taric", "Teemo", "Tristana", "Trundle", "Trydamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yorick", "Ziggs", "Zilean"];


let listOfDifferentVikingsStrength = ['40', '40', '40', '45', '45', '45', '45', '45', '45', '60'];

let listOfDifferentSaxonStrength = ['35', '35', '35', '40', '40', '40', '40', '45', '45', '50'];


let getRandomName = function (){
    return listOfVikingsNames[Math.floor(Math.random()*listOfVikingsNames.length)]
}





let warOfTheNorth;

let line = '____________________________________________________________________'


//ALWAYS WRITE BEHIND THIS LINE


//CREATE HERE THE GAME USIND THE create.game FUNCTION.
// -> First number: number of Vikings in their army!
// -> Second number: number of Saxons in their army!
// -> Remember you can always know the status of the war with console.log(warOfTheNorth.showStatus())

createGame(5,5);

//console.log HERE THE WAR OF THE NORTH, SO YOU CAN SEE BOTH ARMYS BEFORE THE WAR BEGINS, AND A LINE SO ITS BETTER DISGUINSHABLE. 

console.log(warOfTheNorth);
console.log(line);

//INTRODUCE HERE THE ACTIONS OF THE WAR. IN MY SWORD I TRUST!

warOfTheNorth.bothAttack();
warOfTheNorth.vikingAttack();
warOfTheNorth.saxonAttack();

// console.log HERE THE WAR YOU INTRODUCED AND THE LINE, AND YOU CAN SEE THE RESULT OF THE WAR! WE DRINK YOUR BLOOD!

console.log(warOfTheNorth);
console.log(line);
console.log(warOfTheNorth.showStatus());
console.log(warOfTheNorth.calculateWhoHasMoreProbOfWinning());




