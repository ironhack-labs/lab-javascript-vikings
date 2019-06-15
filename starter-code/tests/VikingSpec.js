describe("Soldier", function () {
  var soldier;
  var strength = 150;
  var health   = 300;

  beforeEach (function () {
    soldier = new Soldier(health, strength);
  });

  describe("constructor function", function () {
    it("should receive 2 arguments (health & strength)", function () {
      expect(Soldier.length).toEqual(2);
    });

    it("should receive the health property as its 1st argument", function () {
      expect(soldier.health).toEqual(health);
    });

    it("should receive the strength property as its 2nd argument", function () {
      expect(soldier.strength).toEqual(strength);
    });
  });

  describe("attack() method", function () {
    it("should be a function", function () {
      expect(typeof(soldier.attack)).toBe("function");
    });

    it("should receive 0 arguments", function () {
      expect(soldier.attack.length).toEqual(0);
    });

    it("should return the strength property of the Soldier", function () {
      expect(soldier.attack()).toEqual(strength);
    });
  });

  describe("receiveDamage() method", function () {
    it("should be a function", function () {
      expect(typeof(soldier.receiveDamage)).toBe("function");
    });

    it("should receive 1 argument (the damage)", function () {
      expect(soldier.receiveDamage.length).toEqual(1);
    });

    it("should remove the received damage from the health property", function () {
      soldier.receiveDamage(50);
      expect(soldier.health).toEqual(health - 50);
    });

    it("shouldn't return anything", function () {
      expect(soldier.receiveDamage(50)).toEqual(undefined);
    });
  });
});


describe("Viking", function () {
  var viking;
  var name     = "Harald";
  var strength = 150;
  var health   = 300;

  beforeEach (function () {
    viking = new Viking(name, health, strength);
  });

  it("should inherit from Soldier", function () {
    expect(viking instanceof Soldier).toEqual(true);
  });

  describe("constructor function", function () {
    it("should receive 3 arguments (name, health & strength)", function () {
      expect(Viking.length).toEqual(3);
    });

    it("should receive the name property as its 1st argument", function () {
      expect(viking.name).toEqual(name);
    });

    it("should receive the health property as its 2nd argument", function () {
      expect(viking.health).toEqual(health);
    });

    it("should receive the strength property as its 3rd argument", function () {
      expect(viking.strength).toEqual(strength);
    });
  });

  describe("attack() method", function () {
    it("should be a function", function () {
      expect(typeof(viking.attack)).toBe("function");
    });

    it("should receive 0 arguments", function () {
      expect(viking.attack.length).toEqual(0);
    });

    it("should return the strength property of the Viking", function () {
      expect(viking.attack()).toEqual(strength);
    });
  });

  describe("receiveDamage() method", function () {
    it("should be a function", function () {
      expect(typeof(viking.receiveDamage)).toBe("function");
    });

    it("should receive 1 argument (the damage)", function () {
      expect(viking.receiveDamage.length).toEqual(1);
    });

    it("should remove the received damage from the health property", function () {
      viking.receiveDamage(50);
      expect(viking.health).toEqual(health - 50);
    });

    it("should return \"NAME has received DAMAGE points of damage\", if the Viking is still alive", function () {
      expect(viking.receiveDamage(50)).toEqual(name + " has received 50 points of damage");
      expect(viking.receiveDamage(75)).toEqual(name + " has received 75 points of damage");
    });

    it("should return \"NAME has died in act of combat\", if the Viking dies", function () {
      expect(viking.receiveDamage(health)).toEqual(name + " has died in act of combat");
    });
  });

  describe("battleCry() method", function () {
    it("should be a function", function () {
      expect(typeof(viking.battleCry)).toBe("function");
    });

    it("should receive 0 arguments", function () {
      expect(viking.battleCry.length).toEqual(0);
    });

    it("should return \"Odin Owns You All!\"", function () {
      expect(viking.battleCry()).toEqual("Odin Owns You All!");
    });
  });
});


describe("Saxon", function () {
  var saxon;
  var health   = 60;
  var strength = 25;

  beforeEach(function () {
    saxon = new Saxon(health, strength);
  });

  it("should inherit from Soldier", function () {
    expect(saxon instanceof Soldier).toEqual(true);
  });

  describe("constructor function", function () {
    it("should receive 2 arguments (health & strength)", function () {
      expect(Saxon.length).toEqual(2);
    });

    it("should receive the health property as its 1st argument", function () {
      expect(saxon.health).toEqual(health);
    });

    it("should receive the strength property as its 2nd argument", function () {
      expect(saxon.strength).toEqual(strength);
    });
  });

  describe("attack() method", function () {
    it("should be a function", function () {
      expect(typeof(saxon.attack)).toBe("function");
    });

    it("should receive 0 arguments", function () {
      expect(saxon.attack.length).toEqual(0);
    });

    it("should return the strength property of the Saxon", function () {
      expect(saxon.attack()).toEqual(strength);
    });
  });

  describe("receiveDamage() method", function () {
    it("should be a function", function () {
      expect(typeof(saxon.receiveDamage)).toBe("function");
    });

    it("should receive 1 argument (the damage)", function () {
      expect(saxon.receiveDamage.length).toEqual(1);
    });

    it("should remove the received damage from the health property", function () {
      saxon.receiveDamage(50);
      expect(saxon.health).toEqual(health - 50);
    });

    it("should return \"A Saxon has received DAMAGE points of damage\", if the Saxon is still alive", function () {
      expect(saxon.receiveDamage(45)).toEqual("A Saxon has received 45 points of damage");
      expect(saxon.receiveDamage(10)).toEqual("A Saxon has received 10 points of damage");
    });

    it("should return \"A Saxon has died in combat\", if the Saxon dies", function () {
      expect(saxon.receiveDamage(health)).toEqual("A Saxon has died in combat");
    });
  });
});


