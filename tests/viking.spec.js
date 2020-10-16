describe('Soldier', () => {
  let soldier;
  const strength = 150;
  const health = 300;

  beforeEach(() => {
    soldier = new Soldier(health, strength);
  });

  describe('class', () => {
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

describe('Viking', () => {
  let viking;
  const name = 'Harald';
  const strength = 150;
  const health = 300;

  beforeEach(() => {
    viking = new Viking(name, health, strength);
  });

  it('should inherit from Soldier', () => {
    expect(viking instanceof Soldier).toEqual(true);
  });

  describe('class', () => {
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

  describe('battleCry() method', () => {
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

describe('Saxon', () => {
  let saxon;
  const health = 60;
  const strength = 25;

  beforeEach(() => {
    saxon = new Saxon(health, strength);
  });

  it('should inherit from Soldier', () => {
    expect(saxon instanceof Soldier).toEqual(true);
  });

  describe('class', () => {
    it('should receive the health property as its 1st argument', () => {
      expect(saxon.health).toEqual(health);
    });
    
    it('should receive the strength property as its 2nd argument', () => {
      expect(saxon.strength).toEqual(strength);
    });
  });

  describe('attack() method', () => {
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

  describe('receiveDamage() method', () => {
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

describe('War', () => {
  let viking, saxon, war;

  function generateViking() {
    const name = 'Harald';
    const strength = 150;
    const health = 300;
    return new Viking(name, health, strength);
  }

  function generateSaxon() {
    const health = 60;
    const strength = 25;
    return new Saxon(health, strength);
  }

  beforeEach(() => {
    viking = generateViking();
    saxon = generateSaxon();
    war = new War();
  });

  describe('class', () => {
    it('should receive 0 arguments', () => {
      expect(War.length).toEqual(0);
    });
    
    it('should assign an empty array to the vikingArmy property', () => {
      expect(war.vikingArmy).toEqual([]);
    });
    
    it('should assign an empty array to the saxonArmy property', () => {
      expect(war.saxonArmy).toEqual([]);
    });
  });

  describe('addViking() method', () => {
    it('should be a function', () => {
      expect(typeof war.addViking).toBe('function');
    });
    
    it('should receive 1 argument (a Viking object)', () => {
      expect(war.addViking.length).toEqual(1);
    });
    
    it('should add the received Viking to the army', () => {
      war.addViking(viking);
      expect(war.vikingArmy).toEqual([viking]);
    });
    
    it("shouldn't return anything", () => {
      expect(war.addViking(viking)).toEqual(undefined);
    });
  });

  describe('addSaxon() method', () => {
    it('should be a function', () => {
      expect(typeof war.addSaxon).toBe('function');
    });
    
    it('should receive 1 argument (a Saxon object)', () => {
      expect(war.addSaxon.length).toEqual(1);
    });
    
    it('should add the received Saxon to the army', () => {
      war.addSaxon(saxon);
      expect(war.saxonArmy).toEqual([saxon]);
    });
    
    it("shouldn't return anything", () => {
      expect(war.addSaxon(saxon)).toEqual(undefined);
    });
  });

  describe('Armies Attack', () => {
    beforeEach(() => {
      war.addViking(viking);
      war.addSaxon(saxon);
    });

    describe('vikingAttack() method', () => {
      it('should be a function', () => {
        expect(typeof war.vikingAttack).toBe('function');
      });
      
      it('should receive 0 arguments', () => {
        expect(war.vikingAttack.length).toEqual(0);
      });
      
      it('should make Saxon receiveDamage() equal to the strength of a Viking', () => {
        let oldHealth = saxon.health;
        war.vikingAttack();
        expect(saxon.health).toEqual(oldHealth - viking.strength);
      });
      
      it('should remove dead saxons from the army', () => {
        war.vikingAttack();
        expect(war.saxonArmy.length).toEqual(0);
      });
      
      it('should return result of calling receiveDamage() of a Saxon with the strength of a Viking', () => {
        expect(war.vikingAttack()).toEqual('A Saxon has died in combat');
      });
    });

    describe('saxonAttack() method', () => {
      it('should be a function', () => {
        expect(typeof war.saxonAttack).toBe('function');
      });
      
      it('should receive 0 arguments', () => {
        expect(war.saxonAttack.length).toEqual(0);
      });
      
      it('should make a Viking receiveDamage() equal to the strength of a Saxon', () => {
        let oldHealth = viking.health;
        war.saxonAttack();
        expect(viking.health).toEqual(oldHealth - saxon.strength);
      });
      
      it('should remove dead vikings from the army', () => {
        for (let i = 0; i < 12; i++) {
          war.saxonAttack();
        }
        expect(war.vikingArmy.length).toEqual(0);
      });
      
      it('should return result of calling receiveDamage() of a Viking with the strength of a Saxon', () => {
        expect(war.saxonAttack()).toEqual(
          `${viking.name} has received ${saxon.strength} points of damage`
        );
      });
    });

    describe('showStatus() method', () => {
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
