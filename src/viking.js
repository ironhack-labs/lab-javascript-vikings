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
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    return (this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`)
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
//no need to reimplement constructor when is exactly the same
  receiveDamage(damage){
    this.health-=damage;
    return (this.health<=0 ? 'A Saxon has died in combat':`A Saxon has received ${damage} points of damage`)
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
     const saxonIndex = Math.floor(Math.random()* this.saxonArmy.length); 
     const vikingIndex = Math.floor(Math.random()* this.vikingArmy.length)  
     
     const viking = this.vikingArmy[vikingIndex]; //pick vicking at random
     const saxon = this.saxonArmy[saxonIndex]; //pick S at random
     const damage = viking.strength;//randoms vicking strength equals damage 

     const result = saxon.receiveDamage(damage);//call receiveDamage with damage as argument
 
     if (saxon.health <= 0) {
       this.saxonArmy.splice(saxonIndex, 1);
     }
 
     return result;

  }

  saxonAttack(){
    const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];
    const damage = saxon.strength;

    const result = viking.receiveDamage(damage);
    if(viking.health <=0){
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return result
  }

  showStatus(){
    if(this.vikingArmy == []){
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy == []){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy[] == this.saxonArmy[]){
      return  "Vikings and Saxons are still in the thick of battle."
    }
}
