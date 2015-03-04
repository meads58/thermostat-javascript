var thermostat = new Thermostat();
$(document).ready(function(){

  function textDisplay(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css('color', thermostat.colour());
  };

  textDisplay();

  $("#increaseTemp").on('click', function(e) {
    thermostat.up();
    e.preventDefault();
    textDisplay();
  });

  $("#decreaseTemp").on('click', function(e) {
    thermostat.down();
    e.preventDefault();
    textDisplay();
  });

  $("#reset").on('click', function(e) {
    e.preventDefault();
    thermostat.resetButton();
    textDisplay();
  });

  $('#powerOn').on('click', function(e) {
    e.preventDefault();
    thermostat.saveOn();
    $('#temperature').text(thermostat.temperature);
    $('#currentMode').text("On");
  });

  $('#powerOff').on('click', function(e) {
    e.preventDefault();
    thermostat.saveOff();
    $('#temperature').text(thermostat.temperature);
    $('#currentMode').text("Off");
  });

});