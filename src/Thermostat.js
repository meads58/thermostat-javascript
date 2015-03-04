var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.up = function() {
  if (this.powerSave === true && this.temperature <25 ) {
    this.temperature += 1;
    }
  else{
    if(this.powerSave === false && this.temperature < 32) {
      this.temperature +=1 ;
    };
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

Thermostat.prototype.saveOn = function() {
  this.powerSave = true;
  if (this.temperature > 25) {
    this.temperature = 25;
  };
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour = function() {
  if (this.temperature < 18) {
    return "green";
  }
  else if (this.temperature > 24)  {
    return "red";
  }
  else{
    return "yellow";
  };
};