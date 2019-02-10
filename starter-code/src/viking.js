// Soldier
class Soldier {
  constructor(health,strength) {
      this.health=health;
      this.strength=strength;
  };
  attack(){
    return this.strength;
  };

  receiveDamage(damage){
    this.health=this.health-damage;
  };
};

// Viking
class Viking extends Soldier {
  constructor(name,health,strength) {
    super(health,strength);
    this.name=name;
  };
  
  receiveDamage(damage){ 
    this.health=this.health-damage;
    if(this.health>0){
      return this.name+' has received '+damage+' points of damage';
    }else{
      return this.name+' has died in act of combat';
    }
  }
  battleCry(){
    return 'Odin Owns You All!';
  }
};

// Saxon
class Saxon extends Soldier{
  constructor(health,strength) {
    super(health,strength);
  };
  receiveDamage(damage){ 
    this.health=this.health-damage;
    if(this.health>0){
      return 'A Saxon has received '+damage+' points of damage';
    }else{

      return 'A Saxon has died in combat';
    }
  }
};

// War
class War {
  constructor() {
    this.vikingArmy=[];
    this.saxonArmy=[];
  };
  addViking(Viking){
    this.vikingArmy.push(Viking);
  };
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  };
  vikingAttack(){
    let saxonArmyRandom=Math.floor(Math.random()*this.saxonArmy.length);
    let vikingArmyRandom=Math.floor(Math.random()*this.saxonArmy.length);
    let resultAttack=this.saxonArmy[saxonArmyRandom].receiveDamage(this.vikingArmy[vikingArmyRandom].strength);
    if(resultAttack==='A Saxon has died in combat'){
      this.saxonArmy.splice(saxonArmyRandom,1);
    }
    
      return resultAttack;
    
  };
  saxonAttack(){
    let saxonArmyRandom=Math.floor(Math.random()*this.saxonArmy.length);
    let vikingArmyRandom=Math.floor(Math.random()*this.saxonArmy.length);
    let resultAttack=this.vikingArmy[vikingArmyRandom].receiveDamage(this.saxonArmy[saxonArmyRandom].strength);
    if(resultAttack===this.vikingArmy[vikingArmyRandom].name+' has died in act of combat'){
      this.vikingArmy.splice(vikingArmyRandom,1);
    }
      return resultAttack;
    
  };

  showStatus(){
    if(this.saxonArmy.length===0){
      return 'Vikings have won the war of the century!';
    }
    if(this.vikingArmy.length===0){
      return 'Saxons have fought for their lives and survive another day...';
    }
    if((this.saxonArmy.length>0)&&(this.vikingArmy.length>0)){
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
};