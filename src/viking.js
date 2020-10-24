// Soldier
class Soldier {
  constructor(health,strength) {
    this.health = health;  //生命值
    this.strength = strength;  //力量
    this.attack=function () {
      return this.strength   //攻击力
    }

  }
  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength) {
    super(health,strength)
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    }else{
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

  //viking加入士兵
  addViking(oneViking){  //instanceOf ?
    if(oneViking instanceof  Viking){
      this.vikingArmy.push(oneViking);
    }

  }

  //saxon加入士兵
  addSaxon(oneSaxon){  //instanceOf ?
    if(oneSaxon instanceof  Saxon){
      this.saxonArmy.push(oneSaxon);
    }

  }

  //viking攻击
  vikingAttack(){
    let randomNumV = Math.floor(Math.random()*this.vikingArmy.length);
    let aViking = this.vikingArmy[randomNumV];
    let randomNumS = Math.floor(Math.random()*this.saxonArmy.length);
    let aSaxon = this.saxonArmy[randomNumS];

    //a Saxon's damage = a Viking's strength => receiveDamage()
    let result = aSaxon.receiveDamage(aViking.strength);

    //remove dead saxon
    if(aSaxon.health <= 0){
      this.saxonArmy.pop(aSaxon);
    }

    //return aSaxon.receiveDamage(a Viking's strength)
    return result

  }

  //saxon攻击
  saxonAttack(){
    let randomNumV = Math.floor(Math.random()*this.vikingArmy.length);
    let aViking = this.vikingArmy[randomNumV];
    let randomNumS = Math.floor(Math.random()*this.saxonArmy.length);
    let aSaxon = this.saxonArmy[randomNumS];

    //a Viking's damage = a Saxon's strength => receiveDamage()
    let result = aViking.receiveDamage(aSaxon.strength);

    //remove dead viking
    if(aViking.health <= 0){
      this.vikingArmy.pop(aViking);
    }

    //return aViking.receiveDamage(a Saxon's strength)
    return result
  }

  //战争结果
  showStatus(){
    if(this.saxonArmy.length == 0){
      return  "Vikings have won the war of the century!"
    }
    if(this.vikingArmy.length == 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}














