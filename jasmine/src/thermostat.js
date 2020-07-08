class Thermostat{

  constructor(){
    this.temperature = 20;
    this.MIN_TEMPERATURE = 10;
    this.MAX_TEMPERATURE = 32;
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


};
