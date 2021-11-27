// Soldier
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
  class Viking extends Soldier{
    constructor(name,health,strength){
      super(health,strength);
      this.name = name;
    };
    receiveDamage(damage){
      this.health -= damage;
      if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
      }else{
        return `${this.name} has died in act of combat`;
      }
    };
    battleCry(){
      return "Odin Owns You All!";
    };
  
  }
  
  // Saxon
  class Saxon extends Soldier {
    
    receiveDamage(damage){
      this.health -= damage;
      if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
      }else{
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
    
      
    addViking(viking){
      this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
      this.saxonArmy.push(saxon);
    }
    vikingAttack(){
      let vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
      let vik = this.vikingArmy[vikIndex];
      let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
      let sax = this.saxonArmy[saxIndex];
  
      const text = `${sax.receiveDamage(vik.strength)}`;
      if(sax.health <= 0){
          this.saxonArmy.splice(saxIndex,1);
      }
      return text;
  };
    saxonAttack(){
      let vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
      let vik = this.vikingArmy[vikIndex];
      let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
      let sax = this.saxonArmy[saxIndex];
   
      const text = `${vik.receiveDamage(sax.strength)}`;
      if(vik.health <= 0){
          this.vikingArmy.splice(vikIndex,1);
      }
      return text;
    };
  
    showStatus(){
      if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
      }
      if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"
      }
      return "Vikings and Saxons are still in the thick of battle."
    };
    }
  
  

   



let guerra = new War;
let numberSaxon = Math.floor(20+Math.random()*80);
let numberViking = Math.floor(20+Math.random()*80);
for(let i = 0; i< numberViking;i++){
    let vikName = `Viking_${i}`;
    let randomforça = Math.floor(5+Math.random()*20);
    let randomHealth = Math.floor(40+Math.random()*60);
    let viking = new Viking(vikName,randomHealth,randomforça);
    guerra.vikingArmy.push(viking);
}
for(let i = 0; i< numberSaxon;i++){
    let randomforça = Math.floor(10+Math.random()*20);
    let randomHealth = Math.floor(30+Math.random()*50);
    let saxon = new Saxon(randomHealth,randomforça);
    guerra.saxonArmy.push(saxon);
}
function ataque(a,count){
    a.vikingAttack();
    if(a.saxonArmy.length ==0 ){
        return console.log(a.showStatus());
    }
    a.saxonAttack();
    if(a.vikingArmy.length ==0 ){
        return console.log(a.showStatus());
    }
    if(count%5===0){
        console.log(a.saxonArmy);
        console.log("------------------------------------------------------------");
        console.log(a.vikingArmy);
        console.log("------------------------------------------------------------");
        console.log(a.showStatus());
    }
    return ataque(a,count++);
}

//console.log(guerra.saxonArmy);
//console.log(guerra.vikingArmy);
ataque(guerra,0);