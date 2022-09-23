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
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
          let randomSaxonIndex = Math.floor(Math.random()*(this.saxonArmy.length));
          let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
          this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
          if (this.saxonArmy[randomSaxonIndex].health <= 0){
            this.saxonArmy = this.saxonArmy.filter(saxons =>{
                return saxons.health > 0;
              }) ;              
              return `A Saxon has died in combat`;
          } else {
            return `A Saxon has received ${this.vikingArmy[randomVikingIndex].strength} points of damage`;
          }
      }
      saxonAttack(){
          let randomSaxonIndex = Math.floor(Math.random()*(this.saxonArmy.length));
          let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
          let deadArr = [];
          this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
          if (this.vikingArmy[randomVikingIndex].health <= 0){
            let deadArr = this.vikingArmy.filter(vikings =>{
                return vikings.health <= 0;
              });
              this.vikingArmy = this.vikingArmy.filter(vikings =>{
                return vikings.health > 0;
              }) ;
            return `${deadArr[0].name} has died in act of combat`;
          } else {
            return `${this.vikingArmy[randomVikingIndex].name} has received ${this.saxonArmy[randomSaxonIndex].strength} points of damage`;
          }
      }
      showStatus(){
        if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        } else if(this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }
      }
      attack(clan){  //BONUS ITERATION - no Auto-testing by Jasmine Implemented - hope the solution is correct?
        let randomSaxonIndex = Math.floor(Math.random()*(this.saxonArmy.length));
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        if (clan === Viking){
            this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
          if (this.saxonArmy[randomSaxonIndex].health <= 0){
            this.saxonArmy = this.saxonArmy.filter(saxons =>{
                return saxons.health > 0;
              }) ;              
              return `A Saxon has died in combat`;
          } else {
            return `A Saxon has received ${this.vikingArmy[randomVikingIndex].strength} points of damage`;
          }
        } else if (clan === Saxon){
            this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
          if (this.vikingArmy[randomVikingIndex].health <= 0){
            let deadArr = this.vikingArmy.filter(vikings =>{
                return vikings.health <= 0;
              });
              this.vikingArmy = this.vikingArmy.filter(vikings =>{
                return vikings.health > 0;
              }) ;
            return `${deadArr[0].name} has died in act of combat`;
          } else {
            return `${this.vikingArmy[randomVikingIndex].name} has received ${this.saxonArmy[randomSaxonIndex].strength} points of damage`;
          }
        }
      }
}




