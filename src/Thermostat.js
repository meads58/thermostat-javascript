var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
  this.powerSaveMax = 25
  this.maxTemp = 32
};

Thermostat.prototype.up = function() {
  if (this.powerSave === true) {
    this.powerSaveUp();
    }
  else{
    if(this.powerSave === false && this.temperature < this.maxTemp) {
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
  this.temperature = (this.temperature > this.powerSaveMax) ? this.powerSaveMax : this.temperature;
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
    return "orange";
  };
};

Thermostat.prototype.powerSaveUp = function() {
   if(this.temperature < this.powerSaveMax ) {
    this.temperature += 1;};
};

Thermostat.prototype.generalUp = function() {

};