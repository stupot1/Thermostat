class Thermostat{

  constructor(){
    this.MIN_TEMPERATURE = 10;
    this.MAX_TEMPERATURE = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.PowerSavingOn();
  }

  up(input){
    this.temperature +=input;
  }

  down(input){
    if (( this.temperature - input ) < this.MIN_TEMPERATURE ){
      this.temperature = this.MIN_TEMPERATURE;
    } else {
      this.temperature = this.temperature - input;
    }
  }

  PowerSavingOn(){
    this.MAX_TEMPERATURE = 25;
    this.powerSavingMode = true;
  }

  PowerSavingOff(){
    this.MAX_TEMPERATURE = 32;
    this.powerSavingMode = false;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;

  }


};
