// Soldier
class Soldier {}
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
class Viking {}
class Viking extends Soldier {
    constructor(name, health, strength){

      super(health, strength)
        this.name = name

    }

      receiveDamage(damage){
        this.health -= damage
        if(this.health >= 1){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon {}
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health -= damage
        if(this.health >= 1){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {}
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }  

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }


    vikingAttack(){

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 

        let result = randomSaxon.receiveDamage(randomViking.strength)

        randomSaxon.receiveDamage(randomViking.strength)
            if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxon,1)
            }

        return result

    }


    saxonAttack() {

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 

        let result = randomViking.receiveDamage(randomSaxon.strength)

        randomViking.receiveDamage(randomSaxon.strength)
            if(randomViking.health <= 0){
            this.vikingArmy.splice(randomViking,1)
        }

        return result

    }


    showStatus() {}

}
it('should receive 2 arguments (health & strength)', () => {
    expect(Soldier.length).toEqual(2);
  });

  it('should receive the health property as its 1st argument', () => {
    expect(soldier.health).toEqual(health);
  });

  it('should receive the strength property as its 2nd argument', () => {
    expect(soldier.strength).toEqual(strength);
  });
});

describe('attack() method', () => {
    it('should be a function', () => {
        expect(typeof soldier.attack).toBe('function');
      });
 
      it('should receive 0 arguments', () => {
        expect(soldier.attack.length).toEqual(0);
      });
 
      it('should return the strength property of the Soldier', () => {
        expect(soldier.attack()).toEqual(strength);
      });
    });
 
    describe('receiveDamage() method', () => {
        it('should be a function', () => {
            expect(typeof soldier.receiveDamage).toBe('function');
          });
     
          it('should receive 1 argument (the damage)', () => {
            expect(soldier.receiveDamage.length).toEqual(1);
          });
     
          it('should remove the received damage from the health property', () => {
            soldier.receiveDamage(50);
            expect(soldier.health).toEqual(health - 50);
          });
     
          it("shouldn't return anything", () => {
            expect(soldier.receiveDamage(50)).toEqual(undefined);
          });
        });
      });
      it('should inherit from Soldier', () => {
        expect(viking instanceof Soldier).toEqual(true);
      });
      it('should receive 3 arguments (name, health & strength)', () => {
        expect(Viking.length).toEqual(3);
      });
 
      it('should receive the name property as its 1st argument', () => {
        expect(viking.name).toEqual(name);
      });
 
      it('should receive the health property as its 2nd argument', () => {
        expect(viking.health).toEqual(health);
      });
 
      it('should receive the strength property as its 3rd argument', () => {
        expect(viking.strength).toEqual(strength);
      });
    });
 
    describe('attack() method', () => {
        it('should be a function', () => {
            expect(typeof viking.attack).toBe('function');
          });
     
          it('should receive 0 arguments', () => {
            expect(viking.attack.length).toEqual(0);
          });
     
          it('should return the strength property of the Viking', () => {
            expect(viking.attack()).toEqual(strength);
          });
        });
     
        describe('receiveDamage() method', () => {
            it('should be a function', () => {
                expect(typeof viking.receiveDamage).toBe('function');
              });
         
              it('should receive 1 argument (the damage)', () => {
                expect(viking.receiveDamage.length).toEqual(1);
              });
         
              it('should remove the received damage from the health property', () => {
                viking.receiveDamage(50);
                expect(viking.health).toEqual(health - 50);
              });
         
              it('should return "NAME has received DAMAGE points of damage", if the Viking is still alive', () => {
                expect(viking.receiveDamage(50)).toEqual(`${name} has received 50 points of damage`);
                expect(viking.receiveDamage(75)).toEqual(`${name} has received 75 points of damage`);
              });
         
              it('should return "NAME has died in act of combat", if the Viking dies', () => {
                expect(viking.receiveDamage(health)).toEqual(`${name} has died in act of combat`);
              });
            });
            it('should be a function', () => {
                expect(typeof viking.battleCry).toBe('function');
              });
         
              it('should receive 0 arguments', () => {
                expect(viking.battleCry.length).toEqual(0);
              });
         
              it('should return "Odin Owns You All!"', () => {
                expect(viking.battleCry()).toEqual('Odin Owns You All!');
              });
            });
          });

          it('should receive the health property as its 1st argument', () => {
            expect(saxon.health).toEqual(health);
          });
     
          it('should receive the strength property as its 2nd argument', () => {
            expect(saxon.strength).toEqual(strength);
          });
        });
        it('should be a function', () => {
            expect(typeof saxon.attack).toBe('function');
          });
     
          it('should receive 0 arguments', () => {
            expect(saxon.attack.length).toEqual(0);
          });
     
          it('should return the strength property of the Saxon', () => {
            expect(saxon.attack()).toEqual(strength);
          });
        });
        it('should be a function', () => {
            expect(typeof saxon.receiveDamage).toBe('function');
          });
     
          it('should receive 1 argument (the damage)', () => {
            expect(saxon.receiveDamage.length).toEqual(1);
          });
     
          it('should remove the received damage from the health property', () => {
            saxon.receiveDamage(50);
            expect(saxon.health).toEqual(health - 50);
          });
     
          it('should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive', () => {
            expect(saxon.receiveDamage(45)).toEqual('A Saxon has received 45 points of damage');
            expect(saxon.receiveDamage(10)).toEqual('A Saxon has received 10 points of damage');
          });
     
          it('should return "A Saxon has died in combat", if the Saxon dies', () => {
            expect(saxon.receiveDamage(health)).toEqual('A Saxon has died in combat');
          });
        });
      });

      it('should be a function', () => {
        expect(typeof war.showStatus).toBe('function');
      });

      it('should receive 0 arguments', () => {
        expect(war.showStatus.length).toEqual(0);
      });

      it('should return "Vikings have won the war of the century!", if the Saxons array is empty', () => {
        war.vikingAttack();
        expect(war.showStatus()).toEqual('Vikings have won the war of the century!');
      });

      it('should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty', () => {
        for (let i = 0; i < 12; i++) {
          war.saxonAttack();
        }
        expect(war.showStatus()).toEqual(
          'Saxons have fought for their lives and survived another day...'
        );
      });

      it('should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons', () => {
        expect(war.showStatus()).toEqual('Vikings and Saxons are still in the thick of battle.');
      });
    });
  });
});
