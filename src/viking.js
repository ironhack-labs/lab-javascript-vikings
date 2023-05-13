// Soldier
class Soldier {
    
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
        }
    attack(){
        return this.strength;
            }
    receiveDamage(damage){
    this.health-damage;
           }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name=name;
        
                                       }
    receiveDamage(damage){
      
        let status=this.health-damage;
        if(status>0){
            return console.log(`"${this.name} has received ${damage} points of damage"`);
        }
          else{
            return console.log(`"${this.name} has died in act of combat`);
        }
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}
// Saxon
class Saxon extends Soldier {    
    receiveDamage(damage){
    let status2= this.health-damage;
     if(status2>0){
         console.log(`A Saxon has received ${damage} points of damage`);
     }
     else{
         console.log(`A Saxon has died in combat`);
     }
 }
}
const Harald = new Soldier(300,150);
const viking = new Viking("NAME", 300, 150);
const saxon = new Saxon();
saxon.receiveDamage(50);
    


// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
addViking(Viking){
    Viking=this.vikingArmy[Viking];
}
addSaxon(Saxon){
    Saxon=this.saxonArmy[Saxon];
}
vikingAttack(){
    Saxon.receiveDamage()=Viking.this.strength;
    Saxon--;
    
}
saxonAttack(){
    Viking.receiveDamage()=Saxon.this.strength;
    Viking--;
}
showStatus(){}
}
