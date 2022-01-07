const { Soldier, Viking, Saxon, War } = require('./../src/viking');

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
    it('should be a declared', () => {
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
    it('should be a declared', () => {
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
    it('should be a declared', () => {
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
    it('should be a declared', () => {
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
      expect(viking.receiveDamage(50)).toEqual(
        `${name} has received 50 points of damage`
      );
      expect(viking.receiveDamage(75)).toEqual(
        `${name} has received 75 points of damage`
      );
    });

    it('should return "NAME has died in act of combat", if the Viking dies', () => {
      expect(viking.receiveDamage(health)).toEqual(
        `${name} has died in act of combat`
      );
    });
  });

  describe('battleCry() method', () => {
    it('should be a declared', () => {
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
    it('should be a declared', () => {
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
    it('should be a declared', () => {
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
      expect(saxon.receiveDamage(45)).toEqual(
        'A Saxon has received 45 points of damage'
      );
      expect(saxon.receiveDamage(10)).toEqual(
        'A Saxon has received 10 points of damage'
      );
    });

    it('should return "A Saxon has died in combat", if the Saxon dies', () => {
      expect(saxon.receiveDamage(health)).toEqual('A Saxon has died in combat');
    });
  });
});
