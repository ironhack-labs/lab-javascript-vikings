// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        return (this.health);
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
            this.health = this.health - damage;
            this.damage = damage;
            if (this.health > 0) {
                return $ `{this.name} has received ${this.damage} points of damage`;
            } else if (this.health <= 0) {
                return `${this.name} has died in act of combat`;
       }
   }
   battleCry(){
       return "Odin Owns You All!";
   }
}
// Saxon
class Saxon extends Soldier {
   constructor(health,strength){
       super(health,strength);
   }
   attack() {
       return this.strength;
   }
   receiveDamage(damage){
       this.health = this.health - damage;
       this.damage = damage;
       if(this.health >0){
           return `A Saxon has received ${this.damage} points of damage`;
       }
       else if(this.health <=0){
       return `A Saxon has died in combat`;
       }
   }
}
// War
class War   {
   constructor(){
       this.vikingArmy = [];
       this.saxonArmy = [];
   }
   addViking(vikingArg){
      // this.Viking = vikingArg;
       this.vikingArmy.push(vikingArg);
   }
   addSaxon(saxonArg){
       this.saxonArmy.push(saxonArg)
   }
   vikingAttack(){
       let indexViking = Math.floor(Math.random()*this.vikingArmy.length);
    let randomViking = this.vikingArmy[indexViking];
       let indexSaxon= Math.floor(Math.random()*this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[indexSaxon];
       damage = this.randomViking.strength;
       this.randomSaxon.receiveDamage(damage);
        let action = randomSaxon.receiveDamage(randomViking.strength);
       if (action.includes("died")){
           this.saxonArmy.splice(indexSaxon)
       }
       return applicationCache;
   }
   saxonAttack(){
   }
   showStatus(){
   }
}