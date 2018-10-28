// Soldier
class Soldier{
    constructor(healthArg,strengthArg){
      this.health = healthArg;
      this.strength = strengthArg;
    }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health-=damage;
  }
  }

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
      super(healthArg,strengthArg);
      this.name = nameArg;
      
    }
  attack(){
    super.attack();
    return this.strength
  }
  receiveDamage(damage){
    this.health-=damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }
  battleCry(){
    return "Odin Owns You All!"
  }
  }


// Saxon
class Saxon extends Soldier{
    constructor(healthArg,strengthArg){
      super(healthArg,strengthArg);
    }
    attack(){
      super.attack();
      return this.strength;
    }
    receiveDamage(damage){
      this.health-=damage;
      return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
  }

// War
class War{
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
      vikingAttack(){
        let randomAttackedSaxon = Math.floor((Math.random()*this.saxonArmy.length));
        let randomAttackingViking = Math.floor((Math.random()*this.vikingArmy.length));
        this.saxonArmy[randomAttackedSaxon].receiveDamage(this.vikingArmy[randomAttackingViking].strength);
        if (this.saxonArmy[randomAttackedSaxon].health <= 0) {
          this.saxonArmy.splice(randomAttackedSaxon,1);
          return 'A Saxon has died in combat';
        }
        return this.saxonArmy[randomAttackedSaxon].receiveDamage(this.vikingArmy[randomAttackingViking].strength)
      }
      saxonAttack(){
        let randomAttackedViking = Math.floor((Math.random()*this.vikingArmy.length));
        let randomAttackingSaxon = Math.floor((Math.random()*this.saxonArmy.length));
        let randomAttackedVikingName = this.vikingArmy[randomAttackedViking].name;
        this.vikingArmy[randomAttackedViking].receiveDamage(this.saxonArmy[randomAttackingSaxon].strength);
        if (this.vikingArmy[randomAttackedViking].health <= 0){
            this.vikingArmy.splice(randomAttackedViking,1);
           return  `${randomAttackedVikingName} has died in act of combat`
        }
         return `${randomAttackedVikingName} has received ${this.saxonArmy[randomAttackingSaxon].strength} points of damage`
      }
        showStatus(){
          if (this.saxonArmy.length === 0 ){
            return "Vikings have won the war of the century!"
          }
          else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."

          }
          else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
          }
        }
  }
  // saxonAttack() {
  //   let attackedViking = Math.floor((Math.random() * this.vikingArmy.length));
  //   let attackingSaxon = Math.floor((Math.random() * this.saxonArmy.length));
  //   let attackedVikingName = this.vikingArmy[attackedViking].name;
  //   this.vikingArmy[attackedViking].receiveDamage(this.saxonArmy[attackingSaxon].strength); 
  //   if (this.vikingArmy[attackedViking].health <= 0) {
  //     this.vikingArmy.splice(attackedViking, 1);
  //     return `${attackedVikingName} has died in act of combat`;
  //   }
  //   return `${attackedVikingName} has received ${this.saxonArmy[attackingSaxon].strength} points of damage`;
  // }