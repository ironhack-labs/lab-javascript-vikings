// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack = () => {
        return this.strength;
    };
    receiveDamage = (theDamage) => {
    this.health -= theDamage;
    };
}

// Viking
class Viking extends Solider{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage = (theDamage) => {
        this.health -= theDamage;
        if(this.health > 0) {
            `${this.name} has received ${theDamage} points of damage` ;
        }else {
            return `${this.name} has died in battle`
        }
        };
        battleCry = () => {
            return "Odin Owns You All!";
        };
    }

    class Saxon { 

        receiveDamage = (damage) => { 
          this.health -= damage 
          if(this.health > 0){ 
              return `A Saxon has received ${damage} points of damage` 
          } else { 
              return `A Saxon has died in combat` 
          } 
      
        } 
      
      } 
      
      
      
      class War { 
        constructor(){ 
        this.vikingArmy = [] 
        this.saxonArmy = [] 
      } 
      
      
    addViking = (soldier) => { 
      this.vikingArmy.push(soldier) 
    } 
      
    addSaxon = (soldier) => { 
      this.saxonArmy.push(soldier) 
    } 
      
    vikingAttack = () => { 
      let thor = this.vikingArmy[  Math.floor( Math.random() * this.vikingArmy.length )] //Get a random viking 
      let thor = this.vikingArmy[0] 
      let saxon = this.saxonArmy[0] 
      let result = saxon.receiveDamage(thor.strength) 

     if(saxon.health <= 0){ 
        this.saxonArmy.shift() 
        } 
      
         return result  
    } 
      
    saxonAttack = () => { 
        let viking = this.vikingArmy[0] 
        let saxon = this.saxonArmy[0] 
        let result = viking.receiveDamage(saxon.strength) 
        if(viking.health <= 0){ 
            this.vikingArmy.shift() 
         } 
    return result 
    } 
      
    showStatus = () => {  
     if(this.saxonArmy.length === 0) 
         return "Vikings have won the war of the century!" 
      
     if(this.vikingArmy.length === 0) 
        return "Saxons have fought for their lives and survived another day..." 
        return "Vikings and Saxons are still in the thick of battle." 
       } 
      
} 
      
      
    class War { 
      constructor(){ 
        this.vikingArmy  = [] 
         this.saxonArmy   = [] 
      } 
      
        addViking=(soldier)=>{ 
             this.vikingArmy.push(soldier) 
        } 
      
        addSaxon=(solider)=>{ 
            this.saxonArmy.push(solider) 
          } 
      
        vikingAttack=()=>{ 
          let saxon   = this.saxonArmy[Math.floor(  Math.random() * this.saxonArmy.length )] 
          let viking  = this.vikingArmy[Math.floor(  Math.random() * this.vikingArmy.length )] 
          saxon.receiveDamage(viking.strength) 
        } 

        saxonAttack=()=>{ 
          let saxon   = this.saxonArmy[Math.floor(  Math.random() * this.saxonArmy.length )] 
          let viking  = this.vikingArmy[Math.floor(  Math.random() * this.vikingArmy.length )] 
          viking.receiveDamage(saxon.strength) 
      
        } 

      
      } 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      let warObj = { 
      
      
      
      
        saxonArmy: [],  
      
      
      
      
        vikingArmy: [], 
      
      
      
      
      
      
      
      
      
        addViking: function(soldier){ 
      
      
      
      
          this.vikingArmy.push(soldier) 
      
      
      
      
        }, 
      
      
      
      
        addSaxon: function(soldier){ 
      
      
      
      
          this.saxonArmy.push(soldier) 
      
      
      
      
        } 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      }  
      
      
      
      
      
      
      
      
      
      
      
      
      
      // War 
      
      
      
      
      class War {} 
      
      
      316 tests/viking.spec.js 
      
      
      
      
      
      
      @@ -155,56 +155,56 @@ describe("Saxon", () => {
      
      
          saxon = new Saxon(health, strength); 
      
      
          saxon = new Saxon(health, strength); 
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        // it('should inherit from Soldier', () => { 
      
      
        it('should inherit from Soldier', () => { 
      
      
        //   expect(saxon instanceof Soldier).toEqual(true); 
      
      
          expect(saxon instanceof Soldier).toEqual(true); 
      
      
        // }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("class", () => { 
      
      
        describe("class", () => { 
      
      
          // it('should receive the health property as its 1st argument', () => { 
      
      
          it('should receive the health property as its 1st argument', () => { 
      
      
          //   expect(saxon.health).toEqual(health); 
      
      
            expect(saxon.health).toEqual(health); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should receive the strength property as its 2nd argument', () => { 
      
      
          it('should receive the strength property as its 2nd argument', () => { 
      
      
          //   expect(saxon.strength).toEqual(strength); 
      
      
            expect(saxon.strength).toEqual(strength); 
      
      
          // }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("attack() method", () => { 
      
      
        describe("attack() method", () => { 
      
      
          // it('should be a function', () => { 
      
      
          it('should be a function', () => { 
      
      
          //   expect(typeof saxon.attack).toBe('function'); 
      
      
            expect(typeof saxon.attack).toBe('function'); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should receive 0 arguments', () => { 
      
      
          it('should receive 0 arguments', () => { 
      
      
          //   expect(saxon.attack.length).toEqual(0); 
      
      
            expect(saxon.attack.length).toEqual(0); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should return the strength property of the Saxon', () => { 
      
      
          it('should return the strength property of the Saxon', () => { 
      
      
          //   expect(saxon.attack()).toEqual(strength); 
      
      
            expect(saxon.attack()).toEqual(strength); 
      
      
          // }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("receiveDamage() method", () => { 
      
      
        describe("receiveDamage() method", () => { 
      
      
          // it('should be a function', () => { 
      
      
          it('should be a function', () => { 
      
      
          //   expect(typeof saxon.receiveDamage).toBe('function'); 
      
      
            expect(typeof saxon.receiveDamage).toBe('function'); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should receive 1 argument (the damage)', () => { 
      
      
          it('should receive 1 argument (the damage)', () => { 
      
      
          //   expect(saxon.receiveDamage.length).toEqual(1); 
      
      
            expect(saxon.receiveDamage.length).toEqual(1); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should remove the received damage from the health property', () => { 
      
      
          it('should remove the received damage from the health property', () => { 
      
      
          //   saxon.receiveDamage(50); 
      
      
            saxon.receiveDamage(50); 
      
      
          //   expect(saxon.health).toEqual(health - 50); 
      
      
            expect(saxon.health).toEqual(health - 50); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive', () => { 
      
      
          it('should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive', () => { 
      
      
          //   expect(saxon.receiveDamage(45)).toEqual('A Saxon has received 45 points of damage'); 
      
      
            expect(saxon.receiveDamage(45)).toEqual('A Saxon has received 45 points of damage'); 
      
      
          //   expect(saxon.receiveDamage(10)).toEqual('A Saxon has received 10 points of damage'); 
      
      
            expect(saxon.receiveDamage(10)).toEqual('A Saxon has received 10 points of damage'); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should return "A Saxon has died in combat", if the Saxon dies', () => { 
      
      
          it('should return "A Saxon has died in combat", if the Saxon dies', () => { 
      
      
          //   expect(saxon.receiveDamage(health)).toEqual('A Saxon has died in combat'); 
      
      
            expect(saxon.receiveDamage(health)).toEqual('A Saxon has died in combat'); 
      
      
          // }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      }); 
      
      
      }); 
      
      
      
      
      
      
      
      @@ -231,55 +231,55 @@ describe("War", () => {
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("class", () => { 
      
      
        describe("class", () => { 
      
      
          // it('should receive 0 arguments', () => { 
      
      
          it('should receive 0 arguments', () => { 
      
      
          //   expect(War.length).toEqual(0); 
      
      
            expect(War.length).toEqual(0); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should assign an empty array to the vikingArmy property', () => { 
      
      
          it('should assign an empty array to the vikingArmy property', () => { 
      
      
          //   expect(war.vikingArmy).toEqual([]); 
      
      
            expect(war.vikingArmy).toEqual([]); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should assign an empty array to the saxonArmy property', () => { 
      
      
          it('should assign an empty array to the saxonArmy property', () => { 
      
      
          //   expect(war.saxonArmy).toEqual([]); 
      
      
            expect(war.saxonArmy).toEqual([]); 
      
      
          // }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("addViking() method", () => { 
      
      
        describe("addViking() method", () => { 
      
      
          // it('should be a function', () => { 
      
      
          it('should be a function', () => { 
      
      
          //   expect(typeof war.addViking).toBe('function'); 
      
      
            expect(typeof war.addViking).toBe('function'); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should receive 1 argument (a Viking object)', () => { 
      
      
          it('should receive 1 argument (a Viking object)', () => { 
      
      
          //   expect(war.addViking.length).toEqual(1); 
      
      
            expect(war.addViking.length).toEqual(1); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should add the received Viking to the army', () => { 
      
      
          it('should add the received Viking to the army', () => { 
      
      
          //   war.addViking(viking); 
      
      
            war.addViking(viking); 
      
      
          //   expect(war.vikingArmy).toEqual([viking]); 
      
      
            expect(war.vikingArmy).toEqual([viking]); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it("shouldn't return anything", () => { 
      
      
          it("shouldn't return anything", () => { 
      
      
          //   expect(war.addViking(viking)).toEqual(undefined); 
      
      
            expect(war.addViking(viking)).toEqual(undefined); 
      
      
          // }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("addSaxon() method", () => { 
      
      
        describe("addSaxon() method", () => { 
      
      
          // it('should be a function', () => { 
      
      
          it('should be a function', () => { 
      
      
          //   expect(typeof war.addSaxon).toBe('function'); 
      
      
            expect(typeof war.addSaxon).toBe('function'); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should receive 1 argument (a Saxon object)', () => { 
      
      
          it('should receive 1 argument (a Saxon object)', () => { 
      
      
          //   expect(war.addSaxon.length).toEqual(1); 
      
      
            expect(war.addSaxon.length).toEqual(1); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it('should add the received Saxon to the army', () => { 
      
      
          it('should add the received Saxon to the army', () => { 
      
      
          //   war.addSaxon(saxon); 
      
      
            war.addSaxon(saxon); 
      
      
          //   expect(war.saxonArmy).toEqual([saxon]); 
      
      
            expect(war.saxonArmy).toEqual([saxon]); 
      
      
          // }); 
      
      
          }); 
      
      
          // 
      
      
      
      
      
          // it("shouldn't return anything", () => { 
      
      
          it("shouldn't return anything", () => { 
      
      
          //   expect(war.addSaxon(saxon)).toEqual(undefined); 
      
      
            expect(war.addSaxon(saxon)).toEqual(undefined); 
      
      
          // }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      
      
      
      
      
      
        describe("Armies Attack", () => { 
      
      
        describe("Armies Attack", () => { 
      
      @@ -289,85 +289,85 @@ describe("War", () => {
      
      
          }); 
      
      
          }); 
      
      
      
      
      
      
      
      
          describe("vikingAttack() method", () => { 
      
      
          describe("vikingAttack() method", () => { 
      
      
            // it('should be a function', () => { 
      
      
            it('should be a function', () => { 
      
      
            //   expect(typeof war.vikingAttack).toBe('function'); 
      
      
              expect(typeof war.vikingAttack).toBe('function'); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should receive 0 arguments', () => { 
      
      
            it('should receive 0 arguments', () => { 
      
      
            //   expect(war.vikingAttack.length).toEqual(0); 
      
      
              expect(war.vikingAttack.length).toEqual(0); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should make Saxon receiveDamage() equal to the strength of a Viking', () => { 
      
      
            it('should make Saxon receiveDamage() equal to the strength of a Viking', () => { 
      
      
            //   let oldHealth = saxon.health; 
      
      
              let oldHealth = saxon.health; 
      
      
            //   war.vikingAttack(); 
      
      
              war.vikingAttack(); 
      
      
            //   expect(saxon.health).toEqual(oldHealth - viking.strength); 
      
      
              expect(saxon.health).toEqual(oldHealth - viking.strength); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should remove dead saxons from the army', () => { 
      
      
            it('should remove dead saxons from the army', () => { 
      
      
            //   war.vikingAttack(); 
      
      
              war.vikingAttack(); 
      
      
            //   expect(war.saxonArmy.length).toEqual(0); 
      
      
              expect(war.saxonArmy.length).toEqual(0); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should return result of calling receiveDamage() of a Saxon with the strength of a Viking', () => { 
      
      
            it('should return result of calling receiveDamage() of a Saxon with the strength of a Viking', () => { 
      
      
            //   expect(war.vikingAttack()).toEqual('A Saxon has died in combat'); 
      
      
              expect(war.vikingAttack()).toEqual('A Saxon has died in combat'); 
      
      
            // }); 
      
      
            }); 
      
      
          }); 
      
      
          }); 
      
      
      
      
      
      
      
      
          describe("saxonAttack() method", () => { 
      
      
          describe("saxonAttack() method", () => { 
      
      
            // it('should be a function', () => { 
      
      
            it('should be a function', () => { 
      
      
            //   expect(typeof war.saxonAttack).toBe('function'); 
      
      
              expect(typeof war.saxonAttack).toBe('function'); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should receive 0 arguments', () => { 
      
      
            it('should receive 0 arguments', () => { 
      
      
            //   expect(war.saxonAttack.length).toEqual(0); 
      
      
              expect(war.saxonAttack.length).toEqual(0); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should make a Viking receiveDamage() equal to the strength of a Saxon', () => { 
      
      
            it('should make a Viking receiveDamage() equal to the strength of a Saxon', () => { 
      
      
            //   let oldHealth = viking.health; 
      
      
              let oldHealth = viking.health; 
      
      
            //   war.saxonAttack(); 
      
      
              war.saxonAttack(); 
      
      
            //   expect(viking.health).toEqual(oldHealth - saxon.strength); 
      
      
              expect(viking.health).toEqual(oldHealth - saxon.strength); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should remove dead vikings from the army', () => { 
      
      
            it('should remove dead vikings from the army', () => { 
      
      
            //   for (let i = 0; i < 12; i++) { 
      
      
              for (let i = 0; i < 12; i++) { 
      
      
            //     war.saxonAttack(); 
      
      
                war.saxonAttack(); 
      
      
            //   } 
      
      
              } 
      
      
            //   expect(war.vikingArmy.length).toEqual(0); 
      
      
              expect(war.vikingArmy.length).toEqual(0); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should return result of calling receiveDamage() of a Viking with the strength of a Saxon', () => { 
      
      
            it('should return result of calling receiveDamage() of a Viking with the strength of a Saxon', () => { 
      
      
            //   expect(war.saxonAttack()).toEqual( 
      
      
              expect(war.saxonAttack()).toEqual( 
      
      
            //     `${viking.name} has received ${saxon.strength} points of damage` 
      
      
                `${viking.name} has received ${saxon.strength} points of damage` 
      
      
            //   ); 
      
      
              ); 
      
      
            // }); 
      
      
            }); 
      
      
          }); 
      
      
          }); 
      
      
      
      
      
      
      
      
          describe("showStatus() method", () => { 
      
      
          describe("showStatus() method", () => { 
      
      
            // it('should be a function', () => { 
      
      
            it('should be a function', () => { 
      
      
            //   expect(typeof war.showStatus).toBe('function'); 
      
      
              expect(typeof war.showStatus).toBe('function'); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should receive 0 arguments', () => { 
      
      
            it('should receive 0 arguments', () => { 
      
      
            //   expect(war.showStatus.length).toEqual(0); 
      
      
              expect(war.showStatus.length).toEqual(0); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should return "Vikings have won the war of the century!", if the Saxons array is empty', () => { 
      
      
            it('should return "Vikings have won the war of the century!", if the Saxons array is empty', () => { 
      
      
            //   war.vikingAttack(); 
      
      
              war.vikingAttack(); 
      
      
            //   expect(war.showStatus()).toEqual('Vikings have won the war of the century!'); 
      
      
              expect(war.showStatus()).toEqual('Vikings have won the war of the century!'); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty', () => { 
      
      
            it('should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty', () => { 
      
      
            //   for (let i = 0; i < 12; i++) { 
      
      
              for (let i = 0; i < 12; i++) { 
      
      
            //     war.saxonAttack(); 
      
      
                war.saxonAttack(); 
      
      
            //   } 
      
      
              } 
      
      
            //   expect(war.showStatus()).toEqual( 
      
      
              expect(war.showStatus()).toEqual( 
      
      
            //     'Saxons have fought for their lives and survived another day...' 
      
      
                'Saxons have fought for their lives and survived another day...' 
      
      
            //   ); 
      
      
              ); 
      
      
            // }); 
      
      
            }); 
      
      
            // 
      
      
      
      
      
            // it('should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons', () => { 
      
      
            it('should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons', () => { 
      
      
            //   expect(war.showStatus()).toEqual('Vikings and Saxons are still in the thick of battle.'); 
      
      
              expect(war.showStatus()).toEqual('Vikings and Saxons are still in the thick of battle.'); 
      
      
            // }); 
      
      
            }); 
      
      
          }); 
      
      
          }); 
      
      
        }); 
      
      
        }); 
      
      
      }); 
      
      
      });