describe("War", function () {
  var viking, saxon, war;

  function generateViking () {
    var name     = "Harald";
    var strength = 150;
    var health   = 300;

    return new Viking(name, health, strength);
  }

  function generateSaxon () {
    var health   = 60;
    var strength = 25;

    return new Saxon(health, strength);
  }

  beforeEach(function () {
    viking = generateViking();
    saxon  = generateSaxon();
    war    = new War();
  });

  describe("constructor function", function () {
    it("should receive 0 arguments", function () {
      expect(War.length).toEqual(0);
    });

    it("should assign an empty array to the vikingArmy property", function () {
      expect(war.vikingArmy).toEqual([]);
    });

    it("should assign an empty array to the saxonArmy property", function () {
      expect(war.saxonArmy).toEqual([]);
    });
  });

  describe("addViking() method", function () {
    it("should be a function", function () {
      expect(typeof(war.addViking)).toBe("function");
    });

    it("should receive 1 argument (a Viking object)", function () {
      expect(war.addViking.length).toEqual(1);
    });

    it("should add the received Viking to the army", function () {
      war.addViking(viking);
      expect(war.vikingArmy).toEqual([ viking ]);
    });

    it("shouldn't return anything", function () {
      expect(war.addViking(viking)).toEqual(undefined);
    });
  });

  describe("addSaxon() method", function () {
    it("should be a function", function () {
      expect(typeof(war.addSaxon)).toBe("function");
    });

    it("should receive 1 argument (a Saxon object)", function () {
      expect(war.addSaxon.length).toEqual(1);
    });

    it("should add the received Saxon to the army", function () {
      war.addSaxon(saxon);
      expect(war.saxonArmy).toEqual([ saxon ]);
    });

    it("shouldn't return anything", function () {
      expect(war.addSaxon(saxon)).toEqual(undefined);
    });
  });

  describe("Armies Attack", function () {
    beforeEach (function () {
      war.addViking(viking);
      war.addSaxon(saxon);
    });

    describe("vikingAttack() method", function () {
      it("should be a function", function () {
        expect(typeof(war.vikingAttack)).toBe("function");
      });

      it("should receive 0 arguments", function () {
        expect(war.vikingAttack.length).toEqual(0);
      });

      it("should make Saxon receiveDamage() equal to the strength of a Viking", function () {
        var oldHealth = saxon.health;
        war.vikingAttack();
        expect(saxon.health).toEqual(oldHealth - viking.strength);
      });

      it("should remove dead saxons from the army", function () {
        war.vikingAttack();
        expect(war.saxonArmy.length).toEqual(0);
      });

      it("should return result of calling receiveDamage() of a Saxon with the strength of a Viking", function () {
        expect(war.vikingAttack()).toEqual("A Saxon has died in combat");
      });
    });

    describe("saxonAttack() method", function () {
      it("should be a function", function () {
        expect(typeof(war.saxonAttack)).toBe("function");
      });

      it("should receive 0 arguments", function () {
        expect(war.saxonAttack.length).toEqual(0);
      });

      it("should make a Viking receiveDamage() equal to the strength of a Saxon", function () {
        var oldHealth = viking.health;
        war.saxonAttack();
        expect(viking.health).toEqual(oldHealth - saxon.strength);
      });

      it("should remove dead vikings from the army", function () {
        for (var i = 0; i < 12; i += 1) {
          war.saxonAttack();
        }
        expect(war.vikingArmy.length).toEqual(0);
      });

      it("should return result of calling receiveDamage() of a Viking with the strength of a Saxon", function () {
        expect(war.saxonAttack()).toEqual(viking.name + " has received " + saxon.strength + " points of damage");
      });
    });

    describe("showStatus() method", function () {
      it("should be a function", function () {
        expect(typeof(war.showStatus)).toBe("function");
      });

      it("should receive 0 arguments", function () {
        expect(war.showStatus.length).toEqual(0);
      });

      it("should return \"Vikings have won the war of the century!\", if the Saxons array is empty", function () {
        war.vikingAttack();
        expect(war.showStatus()).toEqual("Vikings have won the war of the century!");
      });

      it("should return \"Saxons have fought for their lives and survive another day...\", if the Vikings array is empty", function () {
        for (var i = 0; i < 12; i += 1) {
          war.saxonAttack();
        }
        expect(war.showStatus()).toEqual("Saxons have fought for their lives and survive another day...");
      });

      it("should return \"Vikings and Saxons are still in the thick of battle.\", if there are still both Vikings and Saxons", function () {
        expect(war.showStatus()).toEqual("Vikings and Saxons are still in the thick of battle.");
      });
    });
  });
});
