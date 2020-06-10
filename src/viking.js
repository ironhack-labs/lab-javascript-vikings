// Soldier
class Soldier {
    constructor (health, strength){
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
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat` ;
        } else {
            return`${this.name} has received ${damage} points of damage` ;
        };
     }
    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor (health,strength) {
        super(health,strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat` ;
        } else {
            return`A Saxon has received ${damage} points of damage` ;
        };
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking (viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack() {
        for(let i = 0; i< this.vikingArmy.length; i++){
            let damage = this.vikingArmy[i].attack();
            return this.saxonArmy[i].receiveDamage(damage);
        }
        this.saxonArmy.forEach(function(saxon, i) {
            if(saxon[i].health <= 0) {
                saxonArmy.remove(saxon[i])
            }
        });
    }
    saxonAttack() {
        for(let i = 0; i< this.saxonArmy.length; i++){
            let damage = this.saxonArmy[i].attack();
            return this.vikingArmy[i].receiveDamage(damage);
        }
        this.saxonArmy.forEach(function(saxon, i) {
            if(saxon[i].health <= 0) {
                saxonArmy.remove(saxon[i])
            }
        });
    }
    showStatus () {
        if(this.saxonArmy.length === 0) {return 'Vikings have won the war of the century!'}
        else if (this.vikingArmy.length === 0) {return 'Saxons have fought for their lives and survived another day...'}
        else {return 'Vikings and Saxons are still in the thick of battle.'}
    }
};

// it('should be a function', () => {
      //   expect(typeof war.showStatus).toBe('function');
      // });
      //
      // it('should receive 0 arguments', () => {
      //   expect(war.showStatus.length).toEqual(0);
      // });
      //
      // it('should return "Vikings have won the war of the century!", if the Saxons array is empty', () => {
      //   war.vikingAttack();
      //   expect(war.showStatus()).toEqual('Vikings have won the war of the century!');
      // });
      //
      // it('should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty', () => {
      //   for (let i = 0; i < 12; i++) {
      //     war.saxonAttack();
      //   }
      //   expect(war.showStatus()).toEqual(
      //     'Saxons have fought for their lives and survived another day...'
      //   );
      // });
      //
      // it('should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons', () => {
      //   expect(war.showStatus()).toEqual('Vikings and Saxons are still in the thick of battle.');
      // });