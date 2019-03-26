// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health,
    this.strength = strength
  }
  attack = () => this.strength;

  receiveDamage = (thedamage) =>{
    this.health -= thedamage;
    return undefined }
  }

// Viking
class Viking extends Soldier {
  constructor(name,health, strength){
    super(health,strength)
    this.name = name;
  }
  receiveDamage = (thedamage) => {
    this.health -= thedamage
    return (this.health > 0) ? `${this.name} has received ${thedamage} points of damage` : `${this.name} has died in act of combat`
  }
  battleCry = () => "Odin Owns You All!"
}

// Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health,strength)
  }
  receiveDamage = (thedamage) => {
    this.health -= thedamage
    return (this.health > 0) ? `A Saxon has received ${thedamage} points of damage` : `A Saxon has died in combat`
  }

}

// War
class War {
  constructor(){
    this.vikingArmy =[],
    this.saxonArmy =[]
  }
  addViking = (viking)=>{
    this.vikingArmy.push(viking);
    return undefined
  }
  addSaxon = (saxon) =>{
    this.saxonArmy.push(saxon);
    return undefined
  }
  vikingAttack =()=> {
    if(this.saxonArmy[0].health <= this.vikingArmy[0].strength){
      this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
      this.saxonArmy=[] ;
      return "A Saxon has died in combat"
    }
  }

  saxonAttack =()=> {
    if(this.vikingArmy[0].health <= this.saxonArmy[0].strength){
      this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
      this.vikingArmy=[] ;
      return "A Viking has died in combat"
    }else {
      this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
      return `${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage` 
    } 
   }

   showStatus =() => {
     if(this.saxonArmy.length === 0){
       return 'Vikings have won the war of the century!'
     } else if (this.vikingArmy.length === 0){
       return 'Saxons have fought for their lives and survive another day...'
     } else {
       return 'Vikings and Saxons are still in the thick of battle.'
     }
     }
   }
