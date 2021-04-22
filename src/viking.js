// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;   
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health === 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
 }


// Saxon
class Saxon extends Soldier { 
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health === 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}





// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomViking = viking.Math(floor(Math.random(1,2) *100 ));
        saxon.receiveDamage() = saxon.health - randomViking.strength;
    }

        
    //     it('should make Saxon receiveDamage() equal to the strength of a Viking', () => {
    //       let oldHealth = saxon.health;
    //       war.vikingAttack();
    //       expect(saxon.health).toEqual(oldHealth - viking.strength);
    //     });
        


    //     it('should remove dead saxons from the army', () => {
    //       war.vikingAttack();
    //       expect(war.saxonArmy.length).toEqual(0);
    //     });

        
    //     it('should return result of calling receiveDamage() of a Saxon with the strength of a Viking', () => {
    //       expect(war.vikingAttack()).toEqual('A Saxon has died in combat');
    //     });
    //   });
  






    saxonAttack() {

    }

    // it('should make a Viking receiveDamage() equal to the strength of a Saxon', () => {
    //     let oldHealth = viking.health;
    //     war.saxonAttack();
    //     expect(viking.health).toEqual(oldHealth - saxon.strength);
    //   });
      
    //   it('should remove dead vikings from the army', () => {
    //     for (let i = 0; i < 12; i++) {
    //       war.saxonAttack();
    //     }
    //     expect(war.vikingArmy.length).toEqual(0);
    //   });
      
    //   it('should return result of calling receiveDamage() of a Viking with the strength of a Saxon', () => {
    //     expect(war.saxonAttack()).toEqual(
    //       `${viking.name} has received ${saxon.strength} points of damage`





    showStatus() {
        if (viking.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (saxon.length === 0) {
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        } 
    } 
 }


       
//  it('should return "Vikings have won the war of the century!", if the Saxons array is empty', () => {
//     war.vikingAttack();
//     expect(war.showStatus()).toEqual('Vikings have won the war of the century!');
//   });
  
//   it('should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty', () => {
//     for (let i = 0; i < 12; i++) {
//       war.saxonAttack();
//     }
//     expect(war.showStatus()).toEqual(
//       'Saxons have fought for their lives and survived another day...'
//     );
//   });
  
//   it('should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons', () => {
//     expect(war.showStatus()).toEqual('Vikings and Saxons are still in the thick of battle.');
//   });
