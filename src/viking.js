// Soldier
class Soldier {
constructor(health, strength){
    this.health = health;
    this.strength = strength;

} 
attack(){
    return this.strength
}

receiveDamage(damage){
this.health = this.health - damage;
}

}

// Viking
class Viking {
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    VikingAttack(){
        return this.strength
    }
    
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
          } else {
            return `${this.name} has died in act of combat`;
          };
        };
    }

    battleCry(){
        return 'Odin Owns You All';
    }

}

// Saxon
class Saxon extends Soldier {}
constructor(health, strength){
    super(health, strength)
    }
   receiveDamage(damage){
       this.health = this.health - dmage;
       if (this.health > 0) {
           return ('A Saxon has received ${damage} points of damage');
       }
       else {
           return ('A Saxon has received ${damage} points of damage');
       };
   };
};

// War
class War {
    construsctor (){
    this.VikingArmy = [];
    this.saxonArmy = [];
    };

    addViking(viking) {
        this.vikingArmy.push(viking);
      };

      addSaxon(saxon) {
        this.saxonArmy.push(saxon);
      };
};


