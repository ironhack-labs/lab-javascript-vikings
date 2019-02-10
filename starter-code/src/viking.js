// Soldier
class Soldier {
    constructor(health,strength) {
        
        this.health=health;
        this.strength=strength;
        this.attack=function(){
          return this.strength;
        }
        this.receiveDamage= function(damage){
        if (damage !== undefined)
              this.health-=damage;
        };
    };
};


  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health,strength);
      this.name=name;
      this.battleCry=function(){ 
        return ('Odin Owns You All!');}
      this.receiveDamage= function(damage)  {
        if (damage !== undefined )
          this.health-=damage;
        if (this.health > 0 )
           return (`${this.name} has received ${damage} points of damage`);
        else 
           return (`${this.name} has died in act of combat`);   
      };
    };
  };

  // Saxon
  class Saxon extends Soldier {
    constructor(health, strength) {
      super( health, strength);
      this.receiveDamage= function(damage)  {
        if (damage !== undefined )
          this.health-=damage;
        if (this.health > 0 )
           return (`A Saxon has received ${damage} points of damage`);
        else 
           return (`A Saxon has died in combat`);  
      }; 
    };
  };
  // War
  class War {
    constructor() {
      this.saxonArmy=[];
      this.vikingArmy=[];
      this.addViking=function(rookieViking){
        this.vikingArmy.push(rookieViking);
      };
      this.addSaxon=function(rookieSaxon){
        this.saxonArmy.push(rookieSaxon);
      };
      this.vikingAttack=function(){
        
        let attackingViking = this.vikingArmy[  Math.random(this.vikingArmy.length)];
        let indexSaxon = Math.random(this.saxonArmy.length);
        let attackedSaxon =this.saxonArmy[ indexSaxon];
        const returnMsg = attackedSaxon.receiveDamage(attackingViking.strength);
        this.removeCorpses(this.saxonArmy);
        return(returnMsg);
       
      };

      this.saxonAttack=function(){
        let attackingSaxon = this.saxonArmy[  Math.random(this.saxonArmy.length)];
        let indexViking =Math.random(this.vikingArmy.length);
        let attackedViking =this.vikingArmy[ indexViking ];
       
        this.removeCorpses(this.vikingArmy);
        //return('saxons');
        return(attackedViking.receiveDamage(attackingSaxon.strength));
      };
      this.showStatus=function(){
        if (this.saxonArmy.length === 0 ) {
          return ('Vikings have won the war of the century!');

        }
        if (this.vikingArmy.length === 0) {
          return ('Saxons have fought for their lives and survive another day...');
        }
      };

      this.removeCorpses=function(army){
        for (let i=0;i<army.length;i++){
          if ( army[i].health <= 0) 
             army.splice(i,1);
        }

      };
    };
  };



/*
  let cosmos = new War();

  for (let num=0; num < 10; num++) {
      cosmos.addViking(new Viking("Halvaarg",145, 13));
      cosmos.addSaxon(new Saxon ( 130, 10));
  }
  
  
  console.log(cosmos);
  
  cosmos.vikingAttack();
  cosmos.saxonAttack();
  
  console.log(cosmos);
  */