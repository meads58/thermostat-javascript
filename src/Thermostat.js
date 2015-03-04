var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.up = function() {
  if (this.powerSave === true && this.temperature <25 ) {
  this.temperature += 1;
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.saveOff = function() {
  this.powerSave = false;
};

