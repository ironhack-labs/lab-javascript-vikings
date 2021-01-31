
// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health; 
        this.strength=strength;
    }
    attack(){ 
        return this.strength
    }
    receiveDamage(damage){ 
        this.health-=damage;
    }
  }


// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super(name,health,strength);{ 
            this.name=name;
            this.strength=strength;
            this.health=health;
        }
    }
    attack(){ 
       return this.strength;
    }
    receiveDamage(damage){ 
        this.health-=damage;
        if (this.health > 0){ 
            return `${this.name} has received ${damage} points of damage`;} 
            else {
            return `${this.name} has died in act of combat`;}
    }

    battleCry (){
        return 'Odin Owns You All!'
    }

    }

    console.log(Viking)


// Saxon
class Saxon extends Soldier{
    attack(){ 
       return this.strength;
    }
    receiveDamage(damage){ 
        this.health-=damage;
        if(this.health > 0){ 
            return `A Saxon has received ${damage} points of damage`;
        }
        else if (this.health <=0) { 
            return 'A Saxon has died in combat';
        }

    }

}

// War
class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(Viking) {
      this.vikingArmy.push (Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push (Saxon);
    
    }
    vikingAttack(){
       
    }


    }



