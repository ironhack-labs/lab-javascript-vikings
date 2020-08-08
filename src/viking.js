// Soldier
class Soldier {
  constructor(health, strength){
    this.health=health
    this.strength=strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name=name
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return "A Saxon has died in combat";
    }
  }
}

//War
class War {
  constructor(){
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  addViking(Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
    let selectedSaxon=Math.floor(Math.random()*this.saxonArmy.length);
    let saxonDamage=0;
    for(let i=0; i<this.vikingArmy.length;i++){
      saxonDamage=this.vikingArmy[i].strength;
      return selectedSaxon.receiveDamage(saxonDamage);
    }
    if(selectedSaxon.health===0){
      return this.saxonArmy.pop(selectedSaxon)
    }
    return this.saxonArmy[selectedSaxon].receiveDamage(saxonDamage);
  }
  saxonAttack() {
    let selectedViking=Math.floor(Math.random()*this.vikingArmy.length);
    let vikinDamage=0;
    for(let i=0; i<this.saxonArmy.length;i++){
      vikinDamage=this.saxonArmy[i].strength;
      return selectedSaxon.receiveDamage(vikinDamage);
    }
    if(selectedViking.health===0){
      return this.vikingArmy.pop(selectedViking);
    }
    return this.vikingArmy(selectedViking).receiveDamage(vikinDamage);
  }
}
  



