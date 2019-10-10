// Soldier
class Soldier {
   constructor(health, strength){
       this.health = health;
       this.strength = strength;
   }
   attack() {
       return this.strength;
   }
   receiveDamage(damage) {
      let life = this.health - damage;
       this.health = life;
   }
}
// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
       super(health, strength);
       this.name = name;
   }
   receiveDamage(damage){
       let life = this.health - damage;
       this.health = life;
       if(life > 0) {
           return `${this.name} has received ${damage} points of damage`;
       } else { //pode-se fazer com else if (life <= 0)
          return `${this.name} has died in act of combat`;
       }
       }
   battleCry(){
       return "Odin Owns You All!"
   }
}

// Saxon
class Saxon extends Soldier {
   constructor(health, strength){
       super(health, strength)
   }
   receiveDamage(damage){
       let life = this.health - damage;
       this.health = life;
       if(life > 0){
           return `A Saxon has received ${damage} points of damage`;
       } else { //pode-se fazer com else if (life <= 0)
          return `A Saxon has died in combat`;
       }
   }
}

// War
class War {
   constructor(){
   this.vikingArmy = []; //COLOCAR SEMPRE O this DENTRO DO OBJECT, mesmo a criar variaveis!
   this.saxonArmy = [];
   }
   addViking(Viking){
       this.vikingArmy.push(Viking);
   };
   addSaxon(Saxon){
       this.saxonArmy.push(Saxon);
   };
   

   vikingAttack(){
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let rndVik = this.vikingArmy[randomViking];
    let rndSax = this.saxonArmy[randomSaxon];

    let saxDamage = rndSax.receiveDamage(rndVik.strength);  

    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health >= 0);

    return saxDamage;

   };

   saxonAttack(){

    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let rndVik = this.vikingArmy[randomViking];
    let rndSax = this.saxonArmy[randomSaxon];

    let vikDamage = rndVik.receiveDamage(rndSax.strength);  

    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

        return vikDamage;
   };
   
   showStatus(){

    if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
   }
}

