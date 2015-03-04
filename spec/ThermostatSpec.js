describe('Thermostat', function() {
  var thermostat;

   beforeEach(function(){
       thermostat = new Thermostat();
    });

  describe('temperature control', function() {

    function dropEleven() {
      for (var i=0; i <11; i++) {
        thermostat.down();
      };
    };

    it('should start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('should be able to increase temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('should be able to decrease temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('should have a minimum temperature of 10', function() {
      dropEleven();
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('Power saving mode', function() {

    function raiseSix() {
      for (var i=0; i <6; i++) {
        thermostat.up();
      };
    };

    function raiseThirteen() {
      for (var i=0; i <13; i++) {
        thermostat.up();
      };
    };

    it('is on by default', function() {
      expect(thermostat.powerSave).toBe(true);
    });

    it('can be turned off', function() {
      thermostat.saveOff();
      expect(thermostat.powerSave).toBe(false);
    });

    it('max temperature is 25 degrees with powersave on', function() {
      raiseSix();
      expect(thermostat.temperature).toEqual(25);
    });

    it('max temperature is 32 degrees with powersave off', function() {
      thermostat.saveOff();
      raiseThirteen();
      expect(thermostat.temperature).toEqual(32);
    });

    it('change max temperature when switched on', function() {
      thermostat.saveOff();
      raiseSix();
      thermostat.saveOn();
      expect(thermostat.temperature).toEqual(25);
    });

    it('does not change temperature if under 25 when switched on', function() {
      thermostat.saveOff();
      thermostat.up();
      thermostat.saveOn();
      expect(thermostat.temperature).toEqual(21);
    });

  });

  describe('reset button', function() {

    it('sets the temperature to 20', function() {
      thermostat.up();
      thermostat.resetButton();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('colour display', function() {

    function dropThree() {
      for (var i=0; i <3; i++) {
        thermostat.down();
      };
    };

    function raiseFive() {
      for (var i=0; i <5; i++) {
        thermostat.up();
      };
    };

    it('is yellow when temperature is less than 25', function() {
      expect(thermostat.colour()).toEqual("yellow");
    });

    it('is green when less than 18', function() {
      dropThree();
      expect(thermostat.colour()).toEqual("green");
    });

    it('is red if temperature is 25 or greater', function() {
      raiseFive();
      expect(thermostat.colour()).toEqual("red");
    });

  });

});










