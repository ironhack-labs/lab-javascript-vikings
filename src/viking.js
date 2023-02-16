// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
  this.health -= damage;
  }
}


// Viking

class Viking extends Soldier{
constructor(name,health,strength){
  super(name,health,strength);
  this.name = name
  this.health = health
  this.strength = strength
}
attack(){
  return this.strength
}
receiveDamage(damage){
  this.health -= damage;
  // I really don't know what i am doing wrong and in Jasmine is not green ,but honestly i am confused,because i think we have to use if statement like i did.
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`}
    else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!";
  }



  }


// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0 ){
      return `A Saxon has received ${damage} points of damage`}
      else {
      return `A Saxon has died in combat`
}}
}



// War
class War {
  constructor(){
    this.Vikingarmy = [];
    this.Saxonarmy = [];
  };
  addViking(Viking){
    this.Vikingarmy.push(Viking);
  };
  addSaxon(Saxon){
    this.Saxonarmy.push(Saxon);
  };
  vikingAttack(){}
  saxonAttack(){}
  showsStatus(){}
}
