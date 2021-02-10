// Soldier
class Soldier {
  constructor(a, b) {

 this.health = a;   
 this.strength = b;
  };

  attack(){
  
    return  this.strength;
  };

  receiveDamage(thedamage){
   this.health -= thedamage;
  }

}

// Viking
class Viking extends Soldier{
constructor(name,a,b){
  super(a,b);
  this.name = name;
}

receiveDamage(thedamage){
  
  this.health -= thedamage;
 
 if(super.receiveDamage> thedamage)
 {
   return `${super.this.name } has been received  ${thedamage} + points of damage`
} 
else if( super.receiveDamage < thedamage)
{
return super.this.name +"has died in act of combat"
}
}

battleCry(){
  return 'Odin Owns You All!'
}
}


// Saxon
class Saxon extends Soldier{
  constructor(a,b){
    super(a,b,)
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikAmy){
    this.vikingArmy.unshift(vikAmy);
  }

  addSaxon(saxAmy){
    this.saxonArmy.unshift(saxAmy);
  }

  vikingAttack(){
    this.saxonArmy.pop();
    // Saxon.super.receiveDamage(thedamage) === Viking.super.attack();
  }

  saxonAttack(){

    this.vikingArmy.pop();
    // Viking.super.receiveDamage(thedamage) === Saxon.super.attack();
  }
}
