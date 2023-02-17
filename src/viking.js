// Soldier
class Soldier {
    constructor(health,srength){
        this.health = health;
        this.strength = srength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
         this.health = this.health - damage;
         if(this.health > 1){
            return `${this.name} has received ${damage} points of damage`
         }else if(this.health < 1){
            return `${this.name} has died in act of combat`
         }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 1){
           return `A Saxon has received ${damage} points of damage`
        }else if(this.health < 1){
           return `A Saxon has died in combat`
        }
   }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
      }
      addViking(Viking) {
        this.vikingArmy.push(Viking);
      }
      addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
      }
      vikingAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
       if(this.saxonArmy[randomSaxon].health < 1){
          this.saxonArmy.splice(randomSaxon,1);
          return `A Saxon has died in combat`;
       }
       }
       saxonAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingName = this.vikingArmy[randomViking].name;
        const saxonStrength = this.saxonArmy[randomSaxon].strength;
        this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        
       if(this.vikingArmy[randomViking].health <= 0){
          this.vikingArmy.splice(randomViking, 1);
          return `${vikingName} has died in act of combat`
       }else{
        return `${vikingName} has received ${saxonStrength} points of damage`;
       }
     }
}
