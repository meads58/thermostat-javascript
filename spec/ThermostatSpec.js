describe('Thermostat', function() {
  var thermostat;

  describe('temperature control', function() {

    it('should start at 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });

  });

});