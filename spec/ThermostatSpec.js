describe('Thermostat', function() {
  var thermostat;

  describe('temperature control', function() {

    beforeEach(function(){
       thermostat = new Thermostat();
    });

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


  });

});